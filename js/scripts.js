$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

    /* Check the location of each animate-in elements */
    $('.animate-in').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){

        $(this).animate({'opacity':'1'},400);
      }

    });

    /* Check the location of animate-left elements */
    $('.animate-left').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, move it it */
      if( bottom_of_window > bottom_of_object ){

        $(this).animate({'margin-left':'0', 'opacity':'1'},600);

      }

    });
    /* Check the location of animate-right elements */
    $('.animate-right').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, move it it */
      if( bottom_of_window > bottom_of_object ){

        $(this).animate({'margin-right':'0', 'opacity':'1'},600);

      }

    });

  });

});
