<?php include('_includes/header.php'); ?>

<!-- Banner 2 -->
<div class="banner" style="background-image:url('images/fpo_banner.png');">
	<!-- Remove this line and uncomment line below for a dark overlay over image -->
	<!-- <div class="banner__overlay"></div> -->
	<div class="banner__content">
	  <div class="banner__title banner__title--large">Contact</div>
	</div>
</div>
<!-- / Banner 2 -->


<section class="l-section">
    <div class="l-inner">
        <div class="b-section u-center">
            <div class="b-title">Send A Message</div>
            <p>For booking and press inquiries, please contact Brett McDade at <a href="tel:1234567890">(123)-456-7890</a> <br>or fill out the form below.</p>
        </div>
        <form action="contact2.php" name="" id="form--contact" method="post">
            <fieldset>
                <ul class="form-fields form-contain">
                    <li class="form-field-group">
                        <input id="userName" class="input-field" name="userName" type="text" placeholder="Name" />
                        <input id="userEmail" class="input-field" name="userEmail" type="text" placeholder="Email Address" />
                    </li>
                    <li>
                        <textarea id="userMessage" class="input-field" name="userMessage" type="text" placeholder="Message"></textarea>
                    </li>
                    <li>
                        <div class="b-cta">
                            <button type="submit" id="" name="" class="js-form-submit button button--inverse-black">Send</button>
                        </div>
                    </li>
                </ul>
            </fieldset>
            <div id="form-message" class="b-text--form u-center"></div>
        </form>
    </div>
</section>


<?php include('_includes/footer.php'); ?>





