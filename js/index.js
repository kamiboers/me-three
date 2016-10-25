$( document ).ready(function() {

  $(".parallax").scroll(function() {      
    if ($('.parallax').scrollTop() > 10) {        
      $('.navbar').removeClass('navbar-transparent').addClass('navbar-opaque');
      $('.brand-image').css('width', '200px');
    } else {
      $('.parallax__layer--back').toggle().toggle();
      $('.navbar').addClass('navbar-transparent').removeClass('navbar-opaque');
      $('.brand-image').css('width', '260px');
    }
  });

  $('.hero').addClass('fadeIn');
  $('.brand-image').addClass('dropIn');
  $('.navbar-links > ul > li').addClass('dropIn');

  $('.page-down-button').hover(function() {
    $('.hero > h1').css('color', '#023364');
  }, function() {
    $('.hero > h1').css('color', '#02264b');
  })

  $('.page-down-button').click(function() {
    $('.parallax').animate({scrollTop:$(".content-opaque").offset().top}, 1000);
  })


});