$( document ).ready(function() {

  lightboxInit();


/* -----------------------------------------
   Get Layout
   ----------------------------------------- */

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




/* -----------------------------------------
   Off Canvas Menu
   ----------------------------------------- */
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


/* -----------------------------------------
   Tabs
   ----------------------------------------- */
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




/* -----------------------------------------
   Form: Contact
   ----------------------------------------- */

$("#form--contact").submit(function(){
    var hasErrors = false;

    // Validate Name
    var name = $("#userName");

    if (name.val() == '' || name.val()==='undefined') {
      name.addClass('has-error');
      hasErrors = true;                            
    }

    // Validate the e-mail
    var email = $("#userEmail");

    if(email.val() == "" || email.val()==='undefined') {
      email.addClass('has-error');
      hasErrors = true;
    } 
    else if ( (email.val() != "") && (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val()))) {
      email.val('');
      email.addClass('has-error');
      hasErrors = true;
    } 
    else {
      email.removeClass('has-error');
    }


    //if any inputs on the page have the class 'needsfilled' the form will not submit
    if (hasErrors) {
      return false;
    } else {
      var action = $(this).attr('action');

      $("#form-message").slideUp(750,function() {
        $('#form-message').hide();
        $('.js-form-submit')
          //.after('<img src="/images/loader.GIF" class="loader" />')
          .html('Sending <span class="dots"><span>.</span><span>.</span><span>.</span></span>')
          .attr('disabled','disabled');
          //.css({'display':'none'});
        $.post(action, {
          name: $('#userName').val(),
          email: $('#userEmail').val(),
          message: $('#userMessage').val()
        },

        function(data){
          if(data.match('success') != null) {
            $('.js-form-submit').fadeOut('slow', function() {
                $('.js-form-submit').removeAttr('disabled');
                document.getElementById('form-message').innerHTML = data;               
                $('#form-message').show();
                
            });
          }
          else if (data.match('server-error') != null) {
            $('.js-form-submit').fadeOut('slow', function() {
                $('.js-form-submit').removeAttr('disabled');
                document.getElementById('form-message').innerHTML = data;               
                $('#form-message').show();
            });
          }
        }

      );
      // end slideUp Form

      });

      return false;
    }
  }); // end Submit Function


/* -----------------------------------------
   Form: Newsletter
   ----------------------------------------- */

$("#form--newsletter").submit(function(){
    var hasErrors = false;

    // Validate the e-mail
    var email = $("#userEmail");

    if(email.val() == "" || email.val()==='undefined') {
      email.addClass('has-error');
      hasErrors = true;
    } 
    else if ( (email.val() != "") && (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val()))) {
      email.val('');
      email.addClass('has-error');
      hasErrors = true;
    } 
    else {
      email.removeClass('has-error');
    }

    //if any inputs on the page have the class 'needsfilled' the form will not submit
    if (hasErrors) {
      return false;
    } else {
      var action = $(this).attr('action');

      $("#form-message").slideUp(750,function() {
        $('#form-message').hide();
        $('.js-form-submit')
          //.after('<img src="/images/loader.GIF" class="loader" />')
          .html('Sending <span class="dots"><span>.</span><span>.</span><span>.</span></span>')
          .attr('disabled','disabled');
          //.css({'display':'none'});
        $.post(action, {
          email: $('#userEmail').val()
        },

        function(data){
          if(data.match('success') != null) {
            $('#form--newsletter').fadeOut('slow', function() {
                document.getElementById('form-message').innerHTML = data;               
                $('#form-message').show();
                $('.js-form-submit').fadeOut('slow',function(){$(this).remove()});
                $('.js-form-submit').removeAttr('disabled');
            });
          }
          else if (data.match('server-error') != null) {
            $('#form--newsletter').fadeOut('slow', function() {
                document.getElementById('form-message').innerHTML = data;               
                $('#form-message').show();
                $('.js-form-submit').fadeOut('slow',function(){$(this).remove()});
                $('.js-form-submit').removeAttr('disabled');
            });
          }
        }

      );
      // end slideUp Form

      });

      return false;
    }
  }); // end Submit Function


