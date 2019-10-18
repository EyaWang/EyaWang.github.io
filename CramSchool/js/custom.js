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
		
		if ($(this).next('p').is(":hidden")) {
			$(this).closest(".subject-list ").find('.subject-slide').slideUp();
			$(this).next('p').slideDown();
		}
	})

   

	//漢堡表單
	$('.pop-up').click(function(){
		$('.pop-screen').fadeIn();
	})
	$('.cancel').click(function(){
		$('.pop-screen').hide();
	})

	//goal

	$('.goal a[href]').click(function() {
        var target = $(this.hash);
        $('html,body').animate({
        	scrollTop: (target.offset().top)-100
        }, 1000);
        return false;
    });

})	





