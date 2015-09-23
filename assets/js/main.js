$(document).ready(function () {

	// Get started!
	var pContainerHeight = $('.banner').height();
	$(window).scroll(function () {

	  var wScroll = $(window).scrollTop();
	  var Oval;
	  oVal = wScroll / 50;
		var invert;
		invert = wScroll * 70 / 140;
		invert = Math.min(invert, 70);
	  console.log(pContainerHeight);
	  if (wScroll <= pContainerHeight) {
	    console.log(wScroll);
	    $('.blur').css('opacity', oVal);

			$('.banner').css({
				"-webkit-filter": "blur("+ oVal +"px)" });
	  }

		if (wScroll > 110) {
			$('.mobile-icon').css({"-webkit-filter": "invert("+ invert +"%)"});
		}
		if (wScroll < 110) {
			$('.mobile-icon').css({"-webkit-filter": "invert(0%)"});

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

	$('.mobile-icon').on('click', function(){
    $('.mobile-nav').css({"visibility":"visible"})
  });
	$('.close-icon').on('click', function(){
    $('.mobile-nav').css({"visibility":"hidden"})
  });
});
