$(function(){
	//二層選單
	$(".fir-ul > li").click(function(){
		$(this).next('ul').slideToggle();
	})
	// //收合鈕
	// $("header .bar-icon").click(function(){
	// 	if ($("aside").css("width") == "0px") {
	// 		$("aside").animate({width:'250px'},1000);
	// 		$("main").animate({paddingLeft:'250px'},1000);
	// 		$(".fake-logo").animate({width:'250px'},1000);
	// 	}else{
	// 		$("aside").animate({width:'0px'},1000);
	// 		$("main").animate({paddingLeft:'0px'},1000);
	// 		$(".fake-logo").animate({width:'0px'},1000);
	// 	}	
	// })

	//add
	var counter=2;
	$('#add_btn').click(function(){
		addTr(counter);
		counter +=1
	})
	function addTr(id){
		var tbody=$('.product-table').find('tbody');
		var row=$('.tmp')[0];
		var newRow=$(row).clone(true);
		newRow.attr('data-id',id)
		newRow.removeClass('tmp')

		var newId=$(newRow).find('.student-id')
		newId.html(id)
		tbody.append(newRow);
	}
	//delete
	$('.delete-button').click(function(){
		var tbody=$('.product-table').find('tbody');
		var delTr=$(this).closest('tr');
		delTr.remove();
	})

	//ajax
	$.ajax({
           url: "./data/student.json",              
           type: "GET",
           dataType: 'json',
    }).done(function(data){
    	readData(data);
    	
    }).fail(function(err){
    	console.log(err);
    })

    function readData(data){
    	var str="";   
		$.each(data,function(i,n){ 
			str +="<tr>"; 
			str +="<td>" +n.id+ "</td>";  
			str +="<td>" +n.year+ "</td>";  
			str +="<td>" + n.name+ "</td>"; 
			str +="<td>" + n.sex+ "</td>"; 
			str +="<td>" + n.school+ "</td>"; 
			str +="<td>" + n.contactPerson+ "</td>"; 
			str +="<td>" + n.contactNumber+ "</td>";  
			str +="</tr>"; 
			str +="<br>";
		});

		

		var tbody=$('.product-table tbody');
		tbody.append(str);

		$('.topBtn-center button').click(function(){
			search(str);
		})


		// var tr=tbody.find('tr');
		// var trLen=tbody.find('tr').length;
		// for(var i=0; i<trLen; i++){
		// 	if (i<20) {
		// 		tbody.find('tr:eq('+i+')').show();
		// 	}else{
		// 		tbody.find('tr:eq('+i+')').hide();
		// 	}
		// }


		//增加刪除鈕
		var del=$('.deleteBtn')[0];
		var delBtn=$(del).clone(true);
		$('.product-table tbody tr').append(delBtn);


		//顯示資料數
		var dataLen=data.length;
		$('.table-footer span').html(dataLen);

    }



    // 搜尋
    function search(str){
    	var txt=$('.topBtn-center input[type=text]').val();
    	var tr=$('.product-table tbody tr');
    	var select=$('#select').val();
    	if($.trim(txt)!=""){
    		tr.hide();
    		select-=1
    		tr.find('td:eq('+select+')').filter(":contains('"+txt+"')").closest('tr').show();
    		// for(var i=0; i<containTr.length; i++){
    		// 	if(i<20){
    		// 		$(containTr[i]).show();
    		// 	}
    		// }
    		
    	}

    }

    

    
})
