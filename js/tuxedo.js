$(document).ready(function() {

  /* Every time the window is scrolled ... */
  function animations() {
    $(window).scroll( function(){

      /* Check the location of each animate-in elements */
      $('.animate-in').each( function(){
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        var windowBottom = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up) fade out
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    });
  }
  function mobileMenu() {
    $('.hamburger').click(function() {
      $('.flyout').show();
      $('body').css({'overflow': 'hidden'});
    });
    $('.close').click(function() {
      $('.flyout').hide();
      $('body').css({'overflow': 'auto'});
    });
    $('.fly-dropdown').click(function() {
      $(this).children('.dropdown-menu').fadeToggle();
    });
    $('.sub-fly-dropdown').hover(function() {
      $(this).children('.sub-dropdown-menu').fadeToggle();
    });
  }

////////// Add Functions to Call HERE//////////

  mobileMenu();
  animations();
});
