<?php include('_includes/header.php'); ?>

<!-- Banner 2 -->
<div class="banner" style="background-image:url('images/fpo_banner.png');">
	<!-- <div class="banner__overlay"></div> -->
	<div class="banner__content">
	    <div class="banner__title banner__title--large">Music</div>
	</div>
</div>
<!-- / Banner 2 -->

<!-- music: singles -->
<section class="l-section slab-dark-black inverse">
    <div class="l-inner">
        <div class="b-section">
            <div class="b-title b-title--margin">Singles</div>
        </div>
        <div class="media media--single">
            <div class="grid grid--1to3 grid--first-row">
                  <div class="grid__column block-thumb">
                        <img class="media__artwork u-border" src="images/fpo_single-thumb.png" />
                        <div class="b-text">
                              <i class="fa fa-play-circle"></i>
                              <div class="media__title">Song Name</div>
                              <div class="media__time">2:20</div>
                          </div>
                  </div>

                  <div class="grid__column block-thumb">
                        <img class="media__artwork u-border" src="images/fpo_single-thumb.png" />
                        <div class="b-text">
                              <i class="fa fa-play-circle"></i>
                              <div class="media__title">Long Song Name Would Look Like This</div>
                              <div class="media__time">2:20</div>
                          </div>
                  </div>

                  <div class="grid__column block-thumb">
                        <img class="media__artwork u-border" src="images/fpo_single-thumb.png" />
                        <div class="b-text">
                              <i class="fa fa-play-circle"></i>
                              <div class="media__title">Long Song Name Would Look Like This</div>
                              <div class="media__time">2:20</div>
                          </div>
                        <!--
                        <div class="u-overlay">
                      <div class="hover-tile-inner">
                          <div class="hover-content">
                                <div class="social-link"><a href="#"><i class="fa fa-apple"></i>Itunes</a></div>
                                <div class="social-link"><a href="#"><i class="fa fa-amazon"></i>Amazon</a></div>
                                <div class="social-link"><a href="#"><i class="fa fa-spotify"></i>Spotify</a></div>
                            </div>
                      </div>
                  </div>
                  -->
                        </div>
                </div>
        </div>
    </div>
</section>

<!-- music: albums -->
<section class="l-section slab-grey">
    <div class="l-inner">
        <div class="b-section">
            <div class="b-title b-title--margin">Albums</div>
        </div>
        <div class="media media--album">
            <!-- album 1 -->
            <div class="media__block grid grid--1to2">
                      <div class="grid__column block-thumb">
                            <img class="media__artwork u-border" src="images/fpo_single-thumb.png" />
                            <div class="block-text">
                                  <div class="social-links--inline">
                                      <div class="social-link"><a href="#"><i class="fa fa-apple"></i>Itunes</a></div>
                                <div class="social-link"><a href="#"><i class="fa fa-amazon"></i>Amazon</a></div>
                                <div class="social-link"><a href="#"><i class="fa fa-spotify"></i>Spotify</a></div>
                            </div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                              </div>
                      </div>

                      <div class="grid__column">
                            <div class="album__item">
                                  <div class="album__header">
                                        <div class="album__title">Album Name</div>
                                        <div class="album__year">2015</div>
                                    </div>
                                    <div class="tracks">
                                            <ul>
                                                  <?php
                                                    for($i=1; $i<10; $i++) {
                                                  ?>
                                                        <li>
                                                              <div class="track-number">0<?php echo $i;?></div>
                                                              <div class="track-title">Song Name</div>
                                                              <div class="track-time">2:20</div>
                                                        </li>
                                                  <?php     
                                                    }
                                                  ?>
                                                
                                            </ul>
                                    </div>
                            </div>
                      </div>
            </div>
            <!-- album 2 -->
            <div class="media__block grid grid--1to2">
                      <div class="grid__column block-thumb">
                            <img class="media__artwork u-border" src="images/fpo_single-thumb.png" />
                            <div class="block-text">
                                  <div class="social-links--inline">
                                      <div class="social-link"><a href="#"><i class="fa fa-apple"></i>Itunes</a></div>
                                <div class="social-link"><a href="#"><i class="fa fa-amazon"></i>Amazon</a></div>
                                <div class="social-link"><a href="#"><i class="fa fa-spotify"></i>Spotify</a></div>
                            </div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                              </div>
                      </div>

                      <div class="grid__column">
                            <div class="album__item">
                                  <div class="album__header">
                                        <div class="album__title">Album Name</div>
                                        <div class="album__year">2015</div>
                                    </div>
                                    <div class="tracks">
                                            <ul>
                                                  <?php
                                                    for($i=1; $i<10; $i++) {
                                                  ?>
                                                        <li>
                                                              <div class="track-number">0<?php echo $i;?></div>
                                                              <div class="track-title">Song Name</div>
                                                              <div class="track-time">2:20</div>
                                                        </li>
                                                  <?php     
                                                    }
                                                  ?>
                                                
                                            </ul>
                                    </div>
                            </div>
                      </div>
            </div>
        </div>
    </div>
</section>

<?php include('_includes/footer.php'); ?>





