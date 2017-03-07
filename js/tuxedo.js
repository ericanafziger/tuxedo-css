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


  // ================Slideshow Functionality ================//
function heroSlideshow() {
    var totalImages = $(".images").children().length; // # of total slideshow images
    var imageCounter = $(".images").children().length; // keeps track of current image
    var interval = null;
      function startSlideshow() { interval = setInterval(function() {
      var photoNumber = parseInt($(".images .active").attr('class')); // active photo
      $(".images img").removeClass("active");
      if (photoNumber < totalImages) {
        imageCounter = photoNumber + 1;
        $(".images img:nth-child("+imageCounter+")").addClass("active");
      } else if (photoNumber === totalImages) {
        imageCounter = 1;
        $(".images img:nth-child("+imageCounter+")").addClass("active");
      } else {
        imageCounter += 1;
        $(".images img:nth-child("+imageCounter+")").addClass("active");
      }
      photoNumber += 1;
      $(".circle").removeClass("active");
      $(".circle:nth-child("+imageCounter+")").addClass("active");
    }, 5000); }

    function stopSlideshow() { clearInterval(interval)}

    startSlideshow();
    $('.left-arrow').click(function(){
      stopSlideshow();
      var photoNumber = parseInt($(".images .active").attr('class')); // active photo
      $(".circle").removeClass("active");
      $(".images img").removeClass("active");
      if (photoNumber===1) {
        imageCounter = $(".images").children().length;
        $(".images img:nth-child("+imageCounter+")").addClass("active");
      } else {
        imageCounter -= 1;
        $(".images img:nth-child("+imageCounter+")").addClass("active");
      }
      $(".circle:nth-child("+imageCounter+")").addClass("active");
      startSlideshow();
    });

    $('.right-arrow').click(function(){
      stopSlideshow();
      var photoNumber = parseInt($(".images .active").attr('class')); // active photo
      $(".circle").removeClass("active");
      $(".images img").removeClass("active");
      if (photoNumber < totalImages) {
        imageCounter = photoNumber + 1;
        $(".images img:nth-child("+imageCounter+")").addClass("active");
      } else if (photoNumber === totalImages) {
        imageCounter = 1;
        $(".images img:nth-child("+imageCounter+")").addClass("active");
      } else {
        imageCounter += 1;
        $(".images img:nth-child("+imageCounter+")").addClass("active");
      }
      $(".circle:nth-child("+imageCounter+")").addClass("active");
      startSlideshow();
    });
    $(".circle").click(function(){
      stopSlideshow();
      var circleNumber = $(this).attr('class').replace(/[^\d]/g, ""); // clicked circle
      $(".circle").removeClass("active");
      $(this).addClass("active");
      $(".images img").removeClass("active");
      $(".images img:nth-child("+circleNumber+")").addClass("active");
      imageCounter = circleNumber;
      startSlideshow();
    });
  }


////////// Add Functions to Call HERE//////////
  heroSlideshow();
  mobileMenu();
  animations();
});
