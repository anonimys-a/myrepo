(function($) {
  
  'use strict';

  // variables
  var $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single'),
      $isAnimatedFifth = $('.fifth .is-animated'),
      $isAnimatedFifthSingle = $('.fifth .is-animated__single');
  // initialize fullPage
  $('#fullpage').fullpage({

    navigation: true,
    onLeave: function(index, nextIndex, direction) {
    
      /**
      * use the following condition: 
      *
      *   if( index == 1 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first section to another sections 
      */
      
      // first animation
      if( index == 1 && nextIndex == 2 ) { 
        $isAnimatedSecond.addClass('animated fadeInUpBig'); 
        $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
        $isAnimatedSecond.eq(3).css('animation-delay', '1.2s');
        $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
      }

    /**
      * use the following condition: 
      *
      *   else if( index == 2 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) from the first section to the third one 
      */
      
      // second animation
      else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
        $isAnimatedThird.eq(0).addClass('animated fadeIn').css('animation-delay', '.3s'); 
        $isAnimatedThird.eq(1).addClass('animated slideInLeft').css('animation-delay', '.3s');
        $isAnimatedThird.eq(2).addClass('animated fadeIn').css('animation-delay', '.3s');
        $isAnimatedThird.eq(3).addClass('animated slideInLeft').css('animation-delay', '.3s');
        $isAnimatedThird.eq(4).addClass('animated fadeIn').css('animation-delay', '.3s');
        $isAnimatedThird.eq(5).addClass('animated slideInLeft').css('animation-delay', '.3s');
        $isAnimatedThird.eq(6).addClass('animated fadeIn').css('animation-delay', '.3s');
        $isAnimatedThird.eq(7).addClass('animated slideInLeft').css('animation-delay', '.3s');
        $isAnimatedThird.eq(8).addClass('animated fadeIn').css('animation-delay', '.3s');
        $isAnimatedThird.eq(9).addClass('animated slideInRight').css('animation-delay', '.3s');
        $isAnimatedThird.eq(10).addClass('animated fadeIn').css('animation-delay', '.3s');
        $isAnimatedThird.eq(11).addClass('animated slideInRight').css('animation-delay', '.3s');
        $isAnimatedThird.eq(12).addClass('animated fadeIn').css('animation-delay', '.3s');
        $isAnimatedThird.eq(13).addClass('animated slideInRight').css('animation-delay', '.3s');
        $isAnimatedThird.eq(14).addClass('animated fadeIn').css('animation-delay', '.3s');
        $isAnimatedThird.eq(15).addClass('animated slideInRight').css('animation-delay', '.3s');
        $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
      }

      
     /**
      * use the following condition:
      *
      *   else if( index == 3 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first or second section to the fourth one 
      */
      
      // third animation
      else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
        $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
        $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
        $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
        });
      }
    }

  });
  
})(jQuery);