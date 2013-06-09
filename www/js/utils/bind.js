define(function() {

  // Public: Function binding utility - pretty much copied wholesale
  // from Coffeescript implementation
  //
  // fn      - function to be bound to a given context
  // context - context onto which the function should be bound
  //
  // Returns bound function, bound to the context.
  var __bind = function(fn, context) {
    return function() {
      return fn.apply(context, arguments);
    };
  };

  return __bind;
});

