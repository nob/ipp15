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
      var org_top;
      var org_left;
      $('a.pitem').adaptiveModal({
        beforeAnimate: function(el, status) {
          if(status == 'open') {
            //avoid menu-title is loose it's style and been shown in bottom of the flipping card.
            el.children('.menu-title').css('display', 'none');

            //fixed modal position.
            org_top = el.offset().top - $(window).scrollTop();
            org_left = el.offset().left - $(window).scrollLeft();
            $('.am-modal').css('top', org_top);
            $('.am-modal').css('left', org_left);
          }
        },
        afterAnimate: function(el, status) {
          if (status == 'open') {
            //put the menu-title back to original state after animation.
            el.children('.menu-title').css('display', 'block');
          }
        }
      });

      //Close Adaptive modal on scroll.
      $(document).on('scroll', function () {
        if ($('body').hasClass('am-modal-open')) {
          $(".am-back .am-close, .am-close-backdrop, .am-trigger-close").click();
        }
      });
    } else {
      // IE(even in IE11) can't handle CSS3 3D Transforms correctly. Use TwtBootstrap Modal.
      $('a.pitem').click(function() {
        $('#ipp-modal').css('backgroundColor', $(this).css('backgroundColor'));
        $($(this).attr('href') + '-twb').modal('show');
      });
    }

    //hover effect which can't handle only css.
    $('a.pitem .menu-title').hover(function(){
      $(this).prev().css('opacity', '0.7');
    }, function(){
      $(this).prev().css('opacity', '0');
    });
    $('a.pitem .overlay').hover(function(){
      $(this).css('opacity', '0.7');
    }, function(){
      $(this).css('opacity', '0');
    });

})(window.jQuery);
