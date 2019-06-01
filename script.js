
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
		    $(".info-section:not(:nth-child(2)").css({"height": "100vh"});
		    $(".info-section:nth-child(2)").css({"height": "125vh"});
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
	$(document).scroll(function() {
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
		if (currentScroll < (test()*a)) {
			console.log("top");
			$('.nav-item').removeClass("nav-active");
            $('.skillbar .skillbar-bar').css({ "width": "0%", "transition": ".1s linear" });
            $('.sidesbar').css({ "margin-left": "100" });
		} 
		else if (currentScroll > (test()*a) && currentScroll < (test()*b)) {
            console.log("ed");
            parallaxScroll1();
			$('.info-section h1').eq(0).addClass("entry-right");			
			$('.sidebar a').eq(0).addClass("sidebar-active");
			$('.sidebar a:not(:nth-child(1))').removeClass("sidebar-active");
			$('.nav-item').eq(0).addClass("nav-active");
			$('.nav-item:not(:nth-child(1))').removeClass("nav-active");
			
			$('.skillbar .skillbar-bar').css({"width":"0%", "transition":".1s linear"});
		} 
		else if (currentScroll > (test()*b) && currentScroll < (test()*c)) {
            console.log("work");
            parallaxScroll2();
			$('.info-section h1').eq(1).addClass("entry-right");
			$('.sidebar a').eq(1).addClass("sidebar-active");
			$('.sidebar a:not(:nth-child(2))').removeClass("sidebar-active");
			$('.nav-item').eq(1).addClass("nav-active");
			$('.nav-item:not(:nth-child(2))').removeClass("nav-active");
			$('.skillbar .skillbar-bar').css({"width":"0%", "transition":".1s linear"});
		}
		else if (currentScroll > (test()*c) && currentScroll < (test()*d)) {
            console.log("sk");
            parallaxScroll3();
			$('.info-section h1').eq(2).addClass("entry-right");			
			$('.sidebar a').eq(2).addClass("sidebar-active");
			$('.sidebar a:not(:nth-child(3))').removeClass("sidebar-active");
			$('.nav-item').eq(2).addClass("nav-active");
			$('.nav-item:not(:nth-child(3))').removeClass("nav-active");
			$('.skillbar .skillbar-bar').css({"width":"80%", "transition":"1s ease-in"});
		}
		else if (currentScroll > (test()*d)) {
            console.log("port");
            parallaxScroll4();
			$('.info-section h1').eq(3).addClass("entry-right");			
			$('.sidebar a').eq(3).addClass("sidebar-active");
			$('.sidebar a:not(:nth-child(4))').removeClass("sidebar-active");
			$('.nav-item').eq(3).addClass("nav-active");
			$('.nav-item:not(:nth-child(4))').removeClass("nav-active");
			$('.skillbar .skillbar-bar').css({"width":"0%", "transition":".1s linear"});
		}
	});
	
	// main menu click
	
	$(document).ready(function(){
		$('.nav-item').eq(0).click(() => {
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
		$('.nav-item').eq(1).click(() => {
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
			        scrollTop: $('.info-section').eq(2).offset().top -100
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
		    	$('html, body').animate({scrollTop: $('.info-section').eq(3).offset().top -100}, 500);
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

$(window).bind('scroll', function (e) {
    parallaxScroll();
});

function parallaxScroll1() {
    var scrolled = $(window).scrollTop() - test();
    console.log(scrolled);
    $('.info-section h1').eq(0).css({ "top": (0 - (scrolled * 1)) + 'px',  "opacity": "1" });
}
function parallaxScroll2() {
    var scrolled = $(window).scrollTop() - test()*2;
    console.log(scrolled);
    $('.info-section h1').eq(1).css({ "top": (0 - (scrolled * 1)) + 'px',  "opacity": "1" });
}

function parallaxScroll3() {
    var scrolled = $(window).scrollTop() - test() * 3;
    console.log(scrolled);
    $('.info-section h1').eq(2).css({ "top": (0 - (scrolled * 1)) + 'px',  "opacity": "1" });
}

function parallaxScroll4() {
    var scrolled = $(window).scrollTop() - test() * 4;;
    console.log(scrolled);
    $('.info-section h1').eq(3).css({ "top": (0 - (scrolled * 1)) + 'px',  "opacity": "1" });
}