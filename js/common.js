$(document).ready(function() {

	/*animate*/
	new WOW().init();

	
//прилипающие меню
var $menu = $(".header-line");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav_catalog").click(function() {
		$(".menu-mobile_menu").slideUp(200);
		$(".btn_nav_menu").find(".sandwich").removeClass("active");
		$(this).find(".sandwich").toggleClass("active");
		if ($(".menu-mobile_catalog").is(":hidden")) {
			$(".menu-mobile_catalog").slideDown(200);
		} else {
			$(".menu-mobile_catalog").slideUp(200);
		}
	});
	$(".btn_nav_menu").click(function() {
		$(".menu-mobile_catalog").slideUp(200);
		$(".btn_nav_catalog").find(".sandwich").removeClass("active");
		$(this).find(".sandwich").toggleClass("active");
		if ($(".menu-mobile_menu").is(":hidden")) {
			$(".menu-mobile_menu").slideDown(200);
		} else {
			$(".menu-mobile_menu").slideUp(200);
		}
	});



	$(".btn_callback").click(function(e) {
		e.preventDefault();
		$("#callback").fadeIn(200);
	});


	$(".modal-dropdown__close").click(function(e) {
		e.preventDefault();
		$("#callback.modal-dropdown").fadeOut(200);
	});

	$(".content-callback .btn-main").click(function(e) {
		e.preventDefault();
		$(".content-callback").fadeOut(0);
		$(".thanks-callback").fadeIn(200);
	});

	$(".btn-service").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".sidebar-service").slideToggle(200);
		$(".sidebar-about").slideToggle(200);
	});

	{
		if ($(window).width() < 992) { 
			$(".footer__title").click(function() {
				$(this).toggleClass("active");
				$(this).next(".footer__content").slideToggle(200);
			});
		}
	}

	var show = true;
	var countbox = ".item-number";
	$(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        	$('.about-numbers .number-value__text').css('opacity', '1');
        	$('.about-numbers .number-value__text').spincrement({
        		from: -1.5,
        		thousandSeparator: "",
        		duration: 2000
        	});

        	show = false;
        }
    });


	//слайдер

	$('.slider-billbord').each(function(){
		var $slider = $(this);
		$controls_slider = $('.slider-controls');

		if ($slider.length) {
			var currentSlide;
			var slidesCount;
			var sliderCounter = document.createElement('div');
			sliderCounter.classList.add('slider__counter');

			var updateSliderCounter = function(slick, currentIndex) {
				currentSlide = slick.slickCurrentSlide() + 1;
				slidesCount = slick.slideCount;
				$(sliderCounter).html('0' + currentSlide + ' из ' +'<span>0' +slidesCount+ '' + '</span>')
			};

			$slider.on('init', function(event, slick) {
				$('.slider-count').append(sliderCounter);
				updateSliderCounter(slick);
				$(".slider_number").text(slick.slideCount);
			});

			$slider.on('afterChange', function(event, slick, currentSlide) {
				updateSliderCounter(slick, currentSlide);
			});

			$slider.slick({
				arrows: false,
				autoplay: true,
				dots: true,
				touchThreshold: 1000,
				prevArrow: '<div class="slick-prev slick-arrow"><svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM61 9H1V7H61V9Z" fill="#438C87"/></svg><div/>',
				nextArrow: '<div class="slick-next slick-arrow"><svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3431 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3431 15.0711L60.7071 8.70711ZM0 9H60V7H0V9Z" fill="#438C87"/></svg><div/>',
				infinite: false,
				slidesToScroll: 1,
				slidesToShow: 1,
			});
		} 
	});



	$(".slider-services").each(function(){
		var $this = $(this),
		$blockArrows = $(this).parent().find(".controls-services");
		$this.slick({
			arrows: true,
			dots: false,
			touchThreshold: 1000,
			variableWidth: true,
			prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
			infinite: true,
			slidesToScroll: 1,
			slidesToShow: 1,
			appendArrows: $blockArrows,
			responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false,
				}
			}
			]
		});
	});

	$(".slider-sertificats").slick({
			arrows: true,
			dots: true,
			touchThreshold: 1000,
			variableWidth: false,
			prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
			infinite: true,
			slidesToScroll: 1,
			slidesToShow: 5,
			responsive: [
			{
				breakpoint: 992,
				settings: {
					variableWidth: true,
					arrows: false,
				}
			}
			]
		});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	 $('.tabs-services li a').click(function(event) {
	 	event.preventDefault();
	 	$(this).parent().parent().find("li").removeClass('active');
	 	$(this).parent().addClass('active');
	 	$(".tab-pane-services").fadeOut(0);
	 	var selectTab = $(this).attr("href");
	 	$(selectTab).fadeIn(200);
	 	$('.slider-services').slick('refresh');
	 }); 

$(".mobile-title-service").click(function(e) {
	 		e.preventDefault();
	 		$(this).parent().toggleClass("active");
	 		$(this).siblings(".mobile-tab").slideToggle(200);
	 	});
/*
	 $('.btn-tab').click(function(event) {
	 	event.preventDefault();
	 	$(this).toggleClass("active");
	 	$(".tabs-services li:not(.active)").slideToggle(200);
	 	$(".tabs-services li").addClass("active_mob");
	 });

	 $('.tabs-services li a').click(function() {
	 		if ($(this).parent().hasClass("active_mob")) {
	 			$(".tabs-services li:not(.active)").slideUp(200);
	 			$('.btn-tab').removeClass("active");
	 		} else {
	 		}		
	 	});
*/


	 if ($(window).width() < 992) {
	 	

	 	$(".menu > li.menu__haschild > a").click(function(e) {
	 		e.preventDefault();
	 		$(this).parent().toggleClass("active");
	 		$(this).siblings(".modal-dropdown").slideToggle(200);
	 		$(this).siblings(".menu-dropdown").slideToggle(200);
	 	});

	 	$(".modal-list > li.modal-list__haschild > a").click(function(e) {
	 		e.preventDefault();
	 		$(this).parent().toggleClass("active");
	 		$(this).siblings(".subdropdown-menu").slideToggle(200);
	 	});


$(".title-small_close").click(function(e) {
	 		e.preventDefault();
	 		$(".modal-dropdown").fadeOut(200);
	 	});


	 }

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

