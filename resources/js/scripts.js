$(document).ready(function() {


var heightMenu; 			// Высота меню


var onePercentOfRow; 		
var percentReasonBg;  		
var reasonContentHeight;	
var leftCoor;          		// Ширина от левого края окна до левого края ".row"


var searchHtHpgSectCoor;	// Координата ".search-ht-hpg-sect"

var paddingTopBody;			// Высота меню и отступ страницы от верхнего края окна


var mapSectionOffsetTop;	// Координата положения карты
var mapBlock;				


var index;					
var countCustomers;			


var countScrollForHeader = 0;


	getPaddingBody();
	getBackgroundHeader();

	getScrollToTopBtn();

	getReasonBgHeightAndPosition();
	getMapSize();
	showMap();

	$(window).resize(function() {

		getPaddingBody();
		getReasonBgHeightAndPosition();
		getMapSize();

		$(".adult-h").css({"width": $(".date-text").outerWidth(true) + "px"});

	});


		
	$(document).scroll(function() {

			getBackgroundHeader();
			getScrollToTopBtn();
			showMap();

	});
		

// Вывод формы поиска гостиницы на екран при нажатии на кнопку "sch-ht-btn" ( Поиск гостиницы в Седоне )
	$(function() {


		$('.sch-ht-btn').click(function(){ 
			// Добаление блока "form" для вставки формы 
			$(".search-ht-hpg-sect").append("<div class='form'></div>");
			// Загрузка HTML кода формы по адресу "pages/search_form.html"
			$('.form').load('pages/search_form.html', function() {
				// Центральное расположение формы поиска гостиницы на странице "Информация"
				$(function() {

					$(".search-ht-form ").css({"top": $(window).height()/2 - $(".form form").height()/2 + "px"});
					$(".adult-h").css({"width": $(".date-text").outerWidth(true) + "px"});
				});
				// Выбор количества посетителей 
				$(function() {

					$(".icon-plus").click(function(){

						index = $( ".icon-plus" ).index( this );
						// function getCountCustomers(1);
						countCustomers = parseFloat($(".count-inpt:eq("+index+")").val());

						if( countCustomers <= 0 || !$.isNumeric(countCustomers) ) {
					
							countCustomers = 1;
						
						} else {

							++countCustomers;

						}
						$(".count-inpt:eq("+index+")").val(countCustomers);
					});

					$(".icon-minus").click(function(){

						index = $( ".icon-minus" ).index( this );
						// function getCountCustomers(-1);
						countCustomers = parseFloat($(".count-inpt:eq("+index+")").val());

						if( countCustomers <= 0 || !$.isNumeric(countCustomers) ) {
							
							countCustomers = 0;
							
						} else {

							--countCustomers;

						}
						$(".count-inpt:eq("+index+")").val(countCustomers);
		
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

// Определение величины в input "#amount1" и "#amount2" при выборе диапазона стоимости гостиниц
// Ползунок на странице "Гостиницы"

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

//  Показать - скрыть адаптивное меню при клике на иконку "гамбургер"
	$(function() {

		$( ".menu-btn" ).click(function() {

			heightMenu = ( $(".nav-link").length) * $(".navigation li").outerHeight(true) + $(".logo a").outerHeight(true);

			if( $(".top-nav").height() < heightMenu ) {

				$(".top-nav").animate({"height": heightMenu + "px"},500);

			} else {

				$(".top-nav").animate({"height": 50 + "px"},500);

			}

		});

	});

// Отступ сферху всего документа равный высоте фиксированного меню
	function getPaddingBody() {

		if( $(window).width() <= 768 ) {

			paddingTopBody = 50;

		} else {

			$(".top-nav").height($(".top-nav .navigation").outerHeight(true));

			paddingTopBody = $(".top-nav .navigation").outerHeight();

		}

		$('body').css({"padding-top": paddingTopBody + "px"});

	}

// Определить фон ".header"  
	function getBackgroundHeader() {
		if ( $(window).scrollTop() <= $(".top-nav").height() ) {					

			countScrollForHeader = 0;

			if($(".top-nav").hasClass("top-nav-bg")) {

				$(".top-nav").removeClass("top-nav-bg");

			}

		} else {

			++countScrollForHeader;

			if( countScrollForHeader == 1 ) {

				$(".top-nav").addClass("top-nav-bg");

			}	

		}
	}


// Получние высоты и ширины блока с фоновым изображением блока ".reason-promo-block .reason-bg" и
// "background-color" нечетного блока "reason"
	function getReasonBgHeightAndPosition() {

		$( ".reason-content" ).each(function( index ) {

			onePercentOfRow = $(".row").width() / 100;

			leftCoor = ( $(window).width() - $(".row").width() ) / 2 ;

		


			if( $(window).width() <= 768 ){

				// var percentReasonContnet = 47;
				percentReasonBg = 52;

			} else {

				// var percentReasonContnet = 33;
				percentReasonBg = 66;

			}

			// $(".reason-content").css({"width": percentReasonContnet + "%"});

			if( leftCoor <= 0 ) {

				$(".reason-content").css({"margin": 0 + "px"});

			}

			$(".reason-bg:eq("+ index +")").css({"width": percentReasonBg * onePercentOfRow + leftCoor + "px"});

			reasonContentHeight = $(".reason-content:eq("+ index +")").height();

			$(".reason-bg:eq("+ index +")").outerHeight( reasonContentHeight );


			if (index % 2 == 0) {

				$(".reason-content:eq("+index+")").css({"float": "left"});

				$(".reason-bg:eq("+index+")").css({"right": 0});
				

			} else {

				$(".reason-content:eq("+index+")").css({"float": "right"});

		
				$(".reason-bg:eq("+index+")").css({"left": 0});

				$(".reason:eq("+index+")").css({"background-color":"#eeeeee"});

			}


		});

	}


// Google Map
	
// Загрузить Google карту если секция "map-section" попадает в окно браузера
	function showMap() {

		mapBlock = document.getElementsByClassName("search-ht-hpg-sect")[0];

		mapSectionOffsetTop = $(".map-section").offset().top + $(window).height();
		searchHtHpgSectCoor = $(".search-ht-hpg-sect").offset().top + $(".search-ht-hpg-sect").outerHeight();
							
			if ( mapSectionOffsetTop >=  searchHtHpgSectCoor ) {

				if( !$("div").is(".gm-style") ) {

					google.maps.event.addDomListener(window, "load", initialize());

				}

			}

	}

//  Инициализация карты
	function initialize() {

		var latlng = new google.maps.LatLng(34.8716409,-111.761786,1875);

		var myOptions = {
			zoom: 17,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.LANDSCAPEMAP
		};

		var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

	}

// Получение ширины и высоты карты при загрузке и ресайзе
	function getMapSize() {

		$("#map-canvas").css({"width": ($(window).width() + ( $(window).width()/100 )*20 ) + "px",
							  "margin-left": -$(window).width()/100*20 + "px"});

		$("#map-canvas").height($(window).height());

	}

	
//  Показать кнопку прокрутки в вверх страницы
	function getScrollToTopBtn() {
		if ($(window).scrollTop() > $('.top-nav').height() ) {

        	$('.scroll-to-top').fadeIn();

        } else {

            $('.scroll-to-top').fadeOut();

        }
	}

 
    $('.scroll-to-top').click(function () {

        $('body,html').animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


// Через определенный промежуток времени скролим вниз на высоту ".top-nav"
// Делаем только для спецэффекта. Чисто от души решил написать на чистом JavaScript.
    // $(function() {

	   //  if($(window).scrollTop() < $(".top-nav").height()) {

	   //  	var winTop = $(window).scrollTop();

	   //  	var downDoc;

	   //  	setTimeout(function() {

		  //   	downDoc = setInterval(function() {

		  //   		winTop++;

		  //   		$(window).scrollTop(winTop);   

		  //   		if($(window).scrollTop() > $(".top-nav").height()) {

		  //   			clearInterval(downDoc);

		  //   		}

		  //   	},50);

	   //  	},1500);
	   //  }
    	
    // });




	// Этот скрипт написан только для того чтоб показать страницу "Гостиницы"
	// Переход между страницами будет обрабатываться через Back End

	var indexMenu;
	var namePage;

	$(".navigation li").click(function() {

		indexMenu = $(this).index();
		
		namePage = $(".nav-link:eq("+indexMenu+")").text();
		
		if(namePage == "Гостиницы") {

			$("html, body").css({"overflow-x":"hidden"});
			
			$(".information-page").fadeOut(300);

			$("footer").css({"top":"0px"});

			$(".hotels-page").css({
				"display":"block",
				"position":"relative"
			});

			$(".hotels-page").animate({"left":"0"},1000);

			setTimeout(function() {

				$("html, body").css({"overflow-x":""});

			}, 1500);
			
		}

		

		if(namePage == "Информация") {

			$(".hotels-page").css({"display":"none"});

			$(".information-page").fadeIn(1000);

			$("footer").css({"top":"450px"});

			$(".hotels-page").css({"left":"100%"});

			getMapSize();
			showMap();

		}

	});


    

});