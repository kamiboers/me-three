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
    pageToAbout();
  })

  $('#link-1').click(function() {
    pageToAbout();
  })
  $('#link-2').click(function() {
    $('.parallax').animate({scrollTop:$("#waypoint-2").position().top-70}, 1000);
  })
  $('#link-3').click(function() {
    $('.parallax').animate({scrollTop:$("#waypoint-3").position().top-70}, 1000);
  })
  $('#link-4').click(function() {
    $('.parallax').animate({scrollTop:$("#waypoint-4").position().top-70}, 1000);
  })


});

function pageToAbout() {
    $('.parallax').animate({scrollTop:$("#waypoint-1").position().top-70}, 1000);
    // $('.parallax').animate({scrollTop:$("#waypoint-1").offset().top}, 1000);
}