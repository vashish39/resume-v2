var getDocumentHeight = function() {
	return ($(document).height());
}
var getWindowHeight = function() {
	return ($(window).height());
}
var setSectionHeight = function() {
	var width = $(window).width();
	var bubbleWidth = $('#bubbles').width();
    if(width > 768){
    	$(".jumbotron").css({"height": "100vh"});
    	$(".title").css({"font-size": "8em"});
	    $(".info-section:not(:nth-child(4))").css({"height": "100vh"});
	    $('.scroll-up').css("left", "90%");
    }
    else if(width < 768 && width > 350){
    	$(".title").css({"font-size": "5em"});
    	$('.scroll-up').css("left", "80%");
    	$(".info-section").eq(0).css({"height": "150vh"});
    	$(".info-section").eq(1).css({"height": "200vh"});
    	$(".info-section").eq(2).css({"height": "100vh"});
    	$(".info-section h1").css({"font-size": "3em"});
    	$(".education-panel, .experience-panel, .skills-panel, .portfolio-panel").css({"width":"98%", "margin": "0px auto"});    	
    }
    else{
    	$('#bubbles div').css({"margin":  "0px 25px"});
    }
}
	
var getSectionHeight = function() {
	return (getDocumentHeight()/5);
}

// Jumbotron animations and background movement.
$(document).ready(function(){
	$('.entry-blocks h1').css({"animation": "fade-inout 3s ease forwards .5s"});
	$('.entry-blocks h1').delay(3500).hide(0);
//    $('.info').hide(0).delay(3500).show(0);
    $('.info').show(0);
    $('html').mousemove(function(e){
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var width = $(window).width();
        var currentScroll = $(this).scrollTop();
        if(currentScroll < 1000){
	        $('.jumbotron').css('background-position', -x*.05 + 'px ' + -y*.05 + 'px' );
	        $('.subtitle').css({'margin-right': x});
	        if(width > 768){
	        	$('#bubbles div').css({'margin-right': x*.01,'margin-top': -y*.003+2+"vh"});
	        	$('.title').css({'margin-right': x*.005,'margin-top': -y*.005+25+"vh"});
		    }
		    else if(width < 768){
		    	 $('.title').css({'margin-right': x*.005,'margin-top': "50px"});
		    }
        }
  	});
});

