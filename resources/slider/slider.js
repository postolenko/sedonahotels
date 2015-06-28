$(document).ready(function() {

	var os =  { name: (/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase()) || [u])[0].replace('sunos', 'solaris') };


	if( os.name != "win" && os.name != "mac" && os.name != "linux" && os.name != "solaris" ) {

		$(".for-slider").addClass("bg-for-mobile");

	} else { 

		var documentEvent = "document was downloaded";

		// var resizeDocumentEvent = 0;

		var sliderStart;

		var indexSlide; var numFirstSl;

		var nextSlider = 1;

		var countScrollForSlider = 0;


		// var sliderBox = document.getElementsByClassName("for-slider")[0];

		$(".slide-" + nextSlider ).fadeIn(1700);

		var countSliders = $(".for-slider div").length;

		for( i = 1; i<= countSliders; i++) {
			
			$(".slider-numbers").append("<div class='slider-num'></div>");

		}

		$(".slider-num:eq("+(nextSlider-1)+")").addClass("bg-slider-num-active");

		startSlide();


		$(document).scroll(function() {

			documentEvent = "document was scrolled";

			startSlide();

		});


		// $(window).resize(function() {

		// 	if ( $(window).scrollTop() <= $(".for-slider").height() ) {

		// 		if( $(window).width() <= 480 ) {

		// 			clearTimeout(sliderStart);

		// 		}

		// 		if($(window).width() > 480  ) {

		// 			showSlide();

		// 		}

		// 	}

		// });



		$(".slider-num").click(function() {

				indexSlide = $(this).index();

				 for( k = 0; k <= countSliders - 1; ++k) {

					if( k == indexSlide ) {

						$(".slider-num:eq("+k+")").addClass("bg-slider-num-active");

					} else if ( $(".slider-num:eq("+k+")").hasClass("bg-slider-num-active") ){

						$(".slider-num:eq("+k+")").removeClass("bg-slider-num-active");

					}

				}

				clearTimeout(sliderStart);

				if((indexSlide + 1) != nextSlider) {

					$(".slide-" + nextSlider).fadeOut(500);

					$(".slide-" + (indexSlide + 1) ).fadeIn(500);

				}			

					nextSlider = indexSlide + 1;

					showSlide();	

			});

	}


	function startSlide() {

		if ( $(".for-slider").height() <= $(window).scrollTop() ) {					

			countScrollForSlider = 0;

			if(documentEvent == "document was scrolled" ) {

				clearTimeout(sliderStart);

			}			

		} else {

			++countScrollForSlider;

			if( countScrollForSlider == 1 ) {

				showSlide();

			}	

		}

	}


	function showSlide() {

		if($(window).width() > 480) {

			clearTimeout(sliderStart);

			sliderStart = setTimeout(function() {

				for( j = 0; j <= countSliders - 1; ++j) {

					if(j == nextSlider ) {

						$(".slider-num:eq("+j+")").addClass("bg-slider-num-active");

					} else if ( $(".slider-num:eq("+j+")").hasClass("bg-slider-num-active") ){

						$(".slider-num:eq("+j+")").removeClass("bg-slider-num-active");

					}

				}


				if( nextSlider >=  $(".for-slider div").length) {

					nextSlider = 1;

					$(".slider-num:eq(" + 0 + ")").addClass("bg-slider-num-active");

					$(".slide-" + nextSlider).fadeIn(2500);

					$(".slide-" + $(".for-slider div").length ).fadeOut(2500);

				} else {

					$(".slide-" + ( nextSlider + 1 ) ).fadeIn(2500);

					$(".slide-" + nextSlider).fadeOut(2500);

					++nextSlider;

				}								

				showSlide();

			}, 6000);

		} else {

			clearTimeout(sliderStart);

		}

	}

});