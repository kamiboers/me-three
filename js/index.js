$( document ).ready(function() {

  $(".parallax").scroll(function() {      
    if ($('.parallax').scrollTop() > 10) {        
      $('.navbar').removeClass('navbar-transparent').addClass('navbar-opaque').css('padding-top', '0px');
      // $('#navbar-icon-img').attr('src', './images/logo-sova-sm.png');
    } else {
      $('.parallax__layer--back').toggle().toggle();
      $('.navbar').addClass('navbar-transparent').removeClass('navbar-opaque').css('padding-top', '25px');
      // $('#navbar-icon-img').attr('src', './images/logo-full.png');
    }
  });

});