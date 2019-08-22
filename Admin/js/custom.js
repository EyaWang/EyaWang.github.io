$(function(){
	// 新增刪除按鈕
	var counter=3
	// 按新增按鈕
	$("#add_btn").click(function(){		
		addRow(counter);
		counter+=1;
	})
	//按刪除按鈕
	$(".delete-button").click(function(){
		var tr=$(this).closest('tr');
		var data_id=tr.data('id');
		deleteRow(data_id);
	})


	function addRow(index){
		var tbody=$(".product-table").find("tbody");
		var row=$(".tmp")[0];
		var newRow=$(row).clone(true,true);
		newRow.attr('data-id',index);
		newRow.removeClass('tmp');
		var productIdTd=newRow.find('.product-id');
		productIdTd.html(index);
		var trLength=$(tbody).find("tr")
		if (trLength.length < 10) {
			tbody.append(newRow);
		}	
		else{
			counter-=1
		}
	}
	function deleteRow(data_id){
		var tbody=$(".product-table").find("tbody");
		var str='tr[data-id='+data_id+']';
		tr=tbody.find(str);
		tr.remove();
	}


	//二層選單
	$(".fir-ul > li").click(function(){
		$(this).next('ul').slideToggle();
	})
	//收合鈕
	$("header .bar-icon").click(function(){
		if ($("aside").css("width") == "0px") {
			$("aside").animate({width:'250px'},1000);
			$("main").animate({paddingLeft:'250px'},1000);
			$(".fake-logo").animate({width:'250px'},1000);
		}else{
			$("aside").animate({width:'0px'},1000);
			$("main").animate({paddingLeft:'0px'},1000);
			$(".fake-logo").animate({width:'0px'},1000);
		}	
	})

	// checkbox
	var thead = $(".product-table thead");
	var tbody = $(".product-table tbody");
	var thCheckBox = thead.find("input[type=checkbox]");
	var tdCheckBox = tbody.find("input[type=checkbox]");
	var tdChecked = tbody.find("input[type=checkbox]:checked").length;
	var trLength = tbody.find('tr').length;
	// console.log('這是tr checkbox總數量:' + trLength);
	// console.log('這是舊的點選數量:' + tdChecked);

	// bind change event
	thCheckBox.change(function(){
		var tdNewCheckBox = tbody.find("input[type=checkbox]");
		if (thCheckBox.is(":checked")) {
			tdNewCheckBox.prop("checked",true);
		} else{
			tdNewCheckBox.prop("checked",false);
		}
	});

	$("#table").change(function(){ //判斷是否全選
		var tdNewChecked = tbody.find("input[type=checkbox]:checked").length;
		var trNewLength = tbody.find('tr').length;
		// console.log('這是新的點選數量:' + tdNewChecked + '，全選了:' +(tdNewChecked == trLength).toString());
		if (tdNewChecked == trNewLength) {
			// console.log('全部選擇');
			thCheckBox.prop("checked",true);
		}
		else{
			thCheckBox.prop("checked",false);
		}
	});
})