$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

    /* Check the location of each animate-in elements */
    $('.animate-in').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 200;
      var top_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},800);
      }
    });
  });

  $('.hamburger').click(function() {
    $('.flyout').fadeIn();
  });
  $('.close').click(function() {
    $('.flyout').fadeOut();
  });
});
