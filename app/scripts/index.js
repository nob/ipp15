(function($){
    //load intro flash movie.
    $('#noflash-msg').show();
    flashembed("flash", {
      src: 'intro.swf',
      bgcolor: '#000000',
      expressInstall: "http://static.flowplayer.org/swf/expressinstall.swf",
      onFail: function() {
        closeFlash();
      },
    });
    //Initialize "Enter" anchor.
    $('#enter').click(function(event) {
      event.preventDefault ? event.preventDefault() : event.returnValue = false;
      closeFlash();
    });


    var $container = $('#pola_board').imagesLoaded( function() {
      // initialize Packery after all images have loaded
      var gtr = (window.innerWidth > 414) ? -40 : -10;
      $container.packery({
        itemSelector: '.pitem',
        gutter: gtr,
        "isOriginTop": false
      });
    });

    var OS = getMobileOperatingSystem();
    if (Modernizr.preserve3d && OS != 'iOS' && OS != 'Android') {
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
            //put back language selection to original state after animation.
            if ($('.btn-ja').hasClass('active')) {
              $('.am-modal-content *[lang=en]').addClass('lang-inactive');
            } else if ($('.btn-en').hasClass('active')) {
              $('.am-modal-content *[lang=ja]').addClass('lang-inactive');
            }
          } else {
            el.children('.menu-title').css('display', 'block');
            if ($('.btn-ja').hasClass('active')) {
              $('*[lang=en].menu-title').addClass('lang-inactive');
            } else if ($('.btn-en').hasClass('active')) {
              $('*[lang=ja].menu-title').addClass('lang-inactive');
            }
          }
        }
      });

      // Close Adaptive modal on scroll.
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

    //swiching language.
    $('.btn-en').click(function(){
        $(this).addClass('active');
        $(this).parent().find('.btn-ja').removeClass('active');
        $('*[lang=en]').removeClass('lang-inactive');
        $('*[lang=ja]').addClass('lang-inactive');
    });
    $('.btn-ja').click(function(){
        $(this).addClass('active');
        $(this).parent().find('.btn-en').removeClass('active');
        $('*[lang=ja]').removeClass('lang-inactive');
        $('*[lang=en]').addClass('lang-inactive');
    });
    //Set Default language on initial page load.
    if ($('.btn-en').hasClass('active')) {
      $('.btn-en').click();
    } else {
      $('.btn-ja').click();
    }
    //hover effect which can't handle only css.
    $('a.pitem .menu-title').hover(function(){
      $(this).parent().find('.overlay').css('opacity', '0.7');
    }, function(){
      $(this).parent().find('.overlay').css('opacity', '0');
    });
    $('a.pitem .overlay').hover(function(){
      $(this).css('opacity', '0.7');
    }, function(){
      $(this).css('opacity', '0');
    });

})(window.jQuery);

function closeFlash() {
  $('#flash').hide();
  $('#flash-wrap > p').hide();
  $('#flash-wrap').fadeOut(1500);
  $('h1').delay(750).animate({ 'left': '+=120px', 'top': '+=200px' }, 400);
}
/**
 * Determine the mobile operating system.
 * This function either returns 'iOS', 'Android' or 'unknown'
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    return 'iOS';

  }
  else if( userAgent.match( /Android/i ) )
  {

    return 'Android';
  }
  else
  {
    return 'unknown';
  }
}
