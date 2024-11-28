var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(document).ready(function(){
	//Mainslide
	$('.main_slide ul').bxSlider({
	  	mode: 'fade',
		auto:'true'
	});
	
	//About
	$('.menu_about li').first().addClass('active');
	$('.about_item').hide();
	var AboutShow = $('.menu_about li.active').attr('title');
	$('.' + AboutShow).show();
	$('.menu_about li').click(function(){
		$('.about_item').fadeOut();
		$('.menu_about li').removeClass('active');
		$(this).addClass('active');
		var AboutShow = $(this).attr('title');
		$('.' + AboutShow).stop(true, true).fadeIn();
		$('.about_item img').addClass('effect');
	});
	$('.about_item ul li').click(function(){
		if($(this).hasClass('active')){
			$('.about_item ul li img').removeClass('effect');
			$('.about_item ul li.active img').addClass('effect');
		}else{
			$('.about_item ul li').removeClass('active');
			$(this).addClass('active');	
			var HHH = $('.about_item ul li.active').attr('name');
			$('.about_item .show_detail').hide();
			$('.'+HHH).show();
			$('.about_item ul li img').removeClass('effect');
			$('.about_item ul li.active img').addClass('effect');
		}	
	});
	
	//New_user
	$('.box_newuser .block span').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).parent().find('> ul').slideUp(200);	
		}else{
			$('.box_newuser .block span').removeClass('active');
			$('.box_newuser .block ul').slideUp(200);
			$(this).addClass('active');
			$(this).parent().find('> ul').slideDown(500);	
		}	
	});

    //Trailer-----------------------
	$('.show_vdo').click(function (e) {
	    $('.muted_audio').removeClass('mute');
	    $('audio').prop('muted', true);

	    e.preventDefault();
	    var href_video = $(this).attr('href');
	    var href_video2 = $(this).attr('href').split('https://web.archive.org/v/');
	    var hrefIE = href_video2[0] + '/embed/' + href_video2[1];
	    if (isMobile.any() != null) {
	        window.location.href = "https://web.archive.org/web/20170607051455/https://www.youtube.com/watch?v=" + href_video2[1];
	    } else {
	        $('.show_trailer').empty();

	        var ms_ie = false;
	        var ua = window.navigator.userAgent;
	        var old_ie = ua.indexOf('MSIE ');
	        var new_ie = ua.indexOf('Trident/index.html');

	        if ((old_ie > -1) || (new_ie > -1)) {
	            ms_ie = true;
	        }

	        if (ms_ie) {
	            $(".show_trailer").append('<span class="close_videos">X</span>' +
                      '<iframe src="' + hrefIE + '" frameborder="0" allowfullscreen></iframe>').fadeIn(500);
	            $('.bg_shadow').fadeIn(500);
	        } else {
	            $(".show_trailer").append('<span class="close_videos">X</span>' +
                      '<iframe src="' + href_video + '" frameborder="0" allowfullscreen></iframe>').fadeIn(500);
	            $('.bg_shadow').fadeIn(500);
	        }

	        $('.show_trailer iframe').css({
	            'width': $(window).width() * 70 / 100,
	            'height': $(window).width() * 63 / 160,
	            'top': ($(window).height() / 2) - (($(window).width() * 63) / 320 - 15)
	        });

	        $('.close_videos,.bg_shadow').click(function () {
	            $('.show_trailer').fadeOut(200).empty();
	            $('.bg_shadow').fadeOut(200);
	        });
	    }

	});
});




}
/*
     FILE ARCHIVED ON 05:14:55 Jun 07, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:58:02 Nov 26, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 5.344
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.012
  esindex: 0.012
  cdx.remote: 14.687
  LoadShardBlock: 209.403 (3)
  PetaboxLoader3.datanode: 139.752 (4)
  PetaboxLoader3.resolve: 176.523 (2)
  load_resource: 152.629
*/