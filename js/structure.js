var structure = {
    init: function () {

        $('#btnMenuSearch').bind('click', structure.clickMenuSearch);
        $('#btnBuscaServicosMobile').bind('click', structure.clickBotaoBuscaServicosMobile);
        $('#btnBuscaMobile').bind('click', structure.clickBotaoBuscaMobile);

		$('.banner').slick({
			arrows:false,
			dots:true,
			infinite: true,
			speed:500,
			fade:true,
			cssEase:'linear',
			autoplay: true,
  			autoplaySpeed: 4000
		});

		$('.area-banner').slick({
			arrows:true,
			prevArrow: '<span class="banner-left"><i class="icon-arrow-left"></i></span>',
			nextArrow: '<span class="banner-right"><i class="icon-arrow-right"></i></span>',
			dots:false,
			infinite: true,
			speed:500,
			cssEase:'linear',
			autoplay: true,
  		autoplaySpeed: 4000
		});


		$('.slider-programacao').slick({
		    arrows: true,
		    prevArrow: '<span class="banner-left"><i class="icon-arrow-left"></i></span>',
		    nextArrow: '<span class="banner-right"><i class="icon-arrow-right"></i></span>',
		    dots: false,
		    infinite: true,
		    speed: 500,
		    cssEase: 'linear',
		    autoplay: true,
		    autoplaySpeed: 4000,
		    slidesToShow: 1,
		    slidesToScroll: 1
		});

		$('.slider-p-diamante').slick({
		    arrows: true,
		    prevArrow: '<span class="banner-left left-faixa"><i class="icon-arrow-left"></i></span>',
		    nextArrow: '<span class="banner-right right-faixa"><i class="icon-arrow-right"></i></span>',
		    dots: false,
		    infinite: true,
		    speed: 500,
		    cssEase: 'linear',
		    autoplay: true,
		    autoplaySpeed: 4000,
		    slidesToShow: 2,
		    slidesToScroll: 1,
		    responsive: [
				{
				    breakpoint: 1025,
				    settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				    }
				}
		    ]
		});

		$('.slider-p-ouro').slick({
		    arrows: true,
		    dots: false,
		    infinite: true,
		    speed: 500,
		    cssEase: 'linear',
		    autoplay: false,
		    autoplaySpeed: 4000,
		    slidesToShow: 3,
		    slidesToScroll: 1,
		    prevArrow: '<span class="banner-left left-laranja"><i class="icon-arrow-left"></i></span>',
		    nextArrow: '<span class="banner-right right-laranja"><i class="icon-arrow-right"></i></span>'
		});

		$('.slider-p-prata').slick({
		    arrows: true,
		    dots: false,
		    infinite: true,
		    speed: 500,
		    cssEase: 'linear',
		    autoplay: false,
		    autoplaySpeed: 4000,
		    slidesToShow: 4,
		    slidesToScroll: 1,
		    prevArrow: '<span class="banner-left left-laranja"><i class="icon-arrow-left"></i></span>',
		    nextArrow: '<span class="banner-right right-laranja"><i class="icon-arrow-right"></i></span>'
		});
		$('.slider-p-bonze').slick({
		    arrows: true,
		    dots: false,
		    infinite: true,
		    speed: 500,
		    cssEase: 'linear',
		    autoplay: false,
		    autoplaySpeed: 4000,
		    slidesToShow: 6,
		    slidesToScroll: 1,
		    prevArrow: '<span class="banner-left left-laranja"><i class="icon-arrow-left"></i></span>',
		    nextArrow: '<span class="banner-right right-laranja"><i class="icon-arrow-right"></i></span>'
		});

		$('.slide-card').slick({
		    arrows: true,
		    prevArrow: '<span class="banner-left"><i class="icon-arrow-left"></i></span>',
		    nextArrow: '<span class="banner-right"><i class="icon-arrow-right"></i></span>',
		    dots: false,
		    infinite: true,
		    speed: 500,
		    cssEase: 'linear',
		    autoplay: true,
		    autoplaySpeed: 4000
		});

		$('.slider-option').slick({
		    arrows: true,
		    prevArrow: '<span class="banner-left"><i class="icon-arrow-left"></i></span>',
		    nextArrow: '<span class="banner-right"><i class="icon-arrow-right"></i></span>',
		    dots: false,
		    infinite: true,
		    speed: 500,
		    cssEase: 'linear',
		    autoplay: true,
		    autoplaySpeed: 4000,
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    lazyLoad: 'ondemand'
		});

		$('.slide-card-multi').slick({
		    arrows: true,
		    prevArrow: '<span class="banner-left"><i class="icon-arrow-left"></i></span>',
		    nextArrow: '<span class="banner-right"><i class="icon-arrow-right"></i></span>',
		    dots: false,
		    infinite: true,
		    speed: 500,
		    cssEase: 'linear',
		    autoplay: true,
		    autoplaySpeed: 4000,
		    slidesToShow: 4,
		    slidesToScroll: 1,
		    responsive: [
				{
				    breakpoint: 1025,
				    settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				    }
				}
		    ]
		});

		$('.slider-apoio-patrocinio').slick({
		    arrows: true,
		    dots: false,
		    infinite: true,
		    speed: 500,
		    cssEase: 'linear',
		    autoplay: true,
		    autoplaySpeed: 4000
		});

		$('.slider-news-cancer').slick({
		    arrows: true,
		    slidesToShow: 3,
		    slidesToScroll: 3,
		    responsive: [
				{
				    breakpoint: 1025,
				    settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				    }
				}
		    ]
		});


		$('.slider-pub-home-ERRO').slick({
		    arrows: false,
		    slidesToShow: 2,
		    slidesToScroll: 2,
		    autoplay: false,
		    autoplaySpeed: 4000
		});


		$('.slider-profile').slick({
			slidesToShow:4,
  			slidesToScroll:4,
			centerMode: true,
			responsive: [
				{
				  breakpoint: 481,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			]
		});

        // slider usado nas doenças e outros carrossel.
		structure.sliderKnow();

		lightbox.option({
		  'showImageNumberLabel': false
		})

		$('.search-results aside .filter input[type=radio]').iCheck();

		$('.page-title.pt-profile ul li a').bind('click', structure.clickMenu);

		// $('.internal .sel-year a').bind('click', structure.openYear);
		// $('.about .structure .sel-year a').bind('click', structure.openYear);
        $('.sel-year a').bind('click', structure.openYear);

		$.each($('.faq .itens .box > a'), function(i, item){
			$(item).bind('click', structure.openFaq);
		})

		structure.menuFixo();
		$(window).bind('load', structure.menuFixo);
		$(window).bind('scroll', structure.menuFixo);

		structure.menuFixo2();
		$(window).bind('load', structure.menuFixo2);
		$(window).bind('scroll', structure.menuFixo2);
	},

	menuFixo: function(){
		var _y = $(this).scrollTop(),
			_nav = $('header'),
			_top = 100;
		if (_y >= _top) {
			if (!_nav.hasClass('scrl')) {
				_nav.addClass('scrl');
			}
		} else {
			_nav.removeClass('scrl');
		}
	},

	menuFixo2: function(){
		var _y = $(this).scrollTop(),
			_nav = $('.header-mobi'),
			_top = 100;
		if (_y >= _top) {
			if (!_nav.hasClass('scrl')) {
				_nav.addClass('scrl');
			}
		} else {
			_nav.removeClass('scrl');
		}
	},

	clickMenu: function(e){
		$('.page-title.pt-profile ul li a').removeClass('on');
		$('html,body').animate( { scrollTop:$(this.hash).offset().top -130 } , 1000);
		$(this).addClass('on');
	},

	clickMenuSearch: function (e) {
	    window.location.href = "/busca/default.aspx?b=" + $("#txtMenuSearch").val();
	    return false;
	},

	clickBotaoBuscaMobile: function (e) {
	    window.location.href = "/busca/default.aspx?b=" + $("#txtMenuSearchMobile").val();
	    return false;
	},

	clickBotaoBuscaServicosMobile: function (e) {
	    window.location.href = "/servicos-credenciados/default.aspx?uf=" + $("#wucMenu1_wucSubMenuMobile1_wucSubMenuEncontreMobile1_ddEstado").val();
	    return false;
	},

	openYear: function (e) {
		var _this = $(e.currentTarget);
		if(_this.hasClass('open')) {
			_this.removeClass('open');
			_this.next().hide();
		} else {
			_this.addClass('open');
			_this.next().show();
		}
	},

	openFaq: function(e){
		var _this = $(e.currentTarget);
		if(_this.hasClass('open')) {
			_this.removeClass('open');
			_this.next().hide();
		} else {
			$('.faq .itens .box > a').removeClass('open');
			$('.faq .itens .box div').hide();
			_this.addClass('open');
			_this.next().show();
		}
	},


    sliderKnow: function(){
        $('.slider-know').slick({
            slidesToShow:3,
            slidesToScroll:3,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }


};

$(document).ready(structure.init);

