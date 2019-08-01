$(function(){

	//wow
	new WOW().init();

	// 搜尋效果
	$('.search-box').hide();
	$('.search-text').hide();
	$('.s-a2').hide();
	$('.s-a1').click(function(){
		$('.search-box').fadeIn();
		$('.search-text').fadeIn();
		$('.s-a1').animate({left:'176px'}).fadeOut(200);
		$('.s-a2').fadeIn(1800);
	});

	// 回到最頂端
	$('.go-up').hide();
	$(window).on('scroll',function(){
		var scrollDistance=$(window).scrollTop();
		if (scrollDistance > 200 ) {
			$('.go-up').fadeIn();
			$('.header-bg').addClass('header-change', 500, "linear");
		}
		else{
			$('.go-up').fadeOut();
			$('.header-bg').removeClass('header-change', 500, "linear");
		}
	});


	$('.go-up').click(function(){
		$('html,body').animate({ scrollTop: 0 }, 500);
	})

	//精選課程slide
	$('.subject-slide').hide();
	$('.subject-slide:first').show();
	$('.subject-list h3').click(function(){
		var a=$(".subject-list p").not($(this).next());
		$(this).next('p').slideDown();
		a.slideUp();	
	})

    //tab

	$('.tip-tab li:eq(0)').css('background-color','#1565C0');
	$('.tip-tab li:eq(0)').click(function(){
		$('.tip-tab-box li:eq(0)').css('z-index','51').siblings().css('z-index','49');
		$(this).css('background-color','#1565C0').siblings().css('background-color','#245678');
	})
	$('.tip-tab li:eq(1)').click(function(){
		$('.tip-tab-box li:eq(1)').css('z-index','51').siblings().css('z-index','49');
		$(this).css('background-color','#1565C0').siblings().css('background-color','#245678');
	})
	$('.tip-tab li:eq(2)').click(function(){
		$('.tip-tab-box li:eq(2)').css('z-index','51').siblings().css('z-index','49');
		$(this).css('background-color','#1565C0').siblings().css('background-color','#245678');
	})
	$('.tip-tab li:eq(3)').click(function(){
		$('.tip-tab-box li:eq(3)').css('z-index','51').siblings().css('z-index','49');
		$(this).css('background-color','#1565C0').siblings().css('background-color','#245678');
	})


	//漢堡表單
	$('.pop-up').click(function(){
		$('.pop-screen').fadeIn();
	})
	$('.cancel').click(function(){
		$('.pop-screen').hide();
	})

})	