//scroll up button
$(document).ready(function(){
	$('.scroll-up').click(function() {
		var width = $(window).width();
	    if(width < 560){		    	
	    	$('html, body').animate({scrollTop: $('.jumbotron').offset().top -0}, 500);
	    }
	    else if(width > 560){
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

//set sidebar position and animations
$(window).bind("load resize scroll", function (e) {
	var width = $(window).width();
	var currentScroll = $(this).scrollTop();
	console.log(currentScroll);
    if (width < 768) {
    	var a = 0.5;
    	var b = 1.4;
    	var c = 2.5;
    	var d = 3.5;
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

// Set scroll for main menu, set animations for skills section based on scroll position
$(window).bind("load resize scroll", function (e) {
	var width = $(window).width();
	var currentScroll = $(this).scrollTop();
	console.log(currentScroll);
    if (width < 768) {
    	var a = 0.3;
    	var b = 1.3;
    	var c = 2.5;
    	var d = 3.3;
    }
    else if (width > 768) {
    	var a = 0.3;
    	var b = 1.5;
    	var c = 2.6;
    	var d = 3.5;
    }
	if (currentScroll < (getSectionHeight()*a)) {
		$('.nav-item').removeClass("nav-active");
        $('.skillbar .skillbar-bar').css({ "width": "0%", "transition": ".1s linear" });
	} 
	else if (currentScroll > (getSectionHeight()*a) && currentScroll < (getSectionHeight()*b)) {
        $('.info-header').eq(0).css({"animation": "fade-in-up .5s ease forwards"});
        $('.header-line').eq(0).css({"width": "10%", "transition":".7s ease .3s"});
        $('.education-panel').css({"animation": "fade-in-up .5s ease-out .2s forwards"});
		$('.nav-item').eq(0).addClass("nav-active");
		$('.nav-item:not(:nth-child(1))').removeClass("nav-active");			
		$('.skillbar .skillbar-bar').css({"width":"0%", "transition":".1s linear"});
	} 
	else if (currentScroll > (getSectionHeight()*b) && currentScroll < (getSectionHeight()*c)) {
		console.log("f")
        $('.info-header').eq(1).css({"animation": "fade-in-up .5s forwards ease"});    
        $('.header-line').eq(1).css({"width": "10%", "transition":".7s ease .3s"});
        $('.experience-panel').css({"animation": "fade-in-up .5s ease-out .15s forwards"});
		$('.nav-item').eq(1).addClass("nav-active");
		$('.nav-item:not(:nth-child(2))').removeClass("nav-active");
//			$('.skillbar .skillbar-bar').css({"width":"0%","box-shadow": "none", "transition":".1s linear"});
	}
	else if (currentScroll > (getSectionHeight()*c) && currentScroll < (getSectionHeight()*d)) {
        $('.info-header').eq(2).css({"animation": "fade-in-up .5s forwards ease"});
        $('.header-line').eq(2).css({"width": "10%", "transition":".7s ease .3s"});
        $('.skills-panel').css({"animation": "fade-in-up .5s ease-out .15s forwards"});
		$('.nav-item').eq(2).addClass("nav-active");
		$('.nav-item:not(:nth-child(3))').removeClass("nav-active");
		$('.skillbar-title').each(function(i) {
			  $(this).css('animation', "fade-in-right .5s ease forwards");
			  $(this).css('animation-delay', .1*i+"s");
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
        $('.header-line').eq(3).css({"width": "10%", "transition":".7s ease .3s"});
        $('.portfolio-panel').css({"animation": "fade-in-up .5s ease-out .15s forwards"});
		$('.nav-item').eq(3).addClass("nav-active");
		$('.nav-item:not(:nth-child(4))').removeClass("nav-active");
		$('.portfolio-content li').each(function(i) {
			  $(this).css('animation', "fade-in-up .5s ease forwards");
			  $(this).css('animation-delay', .2*i+"s");
		});		
//		$('.skillbar .skillbar-bar').css({"width":"0%", "transition":".1s linear"});
	}
});

//Animate information elements
$(document).scroll(function () {
    var width = $(window).width();
    var currentScroll = $(this).scrollTop();
    console.log(currentScroll);
    console.log("s:"+getSectionHeight());
    if (width < 768) {
        if (currentScroll > (getSectionHeight() * 0.3)) {
            $('.education-panel-child:nth-child(1)').addClass("section-active");
        }    
        if (currentScroll > (getSectionHeight() * 0.5)) {
            $('.education-panel-child:nth-child(2)').addClass("section-active");
        }
        if (currentScroll > (getSectionHeight() * 0.6)) {
            $('.education-panel-child:nth-child(3)').addClass("section-active");
        }
        if (currentScroll > (getSectionHeight() * 1.3)) {
        	console.log("d");
            $('.experience-panel-child:nth-child(1)').addClass("section-active");
        }
        if (currentScroll > (getSectionHeight() * 1.45)) {
            $('.experience-panel-child:nth-child(2)').addClass("section-active");
        }
        if (currentScroll > (getSectionHeight() * 1.7)) {
            $('.experience-panel-child:nth-child(3)').addClass("section-active");
        }
    }
        
    
    if (width > 768) {
        if (currentScroll > (getSectionHeight() * 0.5)) {
            $('.education-panel-child:nth-child(1)').addClass("section-active");
        }    
        if (currentScroll > (getSectionHeight() * 0.6)) {
            $('.education-panel-child:nth-child(2)').addClass("section-active");
        }
        if (currentScroll > (getSectionHeight() * 0.7)) {
            $('.education-panel-child:nth-child(3)').addClass("section-active");
        }
        if (currentScroll > (getSectionHeight() * 1.55)) {
            $('.experience-panel-child:nth-child(1)').addClass("section-active");
        }
        if (currentScroll > (getSectionHeight() * 1.65)) {
            $('.experience-panel-child:nth-child(2)').addClass("section-active");
        }
        if (currentScroll > (getSectionHeight() * 1.75)) {
            $('.experience-panel-child:nth-child(3)').addClass("section-active");
        }
    }
});

// main menu click	
$(document).ready(function(){
	$('.nav-item').eq(0).click(function(){
		var width = $(window).width();
	    if(width < 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(0).offset().top -0}, 500);
	    }
	    else if(width > 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(0).offset().top -0}, 500);
	    }		    
	});
});

$(document).ready(function(){
	$('.nav-item').eq(1).click(function(){
		var width = $(window).width();
	    if(width < 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(1).offset().top -0}, 500);
	    }
	    else if(width > 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(1).offset().top -0}, 500);
	    }		    
	});
});

$(document).ready(function(){
	$('.nav-item').eq(2).click(function(){
		var width = $(window).width();
	    if(width < 560){
	    	$('html, body').animate({
		        scrollTop: $('.info-section').eq(2).offset().top -0
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
	$('.nav-item').eq(3).click(function(){
		var width = $(window).width();
	    if(width < 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(3).offset().top -0}, 500);
	    }
	    else if(width > 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(3).offset().top -0}, 500);
	    }		
	});
});

$(document).ready(function(){
	$('.sidebar a').eq(0).click(function(){
		var width = $(window).width();
	    if(width < 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(0).offset().top -0}, 500);
	    }
	    else if(width > 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(0).offset().top -0}, 500);
	    }		    
	});
});

$(document).ready(function(){
	$('.sidebar a').eq(1).click(function(){
		var width = $(window).width();
	    if(width < 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(1).offset().top -0}, 500);
	    }
	    else if(width > 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(1).offset().top -0}, 500);
	    }		    
	});
});

$(document).ready(function(){
	$('.sidebar a').eq(2).click(function(){
		var width = $(window).width();
	    if(width < 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(2).offset().top -0}, 500);
	    }
	    else if(width > 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(2).offset().top -0}, 500);
	    }		    
	});
});

$(document).ready(function(){
	$('.sidebar a').eq(3).click(function(){
		var width = $(window).width();
	    if(width < 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(3).offset().top -0}, 500);
	    }
	    else if(width > 560){
	    	$('html, body').animate({scrollTop: $('.info-section').eq(3).offset().top -0}, 500);
	    }		    
	});
});

var setImageWidth = function(){
	var bgWidth = $(".upper-row li").width();
	var imgWidth = $(".upper-row img").width();
	console.log("I"+imgWidth);

	$('.blur, .caption-text').css({ "width": imgWidth});

	$(".upper-row li").click(function(){
		console.log($(this).index());
		javascript:window.open('img/'+$(this).index()+'.jpg');
	});
	
	$(".lower-row li").click(function(){
		console.log($(this).index());
		javascript:window.open('img/'+$(this).index()+$(this).index()+'.jpg');
	});
	
	if(bgWidth > imgWidth){
		var margin = bgWidth - imgWidth;
		$('.portfolio-content .row img').css({ "margin-left": (margin/2)});
		$('.blur, .caption-text').css({ "margin-left": (margin/2)});
	}
}

function initialise() {
	setImageWidth();
	setSectionHeight();
	getSectionHeight();
	getDocumentHeight();
	getWindowHeight();
}

$(document).ready(setImageWidth());
$(window).scroll(initialise);
$(window).resize(initialise);