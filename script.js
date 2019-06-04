
	var testing = function() {
		var w1 = $("#bubbless").width();
		var w2 = $(".bubble-contaisner").outerWidth();
		console.log("w:"+w1);
		console.log("inner:"+w2);
        $("#bubbles").css({"margin-left": (w1-w2)/2});
	}

	var getDocumentHeight = function() {
		return ($(document).height());
	}
	var getWindowHeight = function() {
		return ($(window).height());
	}
	var setSectionHeight = function() {
		var width = $(window).width();
	    if(width > 768){
		    $(".info-section").css({"height": "100vh"});
	    }
	    else if(width < 768){
	    	$(".info-section").eq(0).css({"height": "150vh"});
	    	$(".info-section").eq(1).css({"height": "200vh"});
	    	$(".info-section").eq(2).css({"height": "100vh"});
	    	$(".info-section").eq(3).css({"height": "100vh"});
	    	$(".info-section h1").css({"font-size": "3em"});
	    }
	}
	
	var test = function() {
		return (getDocumentHeight()/5);
	}
	
	$(document).ready(testing);
	$(window).resize(testing);
	
	$(document).ready(setSectionHeight);
	$(window).resize(setSectionHeight);
	
	$(document).ready(test);
	$(window).resize(test);

	$(document).ready(getDocumentHeight);
	$(window).resize(getDocumentHeight);
	
	$(document).ready(getWindowHeight);
	$(window).resize(getWindowHeight);

/*	var adjustHeight = function() {
		var height = $(window).height();
		var width = $(window).width();

	    if(width < 460 && height < 560){
		    $(".jumbotron").css({"height": (height*0.85) + 'px'});
		    $(".navbars").css({"height": (height*0.15) + 'px'});
		    $('.jumbotron img').css("max-width", "200px");
		    $('.navbar-nav p').hide();
	    	$('.scroll-up').css("left", "80%");
	    }
    	else if((width > 460 && width < 660) && (height > 560 && height < 760)){
		    $(".jumbotron").css({"height": (height*0.87) + 'px'});
		    $(".navbars").css({"height": (height*0.13) + 'px'});
		    $('.jumbotron img').css("max-width", "200px");
		    $('.navbar-nav p').hide();
	    	$('.scroll-up').css("left", "80%");
	    }
	    else if(width > 660 && height > 760){
		    $(".jumbotron").css({"height": (height*0.88) + 'px'});
		    $(".navbars").css({"height": (height*0.12) + 'px'});
	    	$('.jumbotron img').css("max-width", "300px");
	    	$('.navbar-nav p').show();
	    	$('.scroll-up').css("left", "90%");
	    }
	    else{
		    $(".jumbotron").css({"height": (height*0.89) + 'px'});
		    $(".navbars").css({"height": (height*0.11) + 'px'});
		    $('.jumbotron img').css("max-width", "200px");
		    $('.navbar-nav p').hide();
	    	$('.scroll-up').css("left", "80%");
	    }
	}
	
	$(document).ready(adjustHeight);
	$(window).resize(adjustHeight);	  */
<!--

	
	var adjustWidth = function() {
		var width = $(window).width();
	    if(width < 560){
	    	$(".navbar-nav").addClass("nav-small");
	    	$('.navbar-nav p').hide();
	    	$('.scroll-up').css("left", "80%");
	    }
	    else if(width > 560){
	    	$(".navbar-nav").removeClass("nav-small");
	    	$('.scroll-up').css("left", "90%");
	    }
	}

	$(".navbar-nav").ready(adjustWidth);
	$(window).resize(adjustWidth);	  
	-->
	
	//scroll up button
	$(document).ready(function(){
		$('.scroll-up').click(() => {
			var width = $(window).width();
		    if(width < 560){
		    	$('.scroll-up').css("left", "80%");
		    	$('html, body').animate({scrollTop: $('.jumbotron').offset().top -100}, 500);
		    }
		    else if(width > 560){		    	
		    	$('.scroll-up').css("left", "90%");
		    	$('html, body').animate({scrollTop: $('.jumbotron').offset().top -100}, 500);		    	
		    }		    
		});
	});
	
	$(document).scroll(function() {
		var currentScroll = $(this).scrollTop();
		if (currentScroll > 700) {
		  $('.scroll-up').fadeIn();
		} else {
		  $('.scroll-up').fadeOut();
		}
	});
	
