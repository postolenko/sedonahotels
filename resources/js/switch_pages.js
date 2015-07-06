// Этот скрипт написан только для того чтоб показать страницу "Гостиницы"
// Преключение между страницами будет обрабатываться с помощью Back End
// Поэтому не удивляйтесь если в процессе анимации будет горизонтальный скролл.
$(document).ready(function() {

	var indexMenu;
	var namePage;

	$(".navigation li").click(function() {

		indexMenu = $(this).index();
		
		namePage = $(".nav-link:eq("+indexMenu+")").text();
		
		if(namePage == "Гостиницы") {

			$(".information-page").fadeOut(300);

			$("footer").css({"top":"0px"});

			$(".hotels-page").css({
				"display":"block",
				"position":"relative"
			});

			$(".hotels-page").animate({"left":"0"},1000);

			
		}

		if(namePage == "Информация") {

			$(".hotels-page").css({"display":"none"});

			$(".information-page").fadeIn(1000);

			$("footer").css({"top":"450px"});

			$(".hotels-page").css({"left":"100%"});

			// -----------------------


			$("#map-canvas").css({"width": ($(window).width() + ( $(window).width()/100 )*20 ) + "px",
								  "margin-left": -1 * $(window).width()/100*20 + "px"});

			$("#map-canvas").height($(window).height());

			// -----------------------

		}

	});


});