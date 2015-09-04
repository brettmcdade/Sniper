<?php include('_includes/header.php'); ?>


<?php include('_components/Banners/banner1.php'); ?>
<?php // include('_components/Banners/banner2.php'); ?>
<?php // include('_components/Banners/banner3.php'); ?>

<section class="l-section slab-grey">
    <div class="l-inner">

				<ul class="tabs">
					<li class="tab__link is-selected" data-tab="tab-1">Singles</li>
					<li class="tab__link" data-tab="tab-2">Albums</li>
				</ul>

				<div id="tab-1" class="tabs__content is-open">
					  <div class="music-single">
				        <div class="grid grid--1to3 grid--first-row">
				        	  <div class="grid__column music-single-block">
					        	  	<img class="music-artwork u-border" src="http://baseshare.com/uploads/zips/8239dcb/mlmny.jpg" />
					        	  	<div class="track-info">
					        	  		  <i class="fa fa-play-circle"></i>
					    	  		  	  <div class="music-title">Song Name</div>
					    	  		  	  <div class="music-time">2:20</div>
					    	  		  </div>
				        	  </div>

				        	  <div class="grid__column music-single-block">
					        	  	<img class="music-artwork u-border" src="http://baseshare.com/uploads/zips/8239dcb/mlmny.jpg" />
					        	  	<div class="track-info">
					        	  		  <i class="fa fa-play-circle"></i>
					    	  		  	  <div class="music-title">Long Song Name Would Look Like This</div>
					    	  		  	  <div class="music-time">2:20</div>
					    	  		  </div>
				        	  </div>

				        	  <div class="grid__column music-single-block">
					        	  	<img class="music-artwork u-border" src="http://baseshare.com/uploads/zips/8239dcb/mlmny.jpg" />
					        	  	<div class="track-info">
					        	  		  <i class="fa fa-play-circle"></i>
					    	  		  	  <div class="music-title">Long Song Name Would Look Like This</div>
					    	  		  	  <div class="music-time">2:20</div>
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
		    				<div class="b-cta">
				            <a class="button button--more" href="#">See All</a>
				        </div>
				    </div>
				</div>
				<div id="tab-2" class="tabs__content">
				    <div class="music-album">
		            <div class="grid grid--1to2">
				        	  <div class="grid__column music-single-block">
					        	  	<img class="music-artwork u-border" src="http://baseshare.com/uploads/zips/8239dcb/mlmny.jpg" />
					        	  	<div class="album-info">
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

    </div>
</section>


<section>
    <div class="social-mash clearfix">
    	  <div class="social-mash-row clearfix">
		  	    <div class="social-mash__tile social-mash__tile--twitter">
		  	    	  <div class="social-mash__content">
		  	    	  	  <i class="fa fa-twitter"></i>
		  	    	  	  <div class="twitter-name"><a href="#">Twitter Name</a></div>
		  	    	  	  <div class="twitter-message">This is what a tweet would look like. #hashtaggoeshere soundcloud.com/linkname</div>
		  	    	  	  <div class="twitter-timestamp">13 Hours Ago</div>
		  	    	  </div>
		  	    </div>
		  	    <div class="social-mash__tile social-mash__tile--instagram">
		  	    	  <div class="social-mash__content" style="background-image:url('https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11417332_725761794212309_295119133_n.jpg');">
		  	    	      <i class="fa fa-instagram"></i>
		  	    	  </div>
		  	    </div>
		  	    <div class="social-mash__tile social-mash__tile--yt">
		  	    	  <div class="social-mash__content" style="background-image:url('http://i.ytimg.com/vi/ISmXcHapfO4/maxresdefault.jpg');">
		  	    	  	  <i class="fa fa-play-circle"></i>
		  	    	  </div>
		  	    </div>
		  	</div>
    	  <div class="social-mash-row clearfix">
		  	    <div class="social-mash__tile social-mash__tile--instagram">
		  	    	  <div class="social-mash__content" style="background-image:url('https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/11417332_725761794212309_295119133_n.jpg');">
                    <i class="fa fa-instagram"></i>
		  	    	  </div>
		  	    </div>
		  	    <div class="social-mash__tile social-mash__tile--yt">
		  	    	  <div class="social-mash__content" style="background-image:url('http://hipsocietynews.com/wp-content/uploads/2012/06/Screen-Shot-2012-06-04-at-12.47.03-PM.png');">
		  	    	  	  <i class="fa fa-play-circle"></i>
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
    </div>
</section>

<section class="tours l-section slab-grey">
    <div class="l-inner l-inner--bleed-small">
        <div class="b-section-title b-section-title--border">Tour Dates</div>
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
          <a class="button button--more" href="#">See All</a>
        </div>

    </div>
</section>


<section class="news-updates l-section slab-black-texture">
    <div class="l-inner">
    		<div class="b-title b-title--light">Get [Artist Name] Updates</div>
    		<form action="#" name="" id="" method="post">
		    		<fieldset>
								<ul class="form-fields form-fields--inline">
						      <li>
								      <input class="input-field" type="text" placeholder="Email Address" />
						      </li>
						      <li>
						      		<div class="u-center">
						      	      <button type="submit" id="" name="" class="button button--theme">Subscribe</button>
						      	  </div>
						      </li>
						    </ul>
						</fieldset>
				</form>
    </div>
</section>

<?php include('_includes/footer.php'); ?>