/* 	$.fn.isInViewport = function() {
	  var elementTop = $(this).offset().top;
	  var elementBottom = elementTop + $(this).height() - 200;

	  var viewportTop = $(window).scrollTop();
	  var viewportBottom = viewportTop + $(window).height() +200;

	  return elementBottom > viewportTop && elementTop < viewportBottom;
	};
	
	$(window).on('resize scroll', function() {
	  $('.info-section').each(function() {
	    var activeNav = $(this).attr('id');
	    if ($(this).isInViewport()) {
	    	$('#nav-' + activeNav).addClass("nav-active");
	    } 
	    else {
	    	$('#nav-' + activeNav).removeClass("nav-active");
	    }
	  });
	}); */
	
	//change navbar based on current section
    $(window).bind("load resize scroll", function (e) {
		var width = $(window).width();
		var currentScroll = $(this).scrollTop();
		console.log(currentScroll);
	    if (width < 768) {
	    	var a = 0.5;
	    	var b = 1.6;
	    	var c = 2.6;
	    	var d = 3.6;
	    }
	    else if (width > 768) {
	    	var a = 0.3;
	    	var b = 1.5;
	    	var c = 2.25;
	    	var d = 3.25;
	    }
		if (currentScroll < (test()*a)) {
			console.log("top");
			$('.nav-item').removeClass("nav-active");
            $('.skillbar .skillbar-bar').css({ "width": "0%", "transition": ".1s linear" });
            $('.sidesbar').css({ "margin-left": "100" });
		} 
		else if (currentScroll > (test()*a) && currentScroll < (test()*b)) {
            console.log("ed");
            parallaxScroll1();
            $('.education-panel').css({"animation": "pulse2 3s infinite"});
			$('.sidebar a').eq(0).addClass("sidebar-active");
			$('.sidebar a:not(:nth-child(1))').removeClass("sidebar-active");
			$('.nav-item').eq(0).addClass("nav-active");
			$('.nav-item:not(:nth-child(1))').removeClass("nav-active");			
			$('.skillbar .skillbar-bar').css({"width":"0%", "transition":".1s linear"});
		} 
		else if (currentScroll > (test()*b) && currentScroll < (test()*c)) {
            console.log("work");
            parallaxScroll2();
			$('.sidebar a').eq(1).addClass("sidebar-active");
			$('.sidebar a:not(:nth-child(2))').removeClass("sidebar-active");
			$('.nav-item').eq(1).addClass("nav-active");
			$('.nav-item:not(:nth-child(2))').removeClass("nav-active");
			$('.skillbar .skillbar-bar').css({"width":"0%", "transition":".1s linear"});
		}
		else if (currentScroll > (test()*c) && currentScroll < (test()*d)) {
            console.log("sk");
            parallaxScroll3();		
			$('.sidebar a').eq(2).addClass("sidebar-active");
			$('.sidebar a:not(:nth-child(3))').removeClass("sidebar-active");
			$('.nav-item').eq(2).addClass("nav-active");
			$('.nav-item:not(:nth-child(3))').removeClass("nav-active");
			$('.skillbar .skillbar-bar').css({"width":"80%", "transition":"1s ease-in"});
		}
		else if (currentScroll > (test()*d)) {
            console.log("port");
            parallaxScroll4();		
			$('.sidebar a').eq(3).addClass("sidebar-active");
			$('.sidebar a:not(:nth-child(4))').removeClass("sidebar-active");
			$('.nav-item').eq(3).addClass("nav-active");
			$('.nav-item:not(:nth-child(4))').removeClass("nav-active");
			$('.skillbar .skillbar-bar').css({"width":"0%", "transition":".1s linear"});
		}
    });

