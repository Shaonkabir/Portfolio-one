	
	$(document).ready(function() {

		// Homepage Slider Carousel Section

		$(".homepage-slides").owlCarousel({
			items:1,
			dots:true,
			nav:false,
			autoplay:false,
			loop:true
		});


		// About Section Carousel 

		$(".about-section-slider").owlCarousel({
			items:1,
			dots:true,
			nav:true,
			autoplay:false,
			loop:true
		});


		// Our Team Member Carousel Section

		$(".team-member-carousel").owlCarousel({
			items:3,
			dots:false,
			nav:true,
			autoplay:false,
			margin:20,
			loop:true
		});

		// Animated Skills Bar 

		$(".skillbar").skillbar({
			bg:'var(--primary)'
		});


		// Initialize material-scrolltop

		 $('body').materialScrollTop();


	});


	

    $(window).scroll(function() {

    	// Animated Progress Bar on Skills Section

        var hT = $('#skill-bar-wrapper').offset().top,
            hH = $('#skill-bar-wrapper').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-1.4*wH)){
            jQuery(document).ready(function(){
                jQuery('.skillbar-container').each(function(){
                    jQuery(this).find('.skills').animate({
                        width:jQuery(this).attr('data-percent')
                    }, 5000); // 5 seconds
                });
            });
        }

		// Color changeing script for header on scrolling

        var scroll = $(window).scrollTop();
          if (scroll > 415) {
            $(".header-class").css("background" , "#2cc990");
          }

          else{
              $(".header-class").css("background" , "transparent");  	
          }

     });





// Animated Projects Statistics

	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


		$('#number1').jQuerySimpleCounter({end: 863,duration: 3000});
		$('#number2').jQuerySimpleCounter({end: 921,duration: 3000});
		$('#number3').jQuerySimpleCounter({end: 572,duration: 2000});
		$('#number4').jQuerySimpleCounter({end: 159,duration: 2500});

