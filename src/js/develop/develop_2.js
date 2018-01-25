function slider_nav(selector){
	$(selector).slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  variableWidth: true,
	  focusOnSelect: true,
	  responsive: [
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    }
	  ]
	});
}

function slider_for(selector){
	$(selector).slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
}

function card_nav(selector){
	$(selector).slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.big-photos',
	  dots: false,
	  variableWidth: true,
	  centerMode: true,
	  focusOnSelect: true
	});
}

function card_for(selector){
	$(selector).slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.small-photos'
	});
}

function popup_nav(selector){
	$(selector).slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.big-popup',
	  dots: false,
	  variableWidth: true,
	  centerMode: true,
	  focusOnSelect: true
	});
}

function popup_for(selector){
	$(selector).slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  prevArrow: '.prev',
	  nextArrow: '.next',
	  fade: true,
	  asNavFor: '.small-popup'
	});
}

function reviews(selector){
	$(selector).slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	  fade: true,
	});
}

function wide_slider(selector){
	$(selector).slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  infinite: true,
	  arrows: true,
	  useCSS: true,
	  nextArrow: '.prev-wide',
	  prevArrow: '.next-wide',
	  dots: false,
	  speed: 800,
	  asNavFor: '.text-slider, .title-slider',
	});
}
function thin_slider(selector) {
	$(selector).slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  infinite: true,
	  dots: false,
	  speed: 800,
	  draggable: false,
	  asNavFor: '.wide-slider, .title-slider'
	});
}
function title_slider(selector) {
	$(selector).slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
	  speed: 800,
	  infinite: true,
	  vertical: true,
	  cssEase: 'linear',
	  arrows: false,
	  draggable: false,
	  asNavFor: '.wide-slider, .text-slider'
	});
}

function main_slider(selector) {
	$(selector).slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: false,
	  asNavFor: '.shadow-hidden-blocks',
	  responsive: [
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	    	breakpoint: 400,
	    	settings: {
	    		slidesToShow: 1,
	    		slidesToScroll: 1
	    	}
	    }
	  ]
	});
}
function part_slider(selector) {
	$(selector).slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: false,
	  asNavFor: '.main-slider',
	  responsive: [
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	    	breakpoint: 400,
	    	settings: {
	    		slidesToShow: 1,
	    		slidesToScroll: 1
	    	}
	    }
	  ]
	});
}
function cars_slider(selector) {
	$(selector).slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: true,
	  nextArrow: '.prev',
	  prevArrow: '.next',
	  responsive: [
	    {
	      breakpoint: 1100,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	  ]
	});
}
function cars_watched(selector) {
	$(selector).slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: true,
	  nextArrow: '.prev-watched',
	  prevArrow: '.next-watched',
	  responsive: [
	    {
	      breakpoint: 1100,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	  ]
	});
}


