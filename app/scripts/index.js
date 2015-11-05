(function($){

    var $container = $('#pola_board').imagesLoaded( function() {
      // initialize Packery after all images have loaded
      $container.packery({
        itemSelector: '.pitem',
        gutter: -40,
        "isOriginTop": false
      });
    });

    if (Modernizr.preserve3d) {
      //CSS3 3D effect can be used. initialize Adaptive Modal and use it!
      $('a.pitem').adaptiveModal({
        beforeAnimate: function(el, status) {
          //avoid menu-title is loose it's style and been shown in bottom of the flipping card.
          if(status == 'open') el.children('.menu-title').css('display', 'none');
        },
        afterAnimate: function(el, status) {
          //put the menu-title back to original state after animation.
          if (status == 'open') el.children('.menu-title').css('display', 'block');
        }
      });
    } else {
      // IE(even in IE11) can't handle CSS3 3D Transforms correctly. Use TwtBootstrap Modal.
      $('a.pitem').click(function() {
        $('#ipp-modal').css('backgroundColor', $(this).css('backgroundColor'));
        $($(this).attr('href') + '-twb').modal('show');
      });
    }

})(window.jQuery);
