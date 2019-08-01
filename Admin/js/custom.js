$(function(){
	//add項目
	$('.add-box').hide();
	$('.add').click(function(){
		$('.add-box').show();
	})
	$('.add-inner input').focus(function(){
		$(this).css('border-bottom', '1px solid #dd4b39');
		$(this).prev().css('color', '#dd4b39');
	})
	$('.add-inner input').blur(function(){
		$(this).css('border-bottom', '1px solid #555');
		$(this).prev().css('color', '#555');
	})


	// 旁邊選單展開
	$('.aside-ul li> ul> li').hide();
	$('.aside-ul li').click(function(){
		$(this).find('li').slideToggle();

		
	})
	
	// $('.aside-ul li').click(function(){
	// 	$(this).children('.rotate').css({'transform':'rotate(-90deg)','transition':'all 0.5s'});
	// 	$(this).click(function(){
	// 		$(this).children('.rotate').css({'transform':'rotate(0deg)','transition':'all 0.5s'});
	// 	})
		
	// })
	


})

