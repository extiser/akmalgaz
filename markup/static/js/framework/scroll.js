$(document).ready(function() {
	$('a[href^="#"]').click(function () { 
		elementClick = $(this).attr("href");
		if (elementClick == '#top') {
			$('body').animate( { scrollTop: 0}, 1300 );
		} else {
			destination = $(elementClick).offset().top;
			heightMenu = $('.top-menu').height();
			$('body').animate( { scrollTop: destination - heightMenu}, 1300 );
		}
		return false;
	});
});