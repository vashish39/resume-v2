
$(document).ready(function(){
	$('.entry-blocks h1').css({"animation": "fade-inout 3s ease forwards .5s"});
	$('.entry-blocks h1').delay(3500).hide(0);
    $('.block-1').css({"left":"200%", "transition":"3s ease", "transition-delay": "2.5s"});
    $('.block-2').css({"right":"200%", "transition":"2.6s ease", "transition-delay": "2.45s"});
    $('.block-3').css({"left":"200%", "transition":"2.8s ease", "transition-delay": "2.6s"});
    $('.block-4').css({"right":"200%", "transition":"3s ease", "transition-delay": "2.35s"});
//    $('.info').hide(0).delay(3500).show(0);
    $('.info').show(0);
});

$(document).ready(function(){
  $('html').mousemove(function(e){
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var width = $(window).width();
        
//        $('.education-panel').css({'right': x*.01,'top': -y*.01});
        $('.jumbotron').css('background-position', -x*.05 + 'px ' + -y*.05 + 'px' );
        $('.subtitle').css({'margin-right': x});
        if(width > 768){
        	$('#bubbles div').css({'margin-right': x*.005,'margin-top': -y*.005+2+"vh"});
        	$('.title').css({'margin-right': x*.005,'margin-top': -y*.005+25+"vh"});
	    }
	    else if(width < 768){
	    	 $('.title').css({'margin-right': x*.005,'margin-top': "50px"});
	    }
  });
});

