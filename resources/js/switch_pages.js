// Этот скрипт написан только для того чтоб показать страницу "Гостиницы"
// Преключение между страницами будет обрабатываться с помощью Back End

$(document).ready(function() {



$(function() {

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

			showMap();

		}

	});


});

});