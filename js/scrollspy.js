$(document).ready(function() {

  var vars = {};
  var sectionNumber = $('[id*="section"]').find().prevObject.length; //counts stages on each page
  for (var i = 1; i <= sectionNumber; i++) { //creates variable for each stage
    vars['sectionTop' + i] = $('#section' + i).offset().top;
  }
  console.log(sectionNumber);
  //scroll spy functionality
  function scrollSpy() {
    var windowTop = $(window).scrollTop() + 350;
    for (var j = 1; j <= sectionNumber; j++) {
      if (windowTop >= (vars['sectionTop'+j]) && windowTop < (vars['sectionTop'+(j+1)])) {
        $('[id*="scrollSpy"]').removeClass('active');
        $('#scrollSpy'+j).addClass('active');
      } else if (windowTop >= (vars['sectionTop'+sectionNumber])){
        $('[id*="scrollSpy"]').removeClass('active');
        $('#scrollSpy'+sectionNumber).addClass('active');
      }
    };
  }
  scrollSpy(); //calls function on page load

  $(window).scroll(function() { //calls function on scroll
    scrollSpy();
  });

  //smooth scrolls to different stages on page
  $('[id*="scrollSpy"]').click(function() { /* class or id of button/link that will be clicked */
    var number = this.id.replace(/\D+/g, '');
      $('html, body').animate({
          scrollTop: $("#section" + number).offset().top, /* class or id of div that will be scrolled to */
          behavior: 'smooth',
      }, 1000);
  });

});
