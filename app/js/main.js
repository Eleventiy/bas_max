'use strict';

$(function() {

	// PageScrollToId init
	$(window).on("load", function() {
		$('a[rel="m_PageScroll2id"]').mPageScroll2id();
	});

	// Toggle tabs on Section "Why us"
	$('#tab1').click(function() {
		$('#tabThumb1').addClass('active');

		$('#tabThumb2').removeClass('active');
		$('#tabThumb3').removeClass('active');
		$('#tabThumb4').removeClass('active');
		$('#tabThumb5').removeClass('active');
	});

	$('#tab2').click(function() {
		$('#tabThumb2').addClass('active');

		$('#tabThumb1').removeClass('active');
		$('#tabThumb3').removeClass('active');
		$('#tabThumb4').removeClass('active');
		$('#tabThumb5').removeClass('active');
	});

	$('#tab3').click(function() {
		$('#tabThumb3').addClass('active');

		$('#tabThumb1').removeClass('active');
		$('#tabThumb2').removeClass('active');
		$('#tabThumb4').removeClass('active');
		$('#tabThumb5').removeClass('active');
	});

	$('#tab4').click(function() {
		$('#tabThumb4').addClass('active');

		$('#tabThumb1').removeClass('active');
		$('#tabThumb2').removeClass('active');
		$('#tabThumb3').removeClass('active');
		$('#tabThumb5').removeClass('active');
	});

	$('#tab5').click(function() {
		$('#tabThumb5').addClass('active');

		$('#tabThumb1').removeClass('active');
		$('#tabThumb2').removeClass('active');
		$('#tabThumb3').removeClass('active');
		$('#tabThumb4').removeClass('active');
	});

	// Slick slider init on Section "Portfolio"
	$('#portfolioSlider').not('.slick-initialized').slick({
		draggable: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2500,
		customPaging : function(slider, i) {
			var title = $(slider.$slides[i]).data('title');
			return '<a class="portfolio-slider__pager"> '+title+' </a>';
		},
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					arrows: false
				}
			}
		]
	});

	// Slick slider init on Section "Technologies"
	$('#techSlider').not('.slick-initialized').slick({
		draggable: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1000,
		pauseOnFocus: false,
		slidesToShow: 5,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					draggable: true,
					dots: true,
					autoplay: false
				}
			}
		]
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	});

	$('#testimonialSlider').not('.slick-initialized').slick({
		draggable: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1000,
		pauseOnFocus: false,
		slidesToShow: 5,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					draggable: true,
					dots: true,
					autoplay: false
				}
			}
		]
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	});

	// Add data-attr to hidden input in "contacts form"
	var seoFacebook = $('#seoFacebook'), // service button #1
		seoGoogle = $('#seoGoogle'), // service button #2
		seoAdvanse = $('#seoAdvanse'), // service button #3
		devLanding = $('#devLanding'), // service button #4
		devWebCard = $('#devWebCard'), // service button #5
		devCorporate = $('#devCorporate'), // service button #6
		mSeoFacebook = $('#mSeoFacebook'), // mobile service button #1
		mSeoGoogle = $('#mSeoGoogle'), // mobile service button #2
		mSeoAdvanse = $('#mSeoAdvanse'), // mobile service button #3
		mDevLanding = $('#mDevLanding'), // mobile service button #4
		mDevWebCard = $('#mDevWebCard'), // mobile service button #5
		mDevCorporate = $('#mDevCorporate'), // mobile service button #6
		serviceName = $('#serviceName'); // hidden input

	// Service item #1
	seoFacebook.click(function() {
		serviceName.val('Реклама в Facebook');
	});
	mSeoFacebook.click(function() {
		serviceName.val('Реклама в Facebook');
	});

	// Service item #2
	seoGoogle.click(function() {
		serviceName.val('Реклама в Google');
	});
	mSeoGoogle.click(function() {
		serviceName.val('Реклама в Google');
	});

	// Service item #3
	seoAdvanse.click(function() {
		serviceName.val('SEO продвижение');
	});
	mSeoAdvanse.click(function() {
		serviceName.val('SEO продвижение');
	});

	// Service item #4
	devLanding.click(function() {
		serviceName.val('Landing Page');
	});
	mDevLanding.click(function() {
		serviceName.val('Landing Page');
	});

	// Service item #5
	devWebCard.click(function() {
		serviceName.val('Сайт визитка');
	});
	mDevWebCard.click(function() {
		serviceName.val('Сайт визитка');
	});

	// Service item #6
	devCorporate.click(function() {
		serviceName.val('Интернет магазин');
	});
	mDevCorporate.click(function() {
		serviceName.val('Интернет магазин');
	});


	// Jquery Validation form
	var requestForm = $('#requestForm');
	requestForm.validate();

	// InputMask
	// $('#clientPhone').inputmask({"mask": "+380(99)999-99-99"});

	// Page bottom link
	// $(window).scroll(function() {
	// 	var scroll = $(window).scrollTop(),
	// 		windowHeight = $(window).height(),
	// 		documentHeight = $(document).height(),
	// 		pageBotLink = $('#pageBotLink');
	//
	// 	if (scroll + windowHeight == documentHeight) {
	// 		pageBotLink.addClass('hidden');
	// 	} else {
	// 		pageBotLink.removeClass('hidden');
	// 	}
	// });

	// ToTop
	var toTop = $('#toTop');

	$(window).scroll(function() {
		if ($(this).scrollTop() <= 500) {
			toTop.addClass('hidden');
		} else {
			toTop.removeClass('hidden');
		}
	});

	toTop.click(function() {
		$('body, html').animate({ scrollTop: 0 }, 700 );
		return false;
	});

	// Sticky header
	var mainHeader = $('#mainHeader');

	$(window).scroll(function() {
		if ($(this).scrollTop() >= 100) {
			mainHeader.addClass('is-sticky');
		} else {
			mainHeader.removeClass('is-sticky');
		}
	});



	// *** Scripts for mobile ***
	// ==========================

	// Mobile burger
	var mSandwich = $('#mSandwich'),
		mTopNav = $('#mTopNav'),
		mNavLink = $('.top-nav__link'),
		mNavLogo = $('.top-nav__logo');

	mSandwich.click(function(e) {
		e.preventDefault();

		$(this).toggleClass('active');
		mTopNav.toggleClass('active');
	});

	mNavLink.click(function() {
		mTopNav.removeClass('active');
		mSandwich.removeClass('active');
	});

	mNavLogo.click(function() {
		mTopNav.removeClass('active');
		mSandwich.removeClass('active');
	});

	// Accordions
	$('#mServicesAcc').accordion({
		heightStyle: "content"
	});
	$('#mPricingAcc').accordion({
		heightStyle: "content"
	});

	// Portfolio slider
	$('#mPortfolioSlider').not('.slick-initialized').slick({
		centerMode: true,
		centerPadding: '20px',
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite: true
	});


	// *** Functions ***
	// =================

});


// *** SVG Animations (Snap.svg) ***
// =================================


// *** Map ***
// ===========

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 16,

		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(50.3993646,30.6501465), // Kiev

		scrollwheel: false,


		// How you would like to style the map.
		// This is where you would paste any style found on Snazzy Maps.
		styles: [
			{
				"stylers": [
					{
						"saturation": -100
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#f7f7f7"
					}
				]
			},
			{
				"featureType": "landscape.man_made",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#f7f7f7"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.icon",
				"stylers": [
					{
						"saturation": -100
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#333333"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#e7e7e7"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#5f5f5f"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"weight": 1.5
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#afafaf"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#333333"
					}
				]
			}
		]
	};

	// Get the HTML DOM element that will contain your map
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById('map');

	// Create the Google Map using our element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);

	var image = './img/google-map/marker.png';
	// Let's also add a marker while we're at it
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(50.3991845, 30.6501579),
		map: map,
		icon: image,
		draggable: true,
		animation: google.maps.Animation.DROP
	});
	marker.addListener('click', toggleBounce);

	function toggleBounce() {
		if (marker.getAnimation() !== null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	}
}


