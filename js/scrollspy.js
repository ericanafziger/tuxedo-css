$(document).ready(function() {

  var vars = {};
  var stagesNumber = $('[id*="stage"]').find().prevObject.length; //counts stages on each page
  for (var i = 1; i <= stagesNumber; i++) { //creates variable for each stage
    vars['stageTop' + i] = $('#stage' + i).offset().top;
  }

  //scroll spy functionality
  function scrollSpy() {
    var windowTop = $(window).scrollTop() + 350;
    for (var j = 1; j <= stagesNumber; j++) {
      if (windowTop >= (vars['stageTop'+j]) && windowTop < (vars['stageTop'+(j+1)])) {
        $('a[href*="#stage"]').parent().removeClass('active');
        $('a[href*="#stage'+j+'"]').parent().addClass('active');
      } else if (windowTop >= (vars['stageTop'+stagesNumber])){
        $('a[href*="#stage"]').parent().removeClass('active');
        $('a[href*="#stage'+stagesNumber+'"]').parent().addClass('active');
      }
    };
  }
  scrollSpy(); //calls function on page load

  $(window).scroll(function() { //calls function on scroll
    scrollSpy();
  });
  
  //smooth scrolls to different stages on page
  $('a[href*="#stage"]').click(function() { /* class or id of button/link that will be clicked */
    var number = this.href.replace(/\D+/g, '');
      $('html, body').animate({
          scrollTop: $("#stage" + number).offset().top, /* class or id of div that will be scrolled to */
          behavior: 'smooth',
      }, 1000);
  });

});
