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