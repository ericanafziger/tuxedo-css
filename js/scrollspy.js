$(document).ready(function() {

  //smooth scrolls to different stages on page
  $('a[href*="#stage"]').click(function() { /* class or id of button/link that will be clicked */
    var number = this.href.replace(/\D+/g, '');
      $('html, body').animate({
          scrollTop: $("#stage" + number).offset().top, /* class or id of div that will be scrolled to */
          behavior: 'smooth',
      }, 1000);
  });


  //scroll spy functionality
  var vars = {};
  var stagesNumber = $('[id*="stage"]').find().prevObject.length;
  console.log(stagesNumber);
  for (var i = 1; i <= stagesNumber; i++) {
    vars['stageTop' + i] = $('#stage' + i).offset().top;
  }
  console.log(vars);
  $(window).scroll(function() {
    var windowTop = $(window).scrollTop() + 350;
    for (var j = 1; j <= stagesNumber; j++) {
      console.log('windowTop: '+windowTop+ ' stage7: ' +vars.stageTop7);
      if (windowTop >= (vars['stageTop'+j]) && windowTop < (vars['stageTop'+(j+1)])) {
        $('a[href*="#stage"]').parent().removeClass('active');
        $('a[href*="#stage'+j+'"]').parent().addClass('active');
      } else if (windowTop >= (vars['stageTop'+stagesNumber])){
        $('a[href*="#stage"]').parent().removeClass('active');
        $('a[href*="#stage'+stagesNumber+'"]').parent().addClass('active');
      }
    };
  });
});
