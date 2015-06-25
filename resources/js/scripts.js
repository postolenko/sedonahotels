$(document).ready(function() {

var onePercentOfRow
var leftCoor
var mapSectionOffsetTop;
var searchHtHpgSectCoor;
var searchBoxMargin;

	getPaddingSearchBox();
	getReasonBgHeight();
	getMapSize();
	showMap();

	$(window).resize(function() {

		getPaddingSearchBox();
		getReasonBgHeight();
		getMapSize();

		$(".adult-h").css({"width": $(".date-text").outerWidth(true) + "px"});

	});

	$(document).scroll(function() {

			showMap();
		
	});
		

	$(function() {


		$('.sch-ht-btn').click(function(){ 

			$(".search-ht-hpg-sect").append("<div class='form'></div>");

			$('.form').load('pages/search_form.html', function() {
	
				$(function() {

					$(".search-ht-form ").css({"top": $(window).height()/2 - $(".form form").height()/2 + "px"});
					$(".adult-h").css({"width": $(".date-text").outerWidth(true) + "px"});
				});

				$(function() {

					$(".icon-plus").click(function(){

						var index = $( ".icon-plus" ).index( this );

						var countCustomers = parseFloat($(".count-inpt:eq("+index+")").val());

						if( countCustomers <= 0 || !$.isNumeric(countCustomers) ) {

							countCustomers = 0;

						} else {

							$(".count-inpt:eq("+index+")").val(++countCustomers);

						}
		
					});

					$(".icon-minus").click(function(){

						var index = $( ".icon-minus" ).index( this );

						var countCustomers = parseFloat($(".count-inpt:eq("+index+")").val());

						if( countCustomers <= 0 || !$.isNumeric(countCustomers) ) {

							countCustomers = 0;

						} else {

							$(".count-inpt:eq("+index+")").val(--countCustomers);

						}
		
					});

					// function getCountCustomers(module) {
					// 	var countCustomers = parseFloat($(".count-inpt:eq("+index+")").val());

					// 	if( countCustomers <= 0 || !$.isNumeric(countCustomers) ) {

					// 		countCustomers = 0;

					// 	} else {

					// 		$(".count-inpt:eq("+index+")").val(countCustomers + module);

					// 	}
					// }

				});


				$(function () {

					if( $(window).width() >= 768) {

						$(".adult-h").css({"width": $(".date-text").outerWidth(true) + "px"});

					} else {

						$(".adult-h").css({"width": "100%"});
	
					}

				});

				$(".found-ht-btn, .close-search-form").click(function() {

					$(".form").remove();

				});

			});

		}); 

	});


	$(function() {

		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 4100,
			values: [ 0, 3100 ],
			slide: function( event, ui ) {

				$( "#amount1" ).val("от " + $( "#slider-range" ).slider( "values", 0 ) );
				$( "#amount2" ).val("до " + $( "#slider-range" ).slider( "values", 1 ) );		

			}

		});

		$( "#amount1" ).val("от " + $( "#slider-range" ).slider( "values", 0 ) );
		$( "#amount2" ).val("до " + $( "#slider-range" ).slider( "values", 1 ) );

	});


	$(function() {

		$( ".menu-btn" ).click(function() {

			var heightMenu = ( $(".nav-link").length) * $(".navigation li").outerHeight(true) + $(".logo a").outerHeight(true);

			if( $("header").height() < heightMenu ) {

				$("header").animate({"height": heightMenu + "px"},500);

			} else {

				$("header").animate({"height": 50 + "px"},500);

			}

		});

	});


	function getReasonBgHeight() {

		$( ".reason-content" ).each(function( index ) {

			onePercentOfRow = $(".row").width() / 100;

			leftCoor = ( $(window).width() - $(".row").width() ) / 2 ;

			if (index % 2 == 0) {

				$(".reason-content:eq("+index+")").css({"float": "left"});

				$(".reason-bg:eq("+index+")").css({"right": 0});
				

			} else {

				$(".reason-content:eq("+index+")").css({"float": "right"});

		
				$(".reason-bg:eq("+index+")").css({"left": 0});

				$(".reason:eq("+index+")").css({"background-color":"#eeeeee"});

			}


			if( $(window).width() <= 680 ){

				// var percentReasonContnet = 47;
				var percentReasonBg = 52;

			} else {

				// var percentReasonContnet = 33;
				var percentReasonBg = 66;

			}

			// $(".reason-content").css({"width": percentReasonContnet + "%"});

			if( leftCoor <= 0 ) {

				$(".reason-content").css({"margin": 0 + "px"});

			}

			$(".reason-bg:eq("+ index +")").css({"width": percentReasonBg * onePercentOfRow + leftCoor + "px"});

			var reasonContentHeight = $(".reason-content:eq("+ index +")").height();

			$(".reason-bg:eq("+ index +")").outerHeight( reasonContentHeight );


		});

	}


	
	function showMap() {

		var mapBlock = document.getElementsByClassName("search-ht-hpg-sect")[0];

		mapSectionOffsetTop = $(".map-section").offset().top + $(window).height();
		searchHtHpgSectCoor = $(".search-ht-hpg-sect").offset().top + $(".search-ht-hpg-sect").outerHeight();
							
			if ( mapSectionOffsetTop >=  searchHtHpgSectCoor ) {

				if( !$("div").is(".gm-style") ) {

					google.maps.event.addDomListener(window, "load", initialize());

				}

			}

	}


	function initialize() {

		var latlng = new google.maps.LatLng(34.8716409,-111.761786,1875);

		var myOptions = {
			zoom: 17,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.LANDSCAPEMAP
		};

		var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

	}

	function getMapSize() {

		$("#map-canvas").css({"width": ($(window).width() + ( $(window).width()/100 )*20 ) + "px",
							  "margin-left": -1 * $(window).width()/100*20 + "px"});

		$("#map-canvas").height($(window).height());

	}

	


	function getPaddingSearchBox() {

		if( $(window).width() <= 768 ) {

			searchBoxMargin = 50;
			// $("header").height(50);

		} else {
			$("header").height($("header .navigation").outerHeight(true));

			searchBoxMargin = $("header .navigation").outerHeight();

		}

		$('body').css({"padding-top": searchBoxMargin + "px"});

	}



});