/* -----------------------------------------
   Form: Global
   ----------------------------------------- */

  // Clears any fields in the form when the user clicks on them
  $(":input").click(function(){   
    $(this).removeClass('has-error')
           .removeClass('has-success'); 
  });

  // Clear error message if a user clicks it
  $(".form__error-message").click(function(){ 
    $(this).removeClass('has-error')
           .removeClass('has-success'); 
    $(this).html('');  
    $(this).prev(':input').focus();                            
  });

  // Clear error message if a user tabs
  $(":input").focus(function(){ 
    $(this).removeClass('has-error')
           .removeClass('has-success'); 
  });




/* -----------------------------------------
   jPlayer
   ----------------------------------------- */

var isPlaying = false,
    individualTrackIsPlaying = false,
    playlistIsPlaying = false;

  var cssSelector = {
    jPlayer: "#jquery_jplayer_N", 
    cssSelectorAncestor: "#jp_container_N"
  };

  var playlist = [];  // Empty playlist

  var options = {
    swfPath: "../js/plugins/jPlayer", 
    supplied: "oga, mp3",
    autoPlay: false,
    wmode: "window"
  };

var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);




function trackEnded() {
  $('.js-action').removeClass('js-track-is-active').addClass('js-play-single');
  $('.media__playlist li').removeClass('js-track-is-active').addClass('js-play-album');
  $('.js-state-of-track').removeClass('js-track-is-loading js-track-is-playing');
  $('.js-state-of-track').html('');
  isPlaying = false;
}


function addToPlaylist(self) {
  var txt = self.data('title');
  var mp3 = self.data('streamurl');

  myPlaylist.add({
      title:txt,
      mp3:mp3 + ".mp3"
  });

  myPlaylist.play(-1); // Begin play automatically
}

function playing(self) {
  $("#jquery_jplayer_N").bind($.jPlayer.event.playing, function() {
    self.removeClass("js-action-is-loading-single");
    self.children('.js-state-of-track').removeClass('js-track-is-loading');
    self.children('.js-state-of-track').addClass('js-track-is-playing');
    self.addClass('js-track-is-active');
    isPlaying = true;

    console.log("track is playing");
  });
}


$("#jquery_jplayer_N").bind($.jPlayer.event.ended, function() {
  $('.js-action').removeClass('js-track-is-active').addClass('js-play-single');
  $('.media__playlist li').removeClass('js-track-is-active').addClass('js-play-album');
  $('.js-state-of-track').removeClass('js-track-is-loading js-track-is-playing');
  $('.js-state-of-track').html('');
  isPlaying = false;
});


function loadTrack(self) {
  $("#jquery_jplayer_N").bind($.jPlayer.event.waiting, function() {
    self.removeClass('js-track-is-inactve');
    self.addClass("js-action-is-loading-single");
    self.children('.js-state-of-track').addClass('js-track-is-loading');
    self.children('.js-state-of-track').html('<div class="bar-c"><div id="bar-1" class="bar"></div><div id="bar-2" class="bar"></div><div id="bar-3" class="bar"></div></div>');
  });

  playing(self);
}



