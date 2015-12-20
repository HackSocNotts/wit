// Function to loop around and display different words every x seconds
var w = 0;
window.setInterval(function() {

  var words = ["Students", "Women", "Men"];

  $('.moving_text').fadeOut("slow", function () {
    $('.moving_text').text(words[w++]);
  });
  $('.moving_text').fadeIn("slow");

  if (w >= words.length) {
    w = 0;
  }
}, 3000);


/**
 * GA Script. For 2016.inspirewit.com
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-71607271-1', 'auto');
ga('send', 'pageview');


/**
 * Smooth scroll to anchor, e.g. register
 * https://css-tricks.com/snippets/jquery/smooth-scrolling/
 */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/*
 * Carousel js below
 */


//fn that sets the location of the carousel nav elements
var owlNav = function(o){
  var offset = o === undefined ? 0 : offset;
  $('.carousel-nav').css('margin-top', 10-offset);
  $('.owl-dots').css('margin-top', -$('.owl-stage-outer').height()-7-offset);
};

//responsive js
var fit = function(){
  //lock right arrow in place
  $('.carousel-right').css('margin-left', $(window).width()-73);

  //scroll pinning that stays in the 'stage'
  var scrollOffset = $('header').height()-$(window)[0].scrollY-50;
  var stage = $('.owl-stage-outer').height();
  if(-stage<scrollOffset && scrollOffset<0){
    owlNav(scrollOffset);
  } else if (-stage>=scrollOffset){
    owlNav(-stage);
  } else {
    owlNav(0);
  }
  $('nav').css('margin-top', (scrollOffset<120 ? 0 : -50));
};


// Would be good if when you click on the card either side that you can see
// it goes to the next one, so we can remove the arrows :)
var owl = {};
$(document).ready(function(){
  fit();
  //init carousel
  owl = $(".owl-carousel");
  owl.owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 50,
    dots: true,
    autoplaySpeed: false,
    autoplay: false,
    animateOut: 'fadeOut', // Note, want a fade out, fade in, in autoplay
    onInitialized: fit,
    onResized: fit,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,2],
    paginationSpeed : 2400
  });


  // $('a').smoothScroll({offset: -50, speed:'auto', autoCoefficient:3});
});

$(window).on('resize scroll', function(){
  fit();
});


//carousel control
var next = function(){
  owl.trigger('next.owl.carousel');
};

var prev = function(){
  owl.trigger('prev.owl.carousel');
};

//onclick and arrow keypress
$('.carousel-left').click(function(){
  prev();
});

$('.carousel-right').click(function(){
  next();
});

$(window).on('keydown', function(e){
  if(e.which === 37){
    prev();
  } else if(e.which === 39){
    next();
  }
});
