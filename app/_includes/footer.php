    <div class="l-footer clearfix">
        <div class="l-inner">
            <nav class="navigation">
                <ul class="navigation__social">
                    <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fa fa-soundcloud"></i></a></li>
                </ul>
            </nav>
            <div class="copyright">&copy; 2015 ARTIST NAME. ALL RIGHTS RESERVED</div>
        </div>
    </div>

    <!-- =====================================================================
    JS
    ========================================================================== -->

    <!--[if gt IE 9]><!-->
      <script src="js/vendor/modernizr-2.8.3.js"></script>
    <!--<![endif]-->

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

    <script src="build/js/production.min.js"></script> 

    <!-- Call YT iFrame Api -->
    <script>
        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;
        function onYouTubeIframeAPIReady() {
          player = new YT.Player('player', {
            width: '100%',
            height: '100%',
            videoId: 'EJd6OL0FNgk',
            playerVars: { 'vq': 'hd1080', 'autoplay': 0, 'controls': 1, 'rel': 0, 'fs': 1, 'modestbranding': 1, 'showinfo': 0, 'wmode': 'transparent' },
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        }
        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
          //event.target.playVideo();
          $('.desktop-video').css("visibility","hidden");
          $('.block-hero--video').addClass('is-ready');
          $('.js-play-video').click(function() {
              event.target.playVideo();
            $('.media--video').addClass('is-showing');
          });
        }
        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event) {
          if (event.data == YT.PlayerState.ENDED) {
            $('.block-hero--video').removeClass('video-is-active');
          }
        }
    </script>
    <!-- // YT iFrame Api -->

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='https://www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create','UA-XXXXX-X','auto');ga('send','pageview');
    </script>

  </body>
</html>