$(document).on("click", ".js-play-single", function(e) {
  e.preventDefault();
  self = $(this);

  individualTrackIsPlaying = true;
  playlistIsPlaying = false;

  // Remove playing state css from previous track
  $('.js-action').removeClass('js-track-is-active').addClass('js-play-single');
  $('.media__playlist li').removeClass('js-track-is-active').addClass('js-play-album');
  $('.js-state-of-track').removeClass('js-track-is-loading js-track-is-playing');
  $('.js-state-of-track').html('');
  isPlaying = false;


  self.removeClass('js-play-single');



  var txt = self.data('title');
  var mp3 = self.data('streamurl');

  myPlaylist.add({
      title:txt,
      mp3:mp3 + ".mp3"
  });

  myPlaylist.play(-1); // Begin play automatically




  $("#jquery_jplayer_N").bind($.jPlayer.event.waiting, function() {
    self.removeClass('js-track-is-inactve');
    self.addClass("js-action-is-loading-single");
    self.children('.js-state-of-track').addClass('js-track-is-loading');
    self.children('.js-state-of-track').html('<div class="bar-c"><div id="bar-1" class="bar"></div><div id="bar-2" class="bar"></div><div id="bar-3" class="bar"></div></div>');
  });

  $("#jquery_jplayer_N").bind($.jPlayer.event.playing, function() {
    self.removeClass("js-action-is-loading-single");
    self.children('.js-state-of-track').removeClass('js-track-is-loading');
    self.children('.js-state-of-track').addClass('js-track-is-playing');
    self.addClass('js-track-is-active');
    isPlaying = true;
  });

});




// Play Track
$(document).on("click", ".js-play-album", function(e) {
    e.preventDefault();
    self = $(this);

    individualTrackIsPlaying = false;
    playlistIsPlaying = true;

    // Remove playing state css from previous track
    $('.js-action').removeClass('js-track-is-active').addClass('js-play-single');
    $('.media__playlist li').removeClass('js-track-is-active').addClass('js-play-album');
    $('.js-state-of-track').removeClass('js-track-is-loading js-track-is-playing');
    $('.js-state-of-track').html('');
    isPlaying = false;


    self.removeClass('js-play-album');


    // Add to Playlist
    var txt = self.data('title');
    var mp3 = self.data('streamurl');

    myPlaylist.add({
        title:txt,
        mp3:mp3 + ".mp3"
    });

    myPlaylist.play(-1); // Begin play automatically


    $("#jquery_jplayer_N").bind($.jPlayer.event.waiting, function() {
      //console.log("waiting");
      self.removeClass('js-track-is-inactve');
      self.addClass("js-playlist-item-is-loading");
      self.children('.js-state-of-track').addClass('js-track-is-loading');
      self.children('.js-state-of-track').html('<div class="bar-c"><div id="bar-1" class="bar"></div><div id="bar-2" class="bar"></div><div id="bar-3" class="bar"></div></div>');
    });

    $("#jquery_jplayer_N").bind($.jPlayer.event.playing, function() {
      //console.log("playing");
      self.removeClass("js-playlist-item-is-loading");
      self.children('.js-state-of-track').removeClass('js-track-is-loading');
      self.children('.js-state-of-track').addClass('js-track-is-playing');
      self.addClass('js-track-is-active');
      isPlaying = true;
    });


});



// If we click on a track that is currently playing then lets pause it
$(document).on("click", ".js-track-is-active", function(e) {
  e.preventDefault();
  myPlaylist.pause();
  trackEnded();
});




/* -----------------------------------------
   Responsive Video Lightbox
   ----------------------------------------- */
function lightboxInit() {
  $('.js-play-video').click(function(){
    myPlaylist.pause();
    trackEnded();
    var $thisHref = $(this).attr('data-id');
    var source = $(this).attr('data-source');
    buildLightBox($thisHref, source);
  }); 
}

function buildLightBox(id, source) {
  if (source == 'youtube') {
    $('<div class="media--video__content">').appendTo('body').html('<div class="layer"><iframe id="video" width="100%" height="100%" src="http://www.youtube.com/embed/' + id + '?enablejsapi=1&vq=hd1080&controls=1&rel=0&fs=1&modestbranding=1&showinfo=0&wmode=transparent&autoplay=1" frameborder="0"></iframe></div><div class="close js-close"></div>');
  } 
  if (source == 'vimeo') {
    $('<div class="media--video__content">').appendTo('body').html('<div class="layer"><iframe width="100%" height="100%" src="//player.vimeo.com/video/' + id + '?api=1&amp;autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen id="video"></iframe>
</div><div class="close js-close"></div>');
  } 
  
  // Create close button
  $('.js-close').on('click',function(e) {
    $('.media--video__content').remove();
  });
}


}); //end