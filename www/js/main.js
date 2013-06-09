jQuery(function($) {
  $('.dialog').colorbox({
    inline: true,
    onLoad: function() {
      targetElement = $($(this).attr('href'));
      targetElement.removeClass('removed');
    },
    onClosed: function() {
      targetElement = $($(this).attr('href'));
      targetElement.addClass('removed');
    }
  });
});

