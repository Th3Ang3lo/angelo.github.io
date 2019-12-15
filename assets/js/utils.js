function scrollToPortfolio(){
	var target_offset = $("#portfolio").offset();
	var target_top = target_offset.top;
	$('html, body').animate({ scrollTop: target_top }, 1000);
}

function scrollToContact(){
    var target_offset = $("#portfolio").offset();
    var target_top = target_offset.top;
    $('html, body').animate({ scrollTop: target_top }, 1000);
}

$(".show-1").show(700);

$(document).scroll(function(){
	if($(window).width() > 700){
		if($(this).scrollTop() > 10){
			$(".show-2").show(700);
		}

		if($(this).scrollTop() > 100){
			$(".show-3").show(700);
		}

		if($(this).scrollTop() > 300){
			$(".show-4").show(700);
		}

		if($(this).scrollTop() > 600){
			$(".show-5").show(700);
		}

		return true;
	}
});

if($(window).width() < 700){
	$(".show-2").show(700);
	$(".show-3").show(700);
	$(".show-4").show(700);
	$(".show-5").show(700);
}