//change navbar based on current section
$(document).scroll(function () {
    var width = $(window).width();
    var currentScroll = $(this).scrollTop();
    console.log(currentScroll);
    if (width < 768) {
        var a = 0.5;
        var b = 1.6;
        var c = 2.6;
        var d = 3.6;
    }
    else if (width > 768) {
        var a = 0.5;
        var b = 1.6;
        var c = 2.6;
        var d = 3.6;
    }
    if (currentScroll > (test() * 0.5)) {
        console.log("ed-sec");
        $('.education-panel-child:nth-child(1)').addClass("edu-section-active");
        $(".edu-divider").eq(0).delay(500).queue(function() {
            $(this).css({ "right": "0%", "transition": ".5s ease" }).dequeue();
        }).fadeIn();
    }
    if (currentScroll > (test() * 0.6)) {
        console.log("ed-sec");
        $('.education-panel-child:nth-child(2)').addClass("edu-section-active");
        $(".edu-divider").eq(1).delay(1000).queue(function() {
            $(this).css({ "right": "0%", "transition": ".5s ease" }).dequeue();
        });
    }
    if (currentScroll > (test() * 0.7)) {
        console.log("ed-sec");
        $('.education-panel-child:nth-child(3)').addClass("edu-section-active");
    }
});


    /*
    else if (currentScroll > (test() * a) && currentScroll < (test() * b)) {
        console.log("ed");
        parallaxScroll1();
        $('.info-section h1').eq(0).addClass("entry-right");
        $('.sidebar a').eq(0).addClass("sidebar-active");
        $('.sidebar a:not(:nth-child(1))').removeClass("sidebar-active");
        $('.nav-item').eq(0).addClass("nav-active");
        $('.nav-item:not(:nth-child(1))').removeClass("nav-active");
        $('.skillbar .skillbar-bar').css({ "width": "0%", "transition": ".1s linear" });
    }
    else if (currentScroll > (test() * b) && currentScroll < (test() * c)) {
        console.log("work");
        parallaxScroll2();
        $('.info-section h1').eq(1).addClass("entry-right");
        $('.sidebar a').eq(1).addClass("sidebar-active");
        $('.sidebar a:not(:nth-child(2))').removeClass("sidebar-active");
        $('.nav-item').eq(1).addClass("nav-active");
        $('.nav-item:not(:nth-child(2))').removeClass("nav-active");
        $('.skillbar .skillbar-bar').css({ "width": "0%", "transition": ".1s linear" });
    }
    else if (currentScroll > (test() * c) && currentScroll < (test() * d)) {
        console.log("sk");
        parallaxScroll3();
        $('.info-section h1').eq(2).addClass("entry-right");
        $('.sidebar a').eq(2).addClass("sidebar-active");
        $('.sidebar a:not(:nth-child(3))').removeClass("sidebar-active");
        $('.nav-item').eq(2).addClass("nav-active");
        $('.nav-item:not(:nth-child(3))').removeClass("nav-active");
        $('.skillbar .skillbar-bar').css({ "width": "80%", "transition": "1s ease-in" });
    }
    else if (currentScroll > (test() * d)) {
        console.log("port");
        parallaxScroll4();
        $('.info-section h1').eq(3).addClass("entry-right");
        $('.sidebar a').eq(3).addClass("sidebar-active");
        $('.sidebar a:not(:nth-child(4))').removeClass("sidebar-active");
        $('.nav-item').eq(3).addClass("nav-active");
        $('.nav-item:not(:nth-child(4))').removeClass("nav-active");
        $('.skillbar .skillbar-bar').css({ "width": "0%", "transition": ".1s linear" });
    }*/



	// main menu click	
	$(document).ready(function(){
		$('.nav-item').eq(0).click(() => {
			var width = $(window).width();
		    if(width < 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(0).offset().top -75}, 500);
		    }
		    else if(width > 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(0).offset().top -0}, 500);
		    }		    
		});
	});
	
	

	$(document).ready(function(){
		$('.nav-item').eq(1).click(() => {
			var width = $(window).width();
		    if(width < 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(1).offset().top -75}, 500);
		    }
		    else if(width > 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(1).offset().top -0}, 500);
		    }		    
		});
	});
	
	$(document).ready(function(){
		$('.nav-item').eq(2).click(() => {
			var width = $(window).width();
		    if(width < 560){
		    	$('html, body').animate({
			        scrollTop: $('.info-section').eq(2).offset().top -75
			    }, 500, function(){
			    	jQuery('.skillbar').each(function(){
			    		jQuery(this).removeAttr('data-final');
						jQuery(this).find('.skillbar-bar').animate({
							width:jQuery(this).attr('data-percent')
						},1000);
					});
			    });
		    }
		    if(width > 560){
		    	$('html, body').animate({
			        scrollTop: $('.info-section').eq(2).offset().top -0
			    }, 500);
		    	$('.skillbar .skillbar-bar').css({"width":"80%", "transition":"1s ease-in"});
		    }
		});
	});
	
	$(document).ready(function(){
		$('.nav-item').eq(3).click(() => {
			var width = $(window).width();
		    if(width < 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(3).offset().top -75}, 500);
		    }
		    else if(width > 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(3).offset().top -0}, 500);
		    }		
		});
	});
	
	$(document).ready(function(){
		$('.sidebar li').eq(0).click(() => {
			var width = $(window).width();
		    if(width < 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(0).offset().top -75}, 500);
		    }
		    else if(width > 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(0).offset().top -100}, 500);
		    }		    
		});
	});
	
	$(document).ready(function(){
		$('.sidebar li').eq(1).click(() => {
			var width = $(window).width();
		    if(width < 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(1).offset().top -75}, 500);
		    }
		    else if(width > 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(1).offset().top -100}, 500);
		    }		    
		});
	});
	
	$(document).ready(function(){
		$('.sidebar li').eq(2).click(() => {
			var width = $(window).width();
		    if(width < 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(2).offset().top -75}, 500);
		    }
		    else if(width > 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(2).offset().top -100}, 500);
		    }		    
		});
	});
	
	$(document).ready(function(){
		$('.sidebar li').eq(3).click(() => {
			var width = $(window).width();
		    if(width < 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(3).offset().top -75}, 500);
		    }
		    else if(width > 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(3).offset().top -100}, 500);
		    }		    
		});
    });

