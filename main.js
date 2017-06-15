var __PA_FADE_TIME = 1000;
function pa_fade_in(inend) {
	$('body').animate({opacity:1}, __PA_FADE_TIME, function () {
		if (inend) {
			inend();
		}
	});
}
function pa_fade_out(inend) {
	$('body').animate({opacity:0}, __PA_FADE_TIME, function () {
		if (inend) {
			inend();
		}
	});
}