$(document).ready(function(){
	$(".info-panel").mouseenter(function(e){
		var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
		  $(this).css('background-position', -x*.05 + 'px ' + -y*.05 + 'px' );
		});
	});

	var getDocumentHeight = function() {
		return ($(document).height());
	}
	var getWindowHeight = function() {
		return ($(window).height());
	}
	var setSectionHeight = function() {
		var width = $(window).width();
	    if(width > 768){
	    	$(".jumbotron").css({"height": "100vh"});
	    	$(".title").css({"font-size": "8em"});
		    $(".info-section").css({"height": "100vh"});
	    }
	    else if(width < 768){
//	    	$(".jumbotron").css({"height": "150vh"});
	    	$(".title").css({"font-size": "5em"});
	    	$(".info-section").eq(0).css({"height": "150vh"});
	    	$(".info-section").eq(1).css({"height": "200vh"});
	    	$(".info-section").eq(2).css({"height": "100vh"});
	    	$(".info-section").eq(3).css({"height": "100vh"});
	    	$(".info-section h1").css({"font-size": "3em"});
	    	$(".education-panel, .experience-panel, .skills-panel, .portfolio-panel").css({"width":"90%", "margin": "0px auto"});
	    	
	    }
	}
	
	var getSectionHeight = function() {
		return (getDocumentHeight()/5);
	}
	
	$(document).ready(setSectionHeight);
	$(window).resize(setSectionHeight);
	
	$(document).ready(getSectionHeight);
	$(window).resize(getSectionHeight);

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

	
//	var adjustWidth = function() {
//		var width = $(window).width();
//	    if(width < 560){
//	    	$(".navbar-nav").addClass("nav-small");
//	    	$('.navbar-nav p').hide();
//	    	$('.scroll-up').css("left", "80%");
//	    }
//	    else if(width > 560){
//	    	$(".navbar-nav").removeClass("nav-small");
//	    	$('.scroll-up').css("left", "90%");
//	    }
//	}


	
	//scroll up button
	$(document).ready(function(){
		$('.scroll-up').click(() => {
			var width = $(window).width();
		    if(width < 560){
		    	$('.scroll-up').css("left", "85%");
		    	$('html, body').animate({scrollTop: $('.jumbotron').offset().top -0}, 500);
		    }
		    else if(width > 560){		    	
		    	$('.scroll-up').css("left", "94%");
		    	$('html, body').animate({scrollTop: $('.jumbotron').offset().top -0}, 500);		    	
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
	
	
	//change sidebar based on current section
    $(window).bind("load resize scroll", function (e) {
		var width = $(window).width();
		var currentScroll = $(this).scrollTop();
		console.log(currentScroll);
	    if (width < 768) {
	    	var a = 0.5;
	    	var b = 1.6;
	    	var c = 2.6;
	    	var d = 3.6;
	    	var peekin = 45;
	    	var peekout = 30;
	    }
	    else if (width > 768) {
	    	var a = 0.3;
	    	var b = 1.5;
	    	var c = 2.25;
	    	var d = 3.25;
	    	var peekin = 80;
	    	var peekout = 60;
	    }
		if (currentScroll < (getSectionHeight()*.5)) {
			$('.sidebar').css({"left": "-50px"});			
		}

		if (currentScroll > (getSectionHeight()*.5)) {
			$('.sidebar').css({"left": "0px", "transition": ".5s"});
			$('.sidebar a').each(function(i) {
				  $(this).css('animation', "fade-in-right .7s ease forwards");
				  $(this).css('animation-delay', .2*i+"s");
			});
		} 
		if (currentScroll > (getSectionHeight()*a) && currentScroll < (getSectionHeight()*b)) {
			$('.sidebar a').eq(0).css({"width": peekin+"px"});
            $('.sidebar a:not(:nth-child(1))').css({"width": peekout+"px"});
        } 
		if (currentScroll > (getSectionHeight()*b) && currentScroll < (getSectionHeight()*c)) {
			$('.sidebar a').eq(1).css({"width": peekin+"px"});
			$('.sidebar a:not(:nth-child(2))').css({"width": peekout+"px"});
		}
		if (currentScroll > (getSectionHeight()*c) && currentScroll < (getSectionHeight()*d)) {
			$('.sidebar a').eq(2).css({"width": peekin+"px"});
			$('.sidebar a:not(:nth-child(3))').css({"width": peekout+"px"});
		}
		if (currentScroll > (getSectionHeight()*d)) {
			$('.sidebar a').eq(3).css({"width": peekin+"px"});
			$('.sidebar a:not(:nth-child(4))').css({"width": peekout+"px"});
		}
    });
    
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
		if (currentScroll < (getSectionHeight()*a)) {
			console.log("top");
			$('.nav-item').removeClass("nav-active");
            $('.skillbar .skillbar-bar').css({ "width": "0%", "transition": ".1s linear" });
		} 
		else if (currentScroll > (getSectionHeight()*a) && currentScroll < (getSectionHeight()*b)) {
            console.log("ed");
            $('.info-header').eq(0).css({"animation": "fade-in-up .5s ease forwards"});
            $('.section-icon').eq(0).css({"animation": "fade-in-down .4s ease forwards"});           
            $('.header-line').eq(0).css({"width": "10%", "transition":".7s ease .3s"});
            $('.education-panel').css({"animation": "fade-in-up .5s ease-out .15s forwards"});
			$('.sidebar a').eq(0).addClass("sidebar-active");
			$('.sidebar a:not(:nth-child(1))').removeClass("sidebar-active");
			$('.nav-item').eq(0).addClass("nav-active");
			$('.nav-item:not(:nth-child(1))').removeClass("nav-active");			
			$('.skillbar .skillbar-bar').css({"width":"0%", "transition":".1s linear"});
		} 
		else if (currentScroll > (getSectionHeight()*b) && currentScroll < (getSectionHeight()*c)) {
            $('.info-header').eq(1).css({"animation": "fade-in-up .5s forwards ease"});
            $('.section-icon').eq(1).css({"animation": "fade-in-down .4s forwards ease"});           
            $('.header-line').eq(1).css({"width": "10%", "transition":".7s ease .3s"});
            $('.experience-panel').css({"animation": "fade-in-up .5s ease-out .15s forwards"});
			$('.sidebar a').eq(1).addClass("sidebar-active");
			$('.sidebar a:not(:nth-child(2))').removeClass("sidebar-active");			
			$('.nav-item').eq(1).addClass("nav-active");
			$('.nav-item:not(:nth-child(2))').removeClass("nav-active");
//			$('.skillbar .skillbar-bar').css({"width":"0%","box-shadow": "none", "transition":".1s linear"});
		}
		else if (currentScroll > (getSectionHeight()*c) && currentScroll < (getSectionHeight()*d)) {
            $('.info-header').eq(2).css({"animation": "fade-in-up .5s forwards ease"});
            $('.section-icon').eq(2).css({"animation": "fade-in-down .4s forwards ease"});           
            $('.header-line').eq(2).css({"width": "10%", "transition":".7s ease .3s"});
            $('.skills-panel').css({"animation": "fade-in-up .5s ease-out .15s forwards"});
			$('.sidebar a').eq(2).addClass("sidebar-active");
			$('.sidebar a:not(:nth-child(3))').removeClass("sidebar-active");
			$('.nav-item').eq(2).addClass("nav-active");
			$('.nav-item:not(:nth-child(3))').removeClass("nav-active");
			$('.skillbar-title').each(function(i) {
				  $(this).css('animation', "fade-in-right .5s ease forwards");
				  $(this).css('animation-delay', .2*i+"s");
			});
			$('.skillbar .skillbar-bar').eq(0).css({"width":"100%", "box-shadow": "0 0 2px 2px #F2B103", "transition":".5s ease-in .2s"});
			$('.skillbar .skillbar-bar').eq(1).css({"width":"100%", "box-shadow": "0 0 2px 2px #F2B103", "transition":".5s ease-in .4s"});
			$('.skillbar .skillbar-bar').eq(2).css({"width":"70%", "box-shadow": "0 0 2px 2px #F2B103", "transition":".5s ease-in .6s"});
			$('.skillbar .skillbar-bar').eq(3).css({"width":"75%", "box-shadow": "0 0 2px 2px #F2B103", "transition":".5s ease-in .8s"});
			$('.skillbar .skillbar-bar').eq(4).css({"width":"80%", "box-shadow": "0 0 2px 2px #F2B103", "transition":".5s ease-in 1s"});
			$('.skillbar .skillbar-bar').eq(5).css({"width":"100%", "box-shadow": "0 0 2px 2px #F2B103", "transition":".5s ease-in 1.2s"});
			$('.skillbar .skillbar-bar').eq(6).css({"width":"80%", "box-shadow": "0 0 2px 2px #F2B103", "transition":".5s ease-in 1.4s"});
		}
		else if (currentScroll > (getSectionHeight()*d)) {
            $('.info-header').eq(3).css({"animation": "fade-in-up .5s forwards ease"});
            $('.section-icon').eq(3).css({"animation": "fade-in-down .4s forwards ease"});           
            $('.header-line').eq(3).css({"width": "10%", "transition":".7s ease .3s"});
            $('.portfolio-panel').css({"animation": "fade-in-up .5s ease-out .15s forwards"});
			$('.sidebar a').eq(3).addClass("sidebar-active");
			$('.sidebar a:not(:nth-child(4))').removeClass("sidebar-active");
			$('.nav-item').eq(3).addClass("nav-active");
			$('.nav-item:not(:nth-child(4))').removeClass("nav-active");
//			$('.skillbar .skillbar-bar').css({"width":"0%", "transition":".1s linear"});
		}
    });

//Animate information elements
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
    if (currentScroll > (getSectionHeight() * 0.6)) {
        $('.education-panel-child:nth-child(1)').addClass("section-active");
    }
    
    if (currentScroll > (getSectionHeight() * 0.7)) {
        $('.education-panel-child:nth-child(2)').addClass("section-active");
    }
    if (currentScroll > (getSectionHeight() * 0.8)) {
        $('.education-panel-child:nth-child(3)').addClass("section-active");
    }
    if (currentScroll > (getSectionHeight() * 1.7)) {
        console.log("ed-sec");
        $('.experience-panel-child:nth-child(1)').addClass("section-active");
    }
    if (currentScroll > (getSectionHeight() * 1.8)) {
        console.log("ed-sec");
        $('.experience-panel-child:nth-child(2)').addClass("section-active");
    }
    if (currentScroll > (getSectionHeight() * 1.9)) {
        console.log("ed-sec");
        $('.experience-panel-child:nth-child(3)').addClass("section-active");
    }
});


    /*
    else if (currentScroll > (getSectionHeight() * a) && currentScroll < (getSectionHeight() * b)) {
        console.log("ed");
        parallaxScroll1();
        $('.info-section h1').eq(0).addClass("entry-right");
        $('.sidebar a').eq(0).addClass("sidebar-active");
        $('.sidebar a:not(:nth-child(1))').removeClass("sidebar-active");
        $('.nav-item').eq(0).addClass("nav-active");
        $('.nav-item:not(:nth-child(1))').removeClass("nav-active");
        $('.skillbar .skillbar-bar').css({ "width": "0%", "transition": ".1s linear" });
    }
    else if (currentScroll > (getSectionHeight() * b) && currentScroll < (getSectionHeight() * c)) {
        console.log("work");
        parallaxScroll2();
        $('.info-section h1').eq(1).addClass("entry-right");
        $('.sidebar a').eq(1).addClass("sidebar-active");
        $('.sidebar a:not(:nth-child(2))').removeClass("sidebar-active");
        $('.nav-item').eq(1).addClass("nav-active");
        $('.nav-item:not(:nth-child(2))').removeClass("nav-active");
        $('.skillbar .skillbar-bar').css({ "width": "0%", "transition": ".1s linear" });
    }
    else if (currentScroll > (getSectionHeight() * c) && currentScroll < (getSectionHeight() * d)) {
        console.log("sk");
        parallaxScroll3();
        $('.info-section h1').eq(2).addClass("entry-right");
        $('.sidebar a').eq(2).addClass("sidebar-active");
        $('.sidebar a:not(:nth-child(3))').removeClass("sidebar-active");
        $('.nav-item').eq(2).addClass("nav-active");
        $('.nav-item:not(:nth-child(3))').removeClass("nav-active");
        $('.skillbar .skillbar-bar').css({ "width": "80%", "transition": "1s ease-in" });
    }
    else if (currentScroll > (getSectionHeight() * d)) {
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
		$('.sidebar a').eq(0).click(() => {
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
		$('.sidebar a').eq(1).click(() => {
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
		$('.sidebar a').eq(2).click(() => {
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
		$('.sidebar a').eq(3).click(() => {
			var width = $(window).width();
		    if(width < 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(3).offset().top -75}, 500);
		    }
		    else if(width > 560){
		    	$('html, body').animate({scrollTop: $('.info-section').eq(3).offset().top -100}, 500);
		    }		    
		});
    });

//function parallaxScroll1() {
//	var scrolled = $(window).scrollTop() + getSectionHeight()*.4;
//    console.log("1:"+scrolled);
//    $('.info-section h1').eq(0).css({ "margin-top": (0 - (scrolled * .5)) + 'px',  "opacity": "1" });
//}
//function parallaxScroll2() {
//    var scrolled = $(window).scrollTop() - getSectionHeight()*.6;
//    console.log("2:"+scrolled);
//    $('.info-section h1').eq(0).css({ "opacity": "0" });
//    $('.info-section h1').eq(1).css({ "margin-top": (0 - (scrolled * .5)) + 'px',  "opacity": "1" });
//}
//
//function parallaxScroll3() {
//    var scrolled = $(window).scrollTop() - getSectionHeight() * 1.6;
//    console.log(scrolled);
//    $('.info-section h1').eq(1).css({ "opacity": "0" });
//    $('.info-section h1').eq(2).css({ "margin-top": (0 - (scrolled * .5)) + 'px',  "opacity": "1" });
//}
//
//function parallaxScroll4() {
//    var scrolled = $(window).scrollTop() - getSectionHeight() * 3.25;
//    console.log(scrolled);
//    $('.info-section h1').eq(2).css({ "opacity": "0" });
//    $('.info-section h1').eq(3).css({ "margin-top": (0 - (scrolled * .5)) + 'px',  "opacity": "1" });
//}



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

	
