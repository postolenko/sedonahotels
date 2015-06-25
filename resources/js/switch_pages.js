$(function() {

	var indexMenu;
	var namePage;

	$(".navigation li").click(function() {

		indexMenu = $(this).index();

		namePage = $(".nav-link:eq("+indexMenu+")").text();

		console.log(namePage);
		
		if(namePage == "Гостиницы") {		

			$(".information-page").fadeOut(300);
			$("footer").css({"top":"0px"});

			$(".hotels-page").css({
								   "display":"block",
								   "position":"relative"
								});

			$(".hotels-page").animate({"left":"0"},900);

		}

		if(namePage == "Информация") {

			// var leftCoor = ( $(window).width() - $(".row").width() ) / 2 ;
			// var reasonContentHeight = $(".reason-content:eq("+ index +")").height();

			// $(".reason-bg:eq("+ index +")").outerHeight( reasonContentHeight );

			// $(".reason-bg:eq("+ index +")").css({"width": $(".row").width() - $(".reason-content").outerWidth(true) + leftCoor + "px"});


			$(".hotels-page").css({"display":"none"});

			$(".information-page").fadeIn(1000);

			$("footer").css({"top":"450px"});

			$(".hotels-page").css({"left":"100%"});

		}

	});


});