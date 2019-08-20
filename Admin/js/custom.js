$(function(){
	// 新增刪除按鈕
	var counter=2
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
	

})