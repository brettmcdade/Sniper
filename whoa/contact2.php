<?php

	/* 
	  Define Variables */

	// Recipient - Change this to your email address
	$mailto = "brettmcdade@gmail.com";

	// Message Subject
	$subject = "Form Submission";

	// Success message
	$success = "<h3>Thanks!</h3><p>You'll be hearing from us soon.</p>";

	// Error message 
	$error = "<h3>Oops!</h3><p>Something went wrong and we're having trouble processing your submission. Please refresh the page and try again.</p>";

	/*
	  End Define Variables */


	// Retrieve Data
  $name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

  
  // All email messages are innocent until proven guilty 
  $good_email=true;


  // Validate Name, Email, and Message fields. Make sure they are not empty.
	if( empty($name) || empty($email) || empty($message) ) {
		$good_email=false;
	}


	// Validate Email Address
	if(!preg_match('/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/', $email)) { 
		$good_email=false;		
	}


	// Send email if everything is cool.
	if ($good_email==true) {
		$ok=mail($mailto, $subject, "Yo! Someone contacted you via your webform. Check the deets below:\n\n Name: $name\n Email: $email\n Message: $message","From: $name");
		if ($ok)
			{
				echo "<div id='success'>";
        echo $success;
        echo "</div>";
			}
			else
			{			
        echo "<div id='server-error'>";
	      echo $error;
	      echo "</div>";
			}
	}

	// Display error if something hit the fan.
	if ($good_email==false) {
		echo "<div id='server-error'>";
    echo $error;
    echo "</div>";
	}

	exit;
