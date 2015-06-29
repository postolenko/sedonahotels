$(document).ready(function() {

	// var os =  { name: (/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase()) || [u])[0].replace('sunos', 'solaris') };
	
	// if( os.name != "win" && os.name != "mac" && os.name != "linux" && os.name != "solaris" ) {

	// 	$(".for-slider").addClass("bg-for-mobile");

	// } else {


// Function for detected a which operation sistem user is using.
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
//  If user use mobile browser the slider will not to work. For mobile browsers is hard. 
	if(jQuery.browser.mobile != false) {

		$(".for-slider").addClass("bg-for-mobile");

	} else {
		
		// Else The slider will start
		var documentEvent = "document was downloaded";

		var sliderStart;

		var indexSlide;

		var nextSlider = 1;

		var countScrollForSlider = 0;

		// Firs is downloading a default backgorund image
		$(".slide-" + nextSlider ).fadeIn(1700);
		// How much slides we have
		var countSliders = $(".for-slider div").length;

		var sliderNumbersList = "";

		// Creating of switch buttons for slides
		for( i = 1; i <= countSliders; i++) {

			sliderNumbersList += "<div class='slider-num'></div>";

		}

		$(".slider-numbers").html(sliderNumbersList);
		// The first button must be active
		$(".slider-num:eq("+(nextSlider-1)+")").addClass("bg-slider-num-active");
		// Calling the function to start this slide show
		startSlide();


		$(document).scroll(function() {
			// if user make srolling we must know it
			documentEvent = "document was scrolled";

			startSlide();

		});


		$(window).resize(function() {

			if ( $(window).scrollTop() <= $(".for-slider").height() ) {

				if( $(window).width() <= 480 ) {

					clearTimeout(sliderStart);

				}

				if($(window).width() > 480  ) {

					showSlide();

				}

			}

		});


		// If user make cklick on one of them slides buttons - we switch to the needing slide
		$(".slider-num").click(function() {

				indexSlide = $(this).index();

				 for( k = 0; k <= countSliders - 1; ++k) {

					if( k == indexSlide ) {   // for needing button slide class is active
						
						$(".slider-num:eq("+k+")").addClass("bg-slider-num-active");
						
					} else if ( $(".slider-num:eq("+k+")").hasClass("bg-slider-num-active") ){ // for others class is default

						$(".slider-num:eq("+k+")").removeClass("bg-slider-num-active");

					}

				}
				// clear the time to "0" of our slider
				clearTimeout(sliderStart); 
				// if user didn't click to the current slide
				if((indexSlide + 1) != nextSlider) {
					// fade first slide
					$(".slide-" + nextSlider).fadeOut(500);
					// and show the next slide
					$(".slide-" + (indexSlide + 1) ).fadeIn(500);

				}			

					nextSlider = indexSlide + 1;
					// call the function 
					showSlide();	

			});

	}


	function startSlide() {		
		// if user doesn't see a slider in his window is no need to continue slide show 
		if ( $(window).scrollTop() >= $(".for-slider").height() ) {		

			countScrollForSlider = 0;

			if(documentEvent == "document was scrolled" ) {

				clearTimeout(sliderStart);

			}			

		} else { // else slider start

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


				if( nextSlider >=  countSliders) {

					nextSlider = 1;

					$(".slider-num:eq(" + 0 + ")").addClass("bg-slider-num-active");

					$(".slide-" + nextSlider).fadeIn(2500);

					$(".slide-" + countSliders ).fadeOut(2500);

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