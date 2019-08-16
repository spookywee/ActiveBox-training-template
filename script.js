
$('.slides').slick({
   // setting-name: setting-value
  });

$(window).on("scroll", function() {
  // Если высота больше 200px 
    if ($(window).scrollTop() > 200) {
    	$('.header').addClass('fixed');
    	$(".line").css("margin-top","-200px");
	}

    else {
        $('.header').removeClass('fixed');
        $(".line").css("margin-top","0");
	}
    });