function parallaxScroll1() {
	
	//when 75% of first section is scrolled
    var scrolled = $(window).scrollTop() + test()*.4;
    console.log("1:"+scrolled);
    $('.info-section h1').eq(0).css({ "margin-top": (0 - (scrolled * .5)) + 'px',  "opacity": "1" });
}
function parallaxScroll2() {
    var scrolled = $(window).scrollTop() - test()*.6;
    console.log("2:"+scrolled);
    $('.info-section h1').eq(0).css({ "opacity": "0" });
    $('.info-section h1').eq(1).css({ "margin-top": (0 - (scrolled * .5)) + 'px',  "opacity": "1" });
}

function parallaxScroll3() {
    var scrolled = $(window).scrollTop() - test() * 2.3;
    console.log(scrolled);
    $('.info-section h1').eq(1).css({ "opacity": "0" });
    $('.info-section h1').eq(2).css({ "margin-top": (0 - (scrolled * .5)) + 'px',  "opacity": "1" });
}

function parallaxScroll4() {
    var scrolled = $(window).scrollTop() - test() * 3.25;
    console.log(scrolled);
    $('.info-section h1').eq(2).css({ "opacity": "0" });
    $('.info-section h1').eq(3).css({ "margin-top": (0 - (scrolled * .5)) + 'px',  "opacity": "1" });
}
/*
queue(function () {
    return $(".year h3").animate({ "left": "15px", "opacity": "1" }, "fast");
}, function () {
        return $(".year h3").animate({ "left": "15px", "opacity": "1" }, "fast");
}, function () {
        return $(".insti h4").animate({ "left": "15px", "opacity": "1" }, "fast");
}, function () {
        return $(".insti h5").animate({ "left": "15px", "opacity": "1" }, "fast");
}, function () {
        return $(".cgpa h5").animate({ "left": "15px", "opacity": "1"}, "fast");
});

function queue(start) {
    var rest = [].splice.call(arguments, 1),
        promise = $.Deferred();

    if (start) {
        $.when(start()).then(function () {
            queue.apply(window, rest);
        });
    } else {
        promise.resolve();
    }
    return promise;
}
*/
/*$(document).ready(function () {
    $('.fades').each(function (fadeInDiv) {
        $(this).delay(fadeInDiv * 1000).fadeIn(1000);
    });
});*/