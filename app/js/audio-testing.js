$(document).ready(function() {

	var playItem = 0;

	var singlePlaying = false;
	var albumPlaying = false;

	var playListSize = $('.js-play-album').length;


	// Playlist

	var cssSelector = {
	  jPlayer: "#jquery_jplayer_Playlist", 
	  cssSelectorAncestor: "#jp_container_Playlist"
	};

	var playlist = [];  // Empty playlist

	var options = {
	  swfPath: "../js/plugins/jPlayer", 
	  supplied: "oga, mp3",
	  autoPlay: false,
	  wmode: "window"
	};

	var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);



  $(document).on("click", ".js-play-album", function(e) {
    e.preventDefault();

    stopPlayVisuals();


		var self = $(this);
		var holder = self.parent(".js-action");
		var indicator = self.children(".js-state-of-track");
		var index = $(".js-play-album").index(this);

		if (!albumPlaying) {
			$("#jquery_jplayer_Playlist").jPlayer("pauseOthers");
			var output = 'myPlaylist.setPlaylist([';

			var cells = $('.js-play-album');
			for (var i = 0; i < cells.length; i++) { 
			    var songTitle = cells[i].getAttribute("data-title");
			    var songUrlMp3 = cells[i].getAttribute("data-url");
			    output += '{ title:"' + songTitle + '", mp3:"' + songUrlMp3 + '" },';
			}

			output += ']);';

			eval(output);

			myPlaylist.play(index); // Play selected track automatically

		} 
		else {
			// if we select another track while a track is playing, play selected track. If we select track that is already playing then lets stop it
			if(index != myPlaylist.current) {
			  myPlaylist.play(index); 
			}
			else {
				myPlaylist.pause();
			  stopPlayVisuals();
			  albumPlaying = false;
			}
		}

		$("#jquery_jplayer_Playlist").bind($.jPlayer.event.waiting, function() {
			$("#jquery_jplayer_Playlist").unbind($.jPlayer.event.waiting);
			holder.addClass("js-is-active");
    	holder.addClass("js-action-is-waiting");
    	indicator.html('<div class="bar-c"><div id="bar-1" class="bar"></div><div id="bar-2" class="bar"></div><div id="bar-3" class="bar"></div></div>');
	  });

	  $("#jquery_jplayer_Playlist").bind($.jPlayer.event.playing, function() {
	  	$("#jquery_jplayer_Playlist").unbind($.jPlayer.event.playing);
			holder.removeClass("js-action-is-waiting");
	    holder.addClass('js-action-is-playing');
	    albumPlaying = true;
	  });

	  $("#jquery_jplayer_Playlist").bind($.jPlayer.event.ended, function() {
	  	//$("#jquery_jplayer_Playlist").unbind($.jPlayer.event.ended);
	  	stopPlayVisuals();
	  	albumPlaying = false;
		  var current = myPlaylist.current;
		  index = index+1;
		  if(current < playListSize) {
		  	updatePlaylistItem(current); // When playlist moves to next song update active playlist item
		  }
		});

		

	});


	function stopPlayVisuals() {
		$(".js-action").removeClass("js-is-active");
		$(".js-action").removeClass("js-action-is-playing");
		$(".js-action").removeClass("js-action-is-waiting");
		$(".js-action").removeClass("js-current");
		$(".js-state-of-track").html('');
	}

	function updatePlaylistItem(indexItem) {
		//var next = $(".js-is-active").next();
		var x = indexItem;
		
    $("#jquery_jplayer_Playlist").bind($.jPlayer.event.waiting, function() {
    	$("#jquery_jplayer_Playlist").unbind($.jPlayer.event.waiting);
    	$(".js-play-album").eq(x).parent().addClass("js-is-active");
      $(".js-play-album").eq(x).parent().addClass("js-action-is-waiting");
      $(".js-play-album").eq(x).find(".js-state-of-track").html('<div class="bar-c"><div id="bar-1" class="bar"></div><div id="bar-2" class="bar"></div><div id="bar-3" class="bar"></div></div>');
    });

    $("#jquery_jplayer_Playlist").bind($.jPlayer.event.playing, function() {
	  	$("#jquery_jplayer_Playlist").unbind($.jPlayer.event.playing);
			$(".js-play-album").eq(x).parent().removeClass("js-action-is-waiting");
	    $(".js-play-album").eq(x).parent().addClass('js-action-is-playing');
	    albumPlaying = true;
	  });
	}


  // SinglePlayer	

  
  var singlePlayer = $('#jquery_jplayer_N');

  singlePlayer.jPlayer({
		swfPath: "../js/plugins/jPlayer", 
    supplied: "oga, mp3",
    autoPlay: false,
    wmode: "window"
	});


	$(document).on("click", ".js-play", function(e) {
    e.preventDefault();

    // function to stop other players
    stopPlayVisuals();
    singlePlayer.jPlayer("pauseOthers");
    //$("#jquery_jplayer_Playlist").jPlayer("pause");

    var self = $(this);
    var songTitle = self.data('title');
    var songUrlMp3 = self.data('url');
    var holder = self.parent(".js-action");
		var indicator = self.children(".js-state-of-track");

    
    
    $('.js-action').removeClass('js-current');
    holder.addClass('js-current');

    if(singlePlaying) {
    	singlePlayer.jPlayer("pause");
    	$('.js-action .js-pause').removeClass('js-pause').addClass('js-play');
    } else {
    	singlePlayer.jPlayer("pauseOthers");
    }


	  singlePlayer.jPlayer( "setMedia", {
      title: songTitle,
	    mp3: songUrlMp3
    }).jPlayer("play");



    singlePlayer.bind($.jPlayer.event.waiting, function() {
			singlePlayer.unbind($.jPlayer.event.waiting);
			holder.addClass("js-is-active");
    	holder.addClass("js-action-is-waiting");
    	indicator.html('<div class="bar-c"><div id="bar-1" class="bar"></div><div id="bar-2" class="bar"></div><div id="bar-3" class="bar"></div></div>');
	  });

	  singlePlayer.bind($.jPlayer.event.playing, function() {
	  	singlePlayer.unbind($.jPlayer.event.playing);
			holder.removeClass("js-action-is-waiting");
	    holder.addClass('js-action-is-playing');
	      self.removeClass('js-play').addClass('js-pause');
	    singlePlaying = true;
	    albumPlaying = false;
	  });

	  singlePlayer.bind($.jPlayer.event.ended, function() {
	  	//$("#jquery_jplayer_Playlist").unbind($.jPlayer.event.ended);
	  	stopPlayVisuals();
	  	singlePlaying = false;
		});

  });

	
	$(document).on("click", ".js-pause", function(e) {
    var self = $(this);    
		
		singlePlayer.jPlayer("pause");
		
		  
		stopPlayVisuals();

		singlePlaying = false;
	    self.removeClass('js-pause').addClass('js-play');		
		return false;
	});



	$(document).on("click", ".js-play-video", function(e) {
		singlePlayer.jPlayer("pause");
    myPlaylist.pause();
    stopPlayVisuals();
    singlePlaying = false;
    albumPlaying = false;
  }); 




}); // end