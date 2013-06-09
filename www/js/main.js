requirejs.config({
  paths: {
    'jquery':   'vendor/jquery-1.8.2.min',
    'colorbox': 'vendor/jquery.colorbox-min',
    'bind':     'utils/bind'
  }
});

require(['jquery', 'app'], function($, App) {
  $(function() {
    App.bootstrap();
  });
});

