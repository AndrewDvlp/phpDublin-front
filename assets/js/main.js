$(document).ready(function () {

	// Get started!
	var pContainerHeight = $('.banner').height();
	$(window).scroll(function () {

	  var wScroll = $(window).scrollTop();
	  var Oval;
	  oVal = wScroll / 50;
	  console.log(pContainerHeight);
	  if (wScroll <= pContainerHeight) {
	    console.log(wScroll);
	    $('.blur').css('opacity', oVal);

			$('.banner').css({
				"-webkit-filter": "blur("+ oVal +"px)" });
	  }

		if (wScroll > 128)	{
			$('.page-nav').addClass('nav-fixed');
			$('.banner').addClass('banner-fixed');
			$('.main').css({"margin-top": "175px"});
		}
		else {
			$('.page-nav').removeClass('nav-fixed');
			$('.banner').removeClass('banner-fixed');
			$('.main').css({"margin-top": "0px"});
		}
	});
});
