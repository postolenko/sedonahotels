$(document).ready(function() {

// $(function() {
	// $(".promo-block").next().css({
	// 							"-webkit-box-shadow": "0px -5px 10px 0px rgba(0, 0, 0, 0.37)",
	// 							"-moz-box-shadow":"0px -5px 10px 0px rgba(0, 0, 0, 0.37)",
	// 							"box-shadow":"0px -5px 10px 0px rgba(0, 0, 0, 0.37)"
	// 						});
// });

// $(".promo-block").height($(window).height() - $(".header").height() - $(".reasons-box-h").outerHeight(true));

var documentEvent = "document was downloaded";

var resizeDocumentEvent = 0;

var sliderStart;

window.nextSlider = 1;

var countScrollForSlider = 0;

$(".slide-" + nextSlider ).fadeIn(1700);

var sliderBox = document.getElementsByClassName("for-slider")[0];


var firstWindowWidth = $(window).width();
var stopSlideShow = " ";

	if (firstWindowWidth > 480) {

		startSlide();

	}


	$(document).scroll(function() {

		documentEvent = "document was scrolled";

		startSlide();

	});


	$(window).resize(function() {

		// clearTimeout(resStartSlide);

		if( $(window).width() <= 480 ) {

			
			if( resizeDocumentEvent != 0 ) {

				clearTimeout(sliderStart);
				console.log(resizeDocumentEvent);
				// var firstCallSlide = "clear";	
				// console.log(firstCallSlide);
			}
			// var stopSlideShow = 1;
			

			resizeDocumentEvent = 0;
			console.log(resizeDocumentEvent);
		}

		// if (firstWindowWidth > 480) {
		// 	var firstCallSlide = "were";

		// }

		// beginSlideronResize();
		// startSlide();

		if($(window).width() > 480  ) {

			// var stopSlideShow = "were started";

			resizeDocumentEvent++;
			console.log(resizeDocumentEvent);
			if(resizeDocumentEvent == 1) {

				// console.log("called");
				
				// console.log(firstCallSlide);
				console.log(resizeDocumentEvent);
				setTimeout(function() {

					// console.log("called");
					// startSlide();
					showSlide();
					// firstCallSlide = "were";
				}, 1000);

			}

			// ++resizeDocumentEvent;
		}

		// showSlide();

	});


	function startSlide() {

		var sliderBoxCoor = sliderBox.getBoundingClientRect();

		// if ( sliderBoxCoor.bottom <= $(window).scrollTop() ) {	
		if ( $(".for-slider").height() <= $(window).scrollTop() ) {					
					
			countScrollForSlider = 0;

			if(documentEvent == "document was scrolled" ) {

				clearTimeout(sliderStart);

			}
			

		} else {

			// stopOrStartSlide = "do it";

			countScrollForSlider = ++countScrollForSlider;

			// if( sliderBoxCoor.bottom > 0 && countScrollForSlider == 1 ) {
			if( countScrollForSlider == 1 ) {

				showSlide();
			
			}	

		}

	}


// $(function() {
// 	$(".switch-slide .switch-number").click(function() {
// 		console.log( $(this).index() + 1);
// 		nextSlider = $(this).index() + 1;
// 		startSlide();
// 	});
// }); 


	// $(function() {
	// 	$(".slide-num").click(function() {

	// 		// clearTimeout(sliderStart);

	// 		var indexSl = $(this).index();

	// 		nextSlider = $(this).index() + 1;

	// 			setTimeout(function() {

	// 				showSlide();

	// 			}, 500);

	// 		console.log($(this).index());
	// 	});
	// });



	function showSlide() {
		
		if($(window).width() > 480) {

		// 	sliderStart = setTimeout(function() {
		// 			console.log(nextSlider);
		// 						if( nextSlider <= 1 ) {				

		// 							nextSlider = $(".for-slider div").length;

		// 							$(".slide-" + nextSlider ).fadeIn(1000);

		// 							$(".slide-" + 1 ).fadeOut(1000);

		// 						} else {

		// 							$(".slide-" + ( nextSlider - 1 ) ).fadeIn(1000);

		// 							$(".slide-" + nextSlider).fadeOut(1000);

		// 							nextSlider = --nextSlider;
	
		// 						}								

		// 						showSlide();

		// 					}, 6000);

		// }


		sliderStart = setTimeout(function() {
					// console.log(nextSlider);
			
								if( nextSlider >=  $(".for-slider div").length) {

									nextSlider = 1;
									
									$(".slide-" + nextSlider).fadeIn(1000);

									$(".slide-" + $(".for-slider div").length ).fadeOut(1000);

								} else {

									$(".slide-" + ( nextSlider + 1 ) ).fadeIn(1000);

									$(".slide-" + nextSlider).fadeOut(1000);

									nextSlider = ++nextSlider;
	
								}								

								showSlide();

							}, 6000);

		}

		


	}



});