$(document).ready(function(){
	newsContent();
    services();
	slider_for('.slider-for');
	slider_nav('.slider-nav');
	card_nav('.small-photos');
	card_for('.big-photos');
	
	popup_nav('.small-popup');
	popup_for('.big-popup');
	wide_slider('.wide-slider');
	thin_slider('.text-slider');
	title_slider('.title-slider');
	main_slider('.main-slider');
	part_slider('.shadow-hidden-blocks');
	cars_slider('.all-cars-slider');
	cars_watched('.all-cars-watched');

	$('#auto').styler();
	$('#auto-type').styler();
	$('.choose').styler();
	$('.age').styler();
	$('.staz').styler();
	$('.oplata').styler();
	$('.driver').styler();
	$('.marka').styler();

	// sorting tabs
	$('.tabs-wrap .el-tabs .tab').click(function(e){
		e.preventDefault();
		var index = $(this).index();
		var text = $(this).text();
		var app = $(this).closest('.tabs-wrap').find('.tab-content .filter-tab-item').eq(index);
		$(this).closest('.tabs-wrap').find('.tab-content .filter-tab-item:not(.all)').empty();
		$(this).closest('.tabs-wrap').find('.tab-content .filter-tab-item .excursion-item').each(function(){
			var category = $(this).find('.exc-text .category').text();
			if (category == text) {
				$(this).clone().appendTo(app);
			}
		});
	});
	// /sorting tabs

	$('.index-video').css('height', $('video').height());

	// main-slider
	var sliderHeight = $(window).height()-$('.header').height();
	if ($(window).height() > $(window).width()) {
		$('.wrapper-acordeon').css('height', 'auto');
	} else if ($('.wrapper-acordeon').height() > sliderHeight) {
		$('.wrapper-acordeon').css('height', sliderHeight);
	}

	$('.shadow-item').on('mouseover', function() {
		var slideIndex = $(this).attr('data-attr');
		$(this).closest('.wrapper-acordeon').find('.huge-hidden-blocks .hidden-item[data-attr="'+slideIndex+'"]').addClass('active');
	});
	$('.shadow-item').on('mouseout', function() {
		var slideIndex = $(this).attr('data-attr');
		$(this).closest('.wrapper-acordeon').find('.huge-hidden-blocks .hidden-item[data-attr="'+slideIndex+'"]').removeClass('active');
	});
	// /main slider


	// filter
	if ($('.content-wrap').length) {
		if ($(window).width() > 1280) {
			var filter_top = $('.content-wrap').offset().top;
			$(window).scroll(function(){
				var scrollheight = $(window).scrollTop()+$(window).height();
				var fottop = $('footer').offset().top + $('.el-services').height() + $('.foot-breadcrumbs').height();
				var fil_btm = $(window).scrollTop()+$('.left-bar').height();
				if ($(window).scrollTop() >= filter_top) {
					if (fil_btm >= fottop-100) {
						$('.content-wrap .left-bar').removeClass('fixed').css('top', 'auto');
					} else {
						$('.content-wrap .left-bar').addClass('fixed').css('top', $(window).scrollTop());
						$('.all-cars').css('margin-right', '0');
					}
				} else if ($(window).scrollTop() < filter_top) {
					$('.content-wrap .left-bar').removeClass('fixed').css('top', 'auto');
				}
			});
		} else {
			$('.left-bar').addClass('nonfilter');

			$('.sort-bar .options .filter').click(function(e){
				e.preventDefault();
				$(this).closest('.sort-bar').next('.content-wrap').find('.left-bar').toggleClass('nonfilter');
				// $('.wrap-slider').slick('unslick');
				// reviews('.wrap-slider');
				// var sliderTarget = $(this).attr('data-slider');
				if ($(this).closest('.sort-bar').next('.content-wrap').find('.left-bar').hasClass('nonfilter')) {
			    	$('.wrap-slider').slick('setPosition');
			    }
			});
		}
	}
	// /filter

	// sorting-dropsown

	$('.sort .dropdown-sorting .main-link').click(function(e){
		e.preventDefault();
		$(this).closest('.sort').find('.dropdown-sorting ul').slideToggle(0);
		return false;
	});

	$('.dropdown-sorting ul li').click(function(e){
		e.preventDefault();
		$(this).closest('ul').find('li').css('display', 'block');
		$(this).css('display', 'none');
	    var text = $(this).find('a p').text();
	    $(this).closest('.dropdown-sorting').find('.main-link p span').text(text);
	    $(this).closest('ul').slideUp('fast');
	    return false;
	});

	// /sorting dropdown

	// type of transport dropdown

	$('.sort-item .arrows').click(function(){
		$(this).closest('.sort-item').find('.dropdown-transport ul').slideToggle(0);
		return false;
	});
	$('.sort-item .dropdown-transport .main-link').click(function(e){
		e.preventDefault();
		$(this).closest('.sort-item').find('.dropdown-transport ul').slideToggle(0);
		return false;
	});

	$('.dropdown-transport ul li').click(function(e){
		e.preventDefault();
		$(this).closest('ul').find('li').css('opacity', '1');
		$(this).css('opacity', '.3');
	    var pic = $(this).find('a img').clone();
	    $(this).closest('.dropdown-transport').find('li .main-link').html(pic);
	    var text = $(this).find('a p').text();
	    $(this).closest('.sort-item').find('p span').text(text);
	    $(this).closest('ul').slideUp('fast');
	    return false;
	});

	// /type of transport dropdown

	// scroll on click
	$('.mouse').click(function(e) {
		e.preventDefault();
		var top = $(this).closest('section').offset().top;
		var height = $(this).closest('section').outerHeight();
		var scroll = top + height;
		$('body').animate({scrollTop: scroll}, 1500);
	});
	// /scroll on click

	// calc tabs
	$('.content').not(':first').hide();
	$('.el-calc-tabs .tabs li').on('click', function(e){
		e.preventDefault();
		$(this).closest('.tabs').find('li').removeClass('active');
		$(this).addClass('active');

		var thisIndex = $(this).index();
		$(this).closest('.el-calc-tabs').find('.tab-content .content').hide();
		$(this).closest('.el-calc-tabs').find('.tab-content .content').eq(thisIndex).fadeIn();
	});

	$('.el-calc-tabs .car-item').click(function(){
		$(this).closest('.car-model').find('.car-item').removeClass('current-model');
		$(this).addClass('current-model');
	});

	$('.el-calc-tabs .mark').on('change', function(){
		$(this).closest('.tab-content').prev('.tabs').find('.active').removeClass('active');
		var content_index = $(this).closest('.content').index()+1;
		$(this).closest('.wrap-tabs').find('.tabs li').eq(content_index).addClass('active');
		$(this).closest('.content').hide().next('.content').fadeIn();
	});
	$('.car-item').click(function(){
		$(this).closest('.tab-content').prev('.tabs').find('.active').removeClass('active');
		var content_index = $(this).closest('.content').index()+1;
		$(this).closest('.wrap-tabs').find('.tabs li').eq(content_index).addClass('active');
		$(this).closest('.content').hide().next('.content').fadeIn();
	});
	$('.leave-btn').click(function(e){
		e.preventDefault();
		$(this).closest('.tab-content').prev('.tabs').find('.active').removeClass('active');
		var content_index = $(this).closest('.content').index()+1;
		$(this).closest('.wrap-tabs').find('.tabs li').eq(content_index).addClass('active');
		$(this).closest('.content').hide().next('.content').fadeIn();
	});
	// /calc tabs

	// range calculator
	$( "#slider" ).slider({
      value:1,
      min: 1,
      max: 36,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider" ).slider( "value" ) );

	$('#slider').append('<div class="line"></div>');
    $('#slider').on('slide', function(){
	    var left = $(this).find('span').position().left;
	    var newleft = left-$(this).prev('p').outerWidth()/2;

	    if (left<=45) {
	    	$(this).prev('p').css('left', '0px');
	    } else if (left>45 && left<345) {
	    	$(this).prev('p').css('left', newleft);
	    } else if (left>=345) {
	    	$(this).prev('p').css('left', '320px');
	    }

	    $(this).find('.line').css('width', left);
    });
    $('#slider').on('slidechange', function(){
    	var value = $(this).prev('p').find('input').val();
	    console.log(value);
	    if (value == '1') {
	    	$(this).prev('p').find('label').text('месяц');
	    } else if (value == '2' || value == '3' || value == '4') {
	    	$(this).prev('p').find('label').text('месяцa');
	    } else {
	    	$(this).prev('p').find('label').text('месяцев');
	    }
	});


	$( "#slider-vznos" ).slider({
      value:0,
      min: 0,
      max: 625000,
      step: 5000,
      slide: function( event, ui ) {
        $( "#amount-two" ).val(ui.value );
      }
    });
    $( "#amount-two" ).val( $( "#slider-vznos" ).slider( "value" ) );

	$('#slider-vznos').append('<div class="line"></div>');
    $('#slider-vznos').on('slide', function(){
	    var left = $(this).find('span').position().left;

	    if (left<=15) {
	    	$(this).prev('p').css('left', '0px');
	    } else if (left>15 && left<400) {
	    	$(this).prev('p').css('left', left);
	    } else if (left>=350) {
	    	$(this).prev('p').css('left', '350px');
	    }

	    $(this).find('.line').css('width', left);
    });
	// /range calculator

	// cost table
	$('.el-table .link').on('click', function(){
		$(this).closest('.el-table').find('.wrap-table').slideToggle();
		$(this).toggleClass('active');
	});
	// /cost table

	$('.js-tariff').click(function(){
		$(this).closest('.el-tariffs').find('.item').removeClass('chosen');
		$(this).find('.item').addClass('chosen');
		if ($(this).hasClass('transfer')) {
			$(this).empty();
			$(this).append('<a class="el-button fancybox-form" href="#call-popup">Заказать звонок</a>')
		}
	});	

	$('.wrap-conditions .wrap-tabs .btn').on('click', function(){
	  $('.wrap-tabs .btn').removeClass('active');
	  $('.wrap-conditions .wrap-content .content').css('display', 'none');
	  $(this).addClass('active');
	  var elId = $(this).index();
	  var elData = $('.wrap-conditions .wrap-content .content').eq(elId).css('display', 'block');
	});

	$('.wrap-tariffs .tariff-item .link').on('click', function(){
		// $(this).next('.unvisible').toggleClass('visible');
		$(this).toggleClass('arrow');
		$(this).next('.unvisible').slideToggle();
	});

	$('.colors .choose-color span').click(function(){
		$(this).closest('.colors').find('.choose-color').removeClass('active');
		$(this).parent('.choose-color').addClass('active');
		var index = $(this).parent('.choose-color').index();
		$(this).closest('.wrap-color').find('.color-content .content').css('display', 'none');
		$(this).closest('.wrap-color').find('.color-content .content').eq(index).css('display', 'block');
	});

	// $('.tabs-wrap .tab-content .filter-tab-item').each(function(e){
	// 	var filter = $(this).attr('data-attr');
	// 	$('.tabs-wrap .tab-content .all').find('.'+filter).clone().appendTo($(this));
	// });


	$('.wrapper-details .details').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$(this).next('.equipment-hidden').slideToggle();
	});
	
	$('#all-filds').on('change', function(){
		$(this).closest('.check-field').next('.full-info').slideToggle().css('display', 'flex');
	});

	if ($('.about-rent').length ) {
		var top_rent = $('.about-rent').offset().top-300;
		$(window).scroll(function(){
			// idex image
			if ($(window).scrollTop() >= top_rent) {
				$('.about-rent .photo .photo-item').addClass('active');
			} else if ($(window).scrollTop() < top_rent) {
				$('.about-rent .photo .photo-item').removeClass('active');
			}
			// /idex image
		});
	};
	$('.view-photo').fancybox({
	    openEffect  : 'fade',
	    closeEffect : 'fade',
	    autoSize:true,
	    width : 1165,
	    height : 782,
	    maxWidth : '100%',
	    wrapCSS:'slider-wrap',
	    'closeBtn' : true,
	    fitToView:true,
	    padding:'0'
	});
});

jQuery(document).click( function(event){
	if( $(event.target).closest(".dropdown-sorting ul").length ) 
	return;
	jQuery(".dropdown-sorting ul").slideUp('fast');
	event.stopPropagation();
});

jQuery(document).click( function(event){
	if( $(event.target).closest(".dropdown-transport ul").length ) 
	return;
	jQuery(".dropdown-transport ul").slideUp('fast');
	event.stopPropagation();
});

$(window).load(function(){
	reviews('.wrap-slider');

	$('.wrap-slider').slick('setPosition');

	setInterval(function(){
		$('.mouse .dot').toggleClass('invisible');
	}, 1500);
});


$(window).resize(function(){

});