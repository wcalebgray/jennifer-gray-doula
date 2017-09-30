(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 500) {
      $("#mainNav").addClass("navbar-shrink").css('visibility','visible');
    } else {
      $("#mainNav").removeClass("navbar-shrink").css('visibility','hidden');
    }
  });

  //about-doulas special expand and collapse
  $('.selector').click(function() {
    if($(this).hasClass("active")) {
      return;
    } else if($(this).hasClass("inactive")){
      $(this).removeClass("inactive");
      $(this).siblings().removeClass("active");
    } else {
      $(this).addClass("active");
      $(this).siblings().addClass("inactive");
    }
  })

  $

})(jQuery); // End of use strict
