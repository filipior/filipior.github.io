$(function () {

	// animacja na hover -------------------------------------

	var cover = $( ".cover" );

	cover.on("mouseenter", function (event) {
		$(this).addClass("coverRolloverOut" );
	});

    // menu hamburger ----------------------------------------

	var menu = $(".hamburgerMenu");
	var menuOpen = $(".hamburgerMenuOpen");

	menu.on("click", function (event) {

		menuOpen.slideToggle({direction: 'down'},300);

	});

	// covery -----------------------------------------------

	var cover = $(".cover");
	var content = $(".projectContent");
	var coverTitle = $(".content");
	var logo = $(".logo");
	var top = $(".top");
	var allClosed = true;

	
	cover.on("click", function(event) {

		cover.addClass("coverMin");
		cover.removeClass("coverMax");
		content.css('display', 'none');
		$(this).find('.projectContent').css('display', 'block');
		$(this).removeClass("coverMin").addClass("coverMax");
		content.removeClass("hidden").addClass("show")
		
		allClosed = false;

		if (allClosed === false) {
			cover.removeClass("coverRollover");
			cover.removeClass("coverRolloverOut");
			logo.addClass("logoCollapsed");
			top.addClass("topCollapsed");
		} 
	});

	logo.on("click", function (event) {

		cover.removeClass("coverMax");
		cover.removeClass("coverMin");
		content.removeClass("show").addClass("hidden");
		content.css('display', 'none');
		
		allClosed = true;
		
		if (allClosed === true) {
			cover.addClass("coverRollover");
			logo.removeClass("logoCollapsed");
			top.removeClass("topCollapsed");
		}
	});










});