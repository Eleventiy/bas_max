<?php
require 'PHPMailer/PHPMailerAutoload.php';
// Variables
$name = trim($_POST['client-name']);
$email = trim($_POST['client-email']);
$service = trim($_POST['client-service']);
$content = trim($_POST['client-message']);
?>


<!doctype html>
<html lang="en">

	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		<title>BasMax</title>

		<!-- Disable tap highlight on IE -->
		<meta name="msapplication-tap-highlight" content="no">

		<!-- Web Application Manifest -->
		<link rel="manifest" href="#">

		<!-- Tile icon -->
		<link rel="shortcut icon" href="favicon.png" sizes="31x31" type="image/png">

		<!-- Add to homescreen for Chrome on Android -->
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="application-name" content="IMKT">
		<!--<link rel="icon" sizes="192x192" href="images/touch/chrome-touch-icon-192x192.png">-->

		<!-- Add to homescreen for Safari on iOS -->
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="#0093e5">
		<meta name="apple-mobile-web-app-title" content="IMKT">
		<!--<link rel="apple-touch-icon" href="images/touch/apple-touch-icon.png">-->

		<!-- Tile icon for Win8 (144x144 + tile color) -->
		<!--<meta name="msapplication-TileImage" content="images/touch/ms-touch-icon-144x144-precomposed.png">-->
		<meta name="msapplication-TileColor" content="#0093e5">

		<!-- Color the status bar on mobile devices -->
		<meta name="theme-color" content="#0093e5">

		<!-- SEO: If your mobile URL is different from the desktop URL, add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones -->
		<!--
		<link rel="canonical" href="http://www.example.com/">
		-->

		<!-- Google Fonts -->
		<link href="https://fonts.googleapis.com/css?family=Jura:400,700|Open+Sans:400,600,700&amp;subset=cyrillic" rel="stylesheet">

		<!-- Modernizr -->
		<script src="js/modernizr-custom.js"></script>

		<!-- Stylesheets -->
		<link rel="stylesheet" href="css/libs.min.css">
		<link rel="stylesheet" href="css/styles.min.css">
	</head>

	<body>

		<!--[if lte IE 9]>
			<p class="browserupgrade">Вы используете <strong>устаревшую версию</strong> браузера. Пожалуйста <a href="https://browsehappy.com/">обновитесь до новой версии</a> для безопасности данных и вашего удобства.</p>
		<![endif]-->

		<!-- MAIN HEADER -->
		<header class="main-header">
			<div class="container">

				<!-- Mobile top line -->
				<div class="m-top-line">
					<button class="m-top-line__sandwich" id="mSandwich">
						<span></span>
						<span></span>
						<span></span>
					</button>

					<div class="m-top-line__logo">
						<a href="#"><img src="img/logos/header-logo.png" alt="IMKT логотип"></a>
					</div>
				</div>
				<!--/. Mobile top line -->

				<!-- Main header navigation -->
				<nav class="top-nav" id="mTopNav">
					<ul class="top-nav__list">
						<li class="top-nav__item"><a class="top-nav__link" href="#services" rel="m_PageScroll2id">УСЛУГИ</a></li>
						<li class="top-nav__item"><a class="top-nav__link" href="#why-us" rel="m_PageScroll2id">почему мы</a></li>
						<li class="top-nav__item"><a class="top-nav__link" href="#portfolio" rel="m_PageScroll2id">портфолио</a></li>
					</ul>

					<a class="top-nav__logo" href="#">
						<img src="img/logos/header-logo.png" alt="IMKT логотип">
					</a>

					<ul class="top-nav__list">
						<li class="top-nav__item"><a class="top-nav__link" href="#testimonials" rel="m_PageScroll2id">ОТЗЫВЫ</a></li>
						<li class="top-nav__item"><a class="top-nav__link" href="#pricing" rel="m_PageScroll2id">цены</a></li>
						<li class="top-nav__item"><a class="top-nav__link" href="#contacts" rel="m_PageScroll2id">контакты</a></li>
					</ul>
				</nav>
				<!--/. Main header navigation -->

			</div>
		</header>
		<!--/. MAIN HEADER -->

		<!-- INNER PAGE -->
		<main class="inner-page">
			<div class="container">

				<div class="thank-you">
					<h1 class="thank-you__title">ПИСЬМО УСПЕШНО ОТПРАВЛЕНО!</h1>
					<strong class="thank-you__subtitle">Спасибо! Ваш заявка принят.</strong>
					<p class="thank-you__descr">Мы свяжемся с вами в ближайшее время.</p>
				</div>

			</div>
		</main>
		<!--/. INNER PAGE -->

		<!-- SECTION "MAP" -->
		<section class="sect-map">
			<div class="google-map" id="map">
				<!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.2470975699785!2d30.64755081557397!3d50.39923239893536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c450d6f4d0ad%3A0x6e7634ebcf8bba5c!2z0L_RgNC-0YHQvy4g0J3QuNC60L7Qu9Cw0Y8g0JHQsNC20LDQvdCwLCAzNiwg0JrQuNC10LI!5e0!3m2!1sru!2sua!4v1513155492793" allowfullscreen></iframe>-->
			</div>
		</section>
		<!--/. SECTION "MAP" -->

		<!-- MAIN FOOTER -->
		<footer class="main-footer">
			<div class="container">

				<div class="footer-contacts">

					<div class="footer-contacts__info">

						<div class="footer-contacts__address">
							<div class="footer-contacts__icon  footer-contacts__icon--address">
								<svg version="1.1"
										 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
										 x="0px" y="0px"
										 viewBox="0 0 65.3 87.9"
										 xml:space="preserve"
										 width="13" height="17"
										 fill="#0093e5">
									<g>
										<path d="M9.5,9.5c-10.9,11-12.7,28.1-4.2,41.1l23.1,35.1c1.5,2.3,4.6,2.9,6.9,1.4c0.6-0.4,1.1-0.9,1.4-1.4l23.1-35.1
											c9.9-15.1,5.7-35.3-9.3-45.2C37.6-3.1,20.5-1.4,9.5,9.5z M54.9,47.3L32.6,81.1L10.4,47.3C2.3,35,5.7,18.5,18,10.4S46.8,5.7,54.9,18
											C60.8,26.9,60.8,38.4,54.9,47.3z"></path>
										<path d="M32.6,12.7c-10.9,0-19.7,8.8-19.7,19.7s8.8,19.7,19.7,19.7s19.7-8.8,19.7-19.7C52.3,21.5,43.5,12.7,32.6,12.7z M32.6,46.1
											c-7.6,0-13.7-6.1-13.7-13.7c0-7.6,6.1-13.7,13.7-13.7s13.7,6.1,13.7,13.7c0,0,0,0,0,0C46.3,39.9,40.2,46,32.6,46.1z"></path>
									</g>
								</svg>
							</div>

							<span class="footer-contacts__location">Киев  |  пр-т Н. Бажана, 36, офис 239</span>
						</div>

						<div class="footer-contacts__mail">
							<div class="footer-contacts__icon  footer-contacts__icon--mail">
								<svg version="1.1"
										 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
										 x="0px" y="0px"
										 viewBox="0 0 512 311.1"
										 xml:space="preserve"
										 width="19" height="11"
										 fill="#0093e5">
									<path d="M511.6,26.2c0-14.4-11.8-26.2-26.2-26.2c0,0,0,0,0,0L26.2,0.6c-7,0-13.6,2.7-18.5,7.7C2.7,13.3,0,19.9,0,26.9l0.4,258
										c0,7,2.7,13.6,7.7,18.5c5,4.9,11.5,7.7,18.5,7.7c0,0,0,0,0,0l459.2-0.6c14.5,0,26.2-11.8,26.2-26.3L511.6,26.2z M456.6,26.3
										L256,165.7L55,26.8L456.6,26.3z M340.8,192l119,92.3l-408,0.6L171.5,192c5.7-4.4,6.8-12.7,2.3-18.4c-4.4-5.7-12.7-6.8-18.4-2.3
										l-128.9,100L26.2,38.8l222.3,153.7c2.2,1.6,4.8,2.3,7.5,2.3c2.6,0,5.2-0.8,7.5-2.3L485.4,38.2l0.3,233.1l-128.9-99.9
										c-5.7-4.4-14-3.4-18.4,2.3C334.1,179.4,335.1,187.6,340.8,192z"></path>
								</svg>
							</div>

							<a class="footer-contacts__mail-link" href="mailto:info@imkt.pro">info@imkt.pro</a>
						</div>

						<div class="footer-contacts__phones">
							<div class="footer-contacts__icon  footer-contacts__icon--phone">
								<svg version="1.1"
										 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
										 x="0px" y="0px"
										 viewBox="0 0 21.9 21.9"
										 xml:space="preserve"
										 width="15" height="15"
										 fill="#0093e5">
									<path d="M20.9,15.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6
										C2.4,9.2,1.3,6.3,1,3.2C0.9,2.1,1.7,1.1,2.8,1C2.9,1,2.9,1,3,1h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8C9,6.3,8.8,7.1,8.2,7.6
										L7,8.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C20.2,14,20.9,14.9,20.9,15.9z"></path>
								</svg>
							</div>

							<div class="footer-contacts__phones-block">
								<a class="footer-contacts__phone" href="tel:+38(044)4515149">+38 (044) 451 51 49</a>
								<a class="footer-contacts__phone" href="tel:+38(093)9490431">+38 (093) 949 04 31</a>
							</div>
						</div>

						<div class="footer-contacts__welcome">
							<p>Мы рады видеть Вас в гостях с Понедельника по Пятницу с 9.00 до 18.00</p>
						</div>

					</div>

					<div class="footer-contacts__form" id="contacts">
						<form class="contacts-form" id="requestForm" action="form.php" name="footer_form" method="post">
							<fieldset class="contacts-form__wrapper">
								<legend class="contacts-form__title">ПИШИТЕ НАМ</legend>

								<div class="contacts-form__control  contacts-form__control--name">
									<input id="clientName" type="text" name="client-name" placeholder="Ваше имя" minlength="3" required>
								</div>

								<div class="contacts-form__control  contacts-form__control--email">
									<input id="clientMail" type="email" name="client-email" placeholder="Ваш E-mail" required>
								</div>

								<div class="contacts-form__control  contacts-form__control--phone">
									<input id="clientPhone" type="text" name="client-phone" placeholder="Ваш телефон" minlength="10" maxlength="20" required>
								</div>

								<div class="contacts-form__control  contacts-form__control--textarea">
									<textarea name="client-message" placeholder="Сообщение"></textarea>
								</div>

								<div class="contacts-form__control  contacts-form__control--hidden">
									<input type="text" name="client-service" id="serviceName" value="Название услуги">
								</div>

								<div class="contacts-form__control  contacts-form__control--button">
									<button type="submit"><span>ОТПРАВИТЬ</span></button>
								</div>
							</fieldset>
						</form>
					</div>

				</div>

			</div>

			<div class="footer-copyrights">
				<small>&copy; 2018 IMKT.Pro. All right reserved.</small>
			</div>
		</footer>
		<!--/. MAIN FOOTER -->


		<!-- JavaScript -->
		<script src="js/libs.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

		<!-- User map-->
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBqQ_bBw186KJnMcRByvn5ffZueg88wp1E"></script>

		<script src="js/common.js"></script>
		<!--/. JavaScript -->

		<!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
		<!--<script>-->
			<!--window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;-->
			<!--ga('create','UA-XXXXX-Y','auto');ga('send','pageview')-->
		<!--</script>-->
		<!--<script src="https://www.google-analytics.com/analytics.js" async defer></script>-->

	</body>


<?php
$mail = new PHPMailer();
$mail->CharSet = "UTF-8";
$mail->setFrom('info@intellectus-studio.com', 'intellectus-studio');
//$mail->addAddress('k@kirill.pp.ua');

/* вставить mail */
$mail->addAddress('eleventiy96@gmail.com');
/* */

$mail->isHTML(true);
$mail->Subject = 'Форма с IMKT';
$mail->Body    = <<<EOD

  <strong>Мое имя:</strong> $name <br>
  <strong>Мой еmail:</strong> <a href="mailto:$email?subject=feedback" "email me">$email</a> <br>
  <strong>Услуга:</strong> $service <br> <br>
  <strong>Сообщение:</strong> $content

EOD;
$mail->AltBody = 'Ваша заявка принята';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {

}
