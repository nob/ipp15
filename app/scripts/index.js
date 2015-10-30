(function($){

    var $container = $('#pola_board').imagesLoaded( function() {
      // initialize Packery after all images have loaded
      $container.packery({
        itemSelector: '.pitem',
        gutter: -40,
        percentPosition: true,
        "isOriginTop": false
      });
    });

    if (Modernizr.preserve3d) {
      //CSS3 3D effect can be used. initialize Adaptive Modal and use it!
      $('a.pitem').adaptiveModal({});
    } else {
      // IE(even in IE11) can't handle CSS3 3D Transforms correctly. Use TwtBootstrap Modal.
      $('a.pitem').click(function() {
        $('#ipp-modal').css('backgroundColor', $(this).css('backgroundColor'));
        $('#modal1-twb').modal('show');
      });
    }

})(window.jQuery);
