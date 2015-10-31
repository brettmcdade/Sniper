$(document).ready(function() {

	var playItem = 0;

	var singlePlaying = false;
	var albumPlaying = false;

	var playListSize = 0;


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

			var output = 'myPlaylist.setPlaylist([';

			var cells = $('.js-play-album');
			for (var i = 0; i < cells.length; i++) { 
			    var songTitle = cells[i].getAttribute("data-title");
			    var songUrlMp3 = cells[i].getAttribute("data-url");
			    output += '{ title:"' + songTitle + '", mp3:"' + songUrlMp3 + '" },';
			}

			output += ']);';

			//console.log(output)

			eval(output);

			myPlaylist.play(index); // Play selected track automatically

		} 
		else {
			// if jPlayer is playing just play selected track
			myPlaylist.play(index); 
			//stopPlayVisuals();
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
		  var current = myPlaylist.current;
		  index = index+1;
		  if(current < cells.length - 1) {
		  	updatePlaylistItem(index); // When playlist moves to next song update active playlist item
		  }
		});

		

	});


	function stopPlayVisuals() {
		$(".js-action").removeClass("js-is-active");
		$(".js-action").removeClass("js-action-is-playing");
		$(".js-action").removeClass("js-action-is-waiting");
		$(".js-state-of-track").html('');
		//albumPlaying = false;
	}

	function updatePlaylistItem(indexItem) {
		//var next = $(".js-is-active").next();
		var x = indexItem;
		stopPlayVisuals();
		
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

    var self = $(this);
    var songTitle = self.data('title');
    var songUrlMp3 = self.data('url');
    var holder = self.parents(".js-action");

    // function to stop other players
    $("#jquery_jplayer_Playlist").jPlayer("stop");

    $('.js-action').removeClass('js-current');
    holder.addClass('js-current');

    if(singlePlaying) {
    	singlePlayer.jPlayer("pause");
    } else {
    	$("#jquery_jplayer_Playlist").jPlayer("stop");
    }


	  singlePlayer.jPlayer( "setMedia", {
      title: songTitle,
	    mp3: songUrlMp3
    }).jPlayer("play");

    singlePlaying = true;
  });




}); // end