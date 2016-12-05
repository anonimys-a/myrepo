<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
		<meta name="viewport" content="width=device-width, initial-scale=1"> 
		<link rel="stylesheet" type="text/css" href="Css/normalize.css" />
		<link rel="stylesheet" type="text/css" href="Css/component.css" />
	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
		<link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css">
		<link rel="stylesheet" type="text/css" href="Css/Site.css">
	    <link rel="stylesheet" type="text/css" href="Css/animate.css">
    
	    <!-- jQuery library -->
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	    <!-- Latest compiled JavaScript -->
	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    	<script src="js/modernizr.custom.js"></script>
	</head>
	<body>
		<div class="container-fluid">
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="navbar-inner">
                <div class="container">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand">
                            <span><img src="images/logo (1).png" /></span>
                        </a>
                        <div class="test">
                            <span><img src="images/shadowgrid.png" /></span>
                        </div>
                    </div>
                    <div class="collapse navbar-collapse" id="navbar-collapse-1">
                      <ul class="nav navbar-nav navbar-right">
                            <li><a href="Home.html">Home</a></li>
                            <li><a href="Tech Specs.html">Tech Specs</a>
                            <li><a href="About.html">About Us</a></li>
                            <li><a href="contact.php">Contact</a></li>
                      </ul>
          <ul class="collapse nav navbar-nav nav-collapse" id="nav-collapse1">
                            <li><a href="Home.html">Home</a></li>
                            <li><a href="Tech Specs.html">Tech Specs</a>
                            <li><a href="About.html">About Us</a></li>
                            <li><a href="contact.php">Contact</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
    </nav><!-- /.navbar -->
    
    <?php
	 if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	 	if (isset($_POST['useremail'])) {
	 		// at this point we know that `useremail` was passed as part of the request
	 		
	 		//Email information
	 		$recipient = "slagjana.karafiljkova@gmail.com";
			$subject = stripslashes($_POST['subject']);
			$from = stripslashes($_POST['username']);
			$email = stripslashes($_POST['useremail']);
			$msg = "Message from: $from\n\n".stripslashes($_POST['msgbody']);
			$headers = 'From: ' . $email . "\r\n" .
					'Reply-To: ' . $recipient . "\r\n" .
					'X-Mailer: PHP/' . phpversion();
			
			if(mail($recipient, $subject, $msg, $headers)) {
				echo '<h2 class="send-email-info-message">Thank you for contacting us.</h2>';
			}
	 	}
	 } else {
?>
    
			<div class="fs-form-wrap" id="fs-form-wrap">
				<form id="contact-form" class="fs-form fs-form-full" autocomplete="off" method="post" action="">
					<ol class="fs-fields">
						<li>
							<label class="fs-field-label fs-anim-upper" for="q1">What's your name?</label>
							<input class="fs-anim-lower" id="contact-sender-name" name="username" type="text" placeholder="">
						</li>
						<li>
							<label class="fs-field-label fs-anim-upper" for="q2" data-info="We won't send you spam, we promise...">What's your email address?</label>
							<input class="fs-anim-lower" id="contact-sender-email" name="useremail" type="email" placeholder="" required/>
						</li>
						<li data-input-trigger>
							<label class="fs-field-label fs-anim-upper" for="q3" data-info="This will help us know what kind of service you need">Subject</label>
							<input class="fs-anim-lower" id="contact-sender-subject" name="subject" type="text" placeholder="">
						</li>
						<li>
							<label class="fs-field-label fs-anim-upper" for="q4">Describe how we can be of service</label>
							<textarea class="fs-anim-lower" id="contact-sender-description" name=msgbody placeholder="" required/></textarea>
						</li>
					</ol><!-- /fs-fields -->
					<button class="fs-submit" type="submit">Send answers</button>
				</form><!-- /fs-form -->
			</div><!-- /fs-form-wrap -->
			
<?php
  	}
?>
		
		<footer class="footer-distributed">
			
			<div class="footer-left">

				<h3><span class="slikaLogo"><img class src="Images/shadowgrid.png" /></span></h3>
                

				<p class="footer-links">
					<a href="Home.html">Home</a>
                    ·
                    <a href="Tech Specs.html">Tech Specs</a>
                    ·
                    <a href="About.html">About us</a>
                    ·
                    <a href="contact.php">Contact</a>
					
				</p>

				<p class="footer-company-name">Openbiz Technology &copy; 2016</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Lerinska 31B</span> Skopje, Macedonia</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p><span>+38977 941 641</span>+38977 935 476</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:contact@shadowgrid.io">contact@shadowgrid.io</a></p>
				</div>

			</div>


		</footer>
	

		</div><!-- /container -->
		<script src="js/classie.js"></script>
		<script src="js/selectFx.js"></script>
		<script src="js/fullscreenForm.js"></script>
		<script>
			(function() {
				var formWrap = document.getElementById( 'fs-form-wrap' );

				[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
					new SelectFx( el, {
						stickyPlaceholder: false,
						onChange: function(val){
							document.querySelector('span.cs-placeholder').style.backgroundColor = val;
						}
					});
				} );

				new FForm( formWrap, {
					onReview : function() {
						classie.add( document.body, 'overview' ); // for demo purposes only
					}
				} );
			})();
		</script>
	</body>
</html>