<?php include('_includes/header.php'); ?>


<!-- Masthead 1 -->
<div class="banner banner--large" style="background-image:url('http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2015/1/20/1421753522830/aa5dbac7-3b7e-4f99-84be-97477474eaa1-2060x1236.jpeg');">
	<!-- Uncomment line below for a dark overlay over image -->
	<!-- <div class="banner__overlay"></div> -->
	<div class="l-inner banner__content">
	  <div class="banner__title banner__title--large">Artist Name</div>
	</div>
</div>
<!-- / Masthead 1 -->


<!-- singles and albums tabs -->
<section class="l-section slab-grey">
	<div class="l-inner">
		<!-- tabs -->
		<ul class="tabs">
			<li class="tab__link is-selected" data-tab="tab-1">Singles</li>
			<li class="tab__link" data-tab="tab-2">Albums</li>
		</ul>
		<!-- tab-1 -->
		<div id="tab-1" class="tabs__content is-open">
			<div class="media media--single">
				<div class="grid grid--1to3 grid--first-row">
					<div class="grid__column block-thumb">
						<img class="media__artwork u-border" src="images/fpo_single-thumb.png" />
						<div class="b-text">
							<div class="js-action js-play-single" data-title="Song Title" data-streamurl="http://brettmcdade.com/audio/01">
								<div class="js-state-of-track"></div>
								<i class="button--media fa fa-play-circle"></i>
								<div class="media__title">Song Name</div>
								<div class="media__time">2:20</div>
							</div>
						</div>
					</div>
					<div class="grid__column block-thumb">
						<img class="media__artwork u-border" src="images/fpo_single-thumb.png" />
						<div class="b-text">
							<div class="js-action js-play-single" data-title="Song Title" data-streamurl="http://brettmcdade.com/audio/01">
								<div class="js-state-of-track"></div>
								<i class="button--media fa fa-play-circle"></i>
								<div class="media__title">Song Name</div>
								<div class="media__time">2:20</div>
							</div>
						</div>
					</div>
					<div class="grid__column block-thumb">
						<img class="media__artwork u-border" src="images/fpo_single-thumb.png" />
						<div class="b-text">
							<div class="js-action js-play-single" data-title="Song Title" data-streamurl="http://brettmcdade.com/audio/01">
								<div class="js-state-of-track"></div>
								<i class="button--media fa fa-play-circle"></i>
								<div class="media__title">Song Name</div>
								<div class="media__time">2:20</div>
							</div>
						</div>
					</div>
		    </div>
	  		<div class="b-cta">
	  			<a class="button button--inverse-black" href="#">See All</a>
	  		</div>
	  	</div>
	  </div>
	  <!-- tab-2 -->
	  <div id="tab-2" class="tabs__content">
	  	<div class="media media--album">
	  		<!-- media album block -->
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
	  				<div class="media__album-block">
	  					<div class="media__header">
	  						<div class="b-title">Album Name</div>
	  						<div class="b-meta">2015</div>
	  					</div>
	  					<div class="media__playlist">
	  						<ul>
	  							<?php
	  							for($i=1; $i<10; $i++) {
	  								?>
	  								<li class="js-play-album" data-title="Song Title" data-streamurl="http://brettmcdade.com/audio/01">
	  									<div class="js-state-of-track"></div>
	  									<div class="playlist-number">0<?php echo $i;?></div>
	  									<div class="playlist-title">A Real Long Song Name</div>
	  									<div class="playlist-time">2:20</div>
	  								</li>
	  								<?php  	
	  							}
	  							?>
	  						</ul>
	  					</div>
	  				</div>
	  			</div>
	  		</div>
	  		<!-- media album block-->
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
	  				<div class="media__album-block">
	  					<div class="media__header">
	  						<div class="b-title">Album Name</div>
	  						<div class="b-meta">2015</div>
	  					</div>
	  					<div class="media__playlist">
	  						<ul>
	  							<?php
	  							for($i=1; $i<10; $i++) {
	  								?>
	  								<li class="js-play-album" data-title="Song Title" data-streamurl="http://brettmcdade.com/audio/01">
	  									<div class="js-state-of-track"></div>
	  									<div class="playlist-number">0<?php echo $i;?></div>
	  									<div class="playlist-title">A Real Long Song Name</div>
	  									<div class="playlist-time">2:20</div>
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
	</div>
	</section>

	<!-- social media mash -->
	<section class="social-mash">
	<div class="social-mash__row clearfix">
		<div class="social-mash__tile social-mash__tile--twitter">
			<div class="social-mash__content">
				<i class="fa fa-twitter"></i>
				<div class="twitter-name"><a href="#">Twitter Name</a></div>
				<div class="twitter-message">This is what a tweet would look like. #hashtaggoeshere soundcloud.com/linkname</div>
				<div class="twitter-timestamp">13 Hours Ago</div>
			</div>
		</div>
		<div class="social-mash__tile social-mash__tile--instagram">
			<div class="social-mash__content" style="background-image:url('images/fpo_instagram.png');">
				<div class="hover-overlay"></div>
				<i class="fa fa-instagram"></i>
			</div>
		</div>
		<div class="social-mash__tile social-mash__tile--yt">
			<div class="social-mash__content" style="background-image:url('images/fpo_instagram.png');">
				<div class="hover-overlay"></div>
				<i class="fa fa-play-circle js-play-video" data-source="vimeo" data-id="113208130"></i>
			</div>
		</div>
	</div>
	<div class="social-mash__row clearfix">
		<div class="social-mash__tile social-mash__tile--instagram">
			<div class="social-mash__content" style="background-image:url('images/fpo_instagram.png');">
				<div class="hover-overlay"></div>
				<i class="fa fa-instagram"></i>
			</div>
		</div>
		<div class="social-mash__tile social-mash__tile--yt">
			<div class="social-mash__content" style="background-image:url('images/fpo_youtube.png');">
				<div class="hover-overlay"></div>
				<i class="fa fa-play-circle js-play-video" data-source="youtube" data-id="jYdaQJzcAcw"></i>
			</div>
		</div>
		<div class="social-mash__tile social-mash__tile--twitter">
			<div class="social-mash__content">
				<i class="fa fa-twitter"></i>
				<div class="twitter-name"><a href="#">Twitter Name</a></div>
				<div class="twitter-message">This is what a tweet would look like. #hashtaggoeshere soundcloud.com/linkname</div>
				<div class="twitter-timestamp">13 Hours Ago</div>
			</div>
		</div>
	</div>
	</section>

	<!-- tours -->
	<section class="tours l-section slab-grey">
	<div class="l-inner l-inner--bleed-small">
		<div class="b-section">
			<div class="b-title b-title--border">Tour Dates</div>
		</div>
		<div class="tours__row">
			<div class="tour__month">Aug 21</div>
			<div class="tour__day">Tues</div>
			<div class="tour__venue">Bunkhouse Saloon</div>
			<div class="tour__location">Las Vegas, NV</div>
			<div class="tour__cta">
				<a href="#" class="button">Tickets</a>
			</div>
		</div>
		<div class="tours__row">
			<div class="tour__month">Aug 21</div>
			<div class="tour__day">Tues</div>
			<div class="tour__venue">Bunkhouse Saloon</div>
			<div class="tour__location">Las Vegas, NV</div>
			<div class="tour__cta">
				<a href="#" class="button">Tickets</a>
			</div>
		</div>
		<div class="tours__row">
			<div class="tour__month">Aug 21</div>
			<div class="tour__day">Tues</div>
			<div class="tour__venue">Bunkhouse Saloon</div>
			<div class="tour__location">Las Vegas, NV</div>
			<div class="tour__cta">
				<a href="#" class="button">Tickets</a>
			</div>
		</div>
		<div class="b-cta">
			<a class="button button--inverse-black" href="#">See All</a>
		</div>
	</div>
	</section>

	<!-- news updates -->
	<section class="news-updates l-section slab-black-texture">
	<div class="l-inner">
		<div class="b-title b-title--light">Get [Artist Name] Updates</div>
		<form action="newsletter-signup.php" name="" id="form--newsletter" method="post">
			<fieldset>
				<ul class="form-fields form-fields--inline">
					<li>
						<input id="userEmail" class="input-field" name="userEmail" type="text" placeholder="Email Address" />
					</li>
					<li>
						<div class="u-center">
							<button type="submit" id="" name="" class="js-form-submit button button--theme">Subscribe</button>
						</div>
					</li>
				</ul>
			</fieldset>
		</form>
		<div id="form-message" class="b-text--form u-center"></div>
	</div>
	</section>

	<?php include('_includes/footer.php'); ?>





