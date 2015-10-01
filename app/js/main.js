$( document ).ready(function() {

  lightboxInit();

  // swap svg to png for browsers that won't support it
  if (!Modernizr.svg) {
    $('img[src$=".svg"]').each(function()
    {
        $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
    });
  }



// Set up variables
var isMobile = false,
    isDesktop = false;

/* 
  Here we create a function to check if an element is visible on the page. If it is add desktop class
  and set up variables. If not add class mobile and add coresponding variables
*/
getLayout = function(htmlElement){
  if ($(htmlElement).css("display") == "none" ){
    $("body").removeClass("desktop-layout").addClass("mobile-layout");
    isMobile = true;
    isDesktop = false;   
  }
  else {
    $("body").removeClass("mobile-layout").addClass("desktop-layout");
    isMobile = false;
    isDesktop = true;
  }
}

// On window load set desktop/mobile class
$(window).load(function() {
  getLayout('.hamburger');
});


// On window resize set desktop/mobile class and resize background image
$(window).resize(function(){
  getLayout('.hamburger');
});




  /*
    Menu
        */
   var $page = $('.nav'),
     $offCanvasMenu = $('.off-canvas'),
     $hamburger = $('.hamburger'),
     $hamburgerTitle = $('.hamburger__title'),
     $switch = $('.js-mobile-nav-toggle');

   $switch.on('touchstart click', function(e) {
      e.preventDefault();
      $page.toggleClass("open");
      $offCanvasMenu.toggleClass("off-canvas-is-open");
      $hamburger.toggleClass("close");
      //$(this).toggleClass("open");

      if ($hamburger.hasClass("close")) {
        $hamburgerTitle.html('Close');
      } else {
        $hamburgerTitle.html('Menu');
      }

   });




  /* 
    Tabs 
        */
  // http://codepen.io/cssjockey/pen/jGzuK

  $('.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.tabs li').removeClass('is-selected');
    $('.tabs__content').removeClass('is-open');

    $(this).addClass('is-selected');
    $("#"+tab_id).addClass('is-open');
  });


  if(isDesktop){ // if large layout, execute
    var socialWidth = $('.social-mash__tile--instagram .social-mash__content').width();
    console.log(socialWidth);
    $(".social-mash__content").css( "height", socialWidth );
  }



function lightboxInit() {
  $('.js-play-video').click(function(){
      var $thisHref = $(this).attr('data-id');
      buildLightBox($thisHref);
  }); 
}

function buildLightBox(id) {
   $('<div class="media--video__content">').appendTo('body').html('<div class="layer"><iframe id="video" width="100%" height="100%" src="http://www.youtube.com/embed/' + id + '?enablejsapi=1&vq=hd1080&controls=1&rel=0&fs=1&modestbranding=1&showinfo=0&wmode=transparent&autoplay=1" frameborder="0"></iframe></div><div class="close js-close"></div>');
  
    $('.js-close').on('click',function(e) {
       $('.media--video').remove();
    });
}


}); //end