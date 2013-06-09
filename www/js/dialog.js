define(['jquery', 'bind', 'colorbox'], function($, __bind) {
  var Dialog,
      HIDDEN_CLASSNAME;

  HIDDEN_CLASSNAME = 'removed';

  /* Constructor */
  Dialog = function(element) {
    this.element = element;

    this.onLoad    = __bind(this.onLoad, this);
    this.onCleanup = __bind(this.onCleanup, this);

    this.attachEventListener();
  };

  /* Class methods */
  Dialog.bootstrap = function() {
    $('.dialog').each(function(index, element) {
      var el = $(element);
      return new Dialog(el);
    });
  };

  /* Instance methods */
  Dialog.prototype.attachEventListener = function() {
    this.element.colorbox({
      inline:    true,
      onLoad:    this.onLoad,
      onCleanup: this.onCleanup
    });
  };

  Dialog.prototype.onLoad = function() {
    var targetElement = this._getTargetElement();
        targetElement.removeClass(HIDDEN_CLASSNAME);
  };

  Dialog.prototype.onCleanup = function() {
    var targetElement = this._getTargetElement();
        targetElement.addClass(HIDDEN_CLASSNAME);
  };

  /* "Private" methods */
  Dialog.prototype._getTargetElement = function() {
    var hrefAttr = this.element.attr('href');
    return $(hrefAttr);
  };

  return Dialog;
});
