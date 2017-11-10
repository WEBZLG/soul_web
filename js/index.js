$(function(){
//	歌曲列表左边竖条
	$(".clicked").on("click",function(){
		$(this).siblings(".row").addClass("active").parent().siblings().find(".row").removeClass("active")
	})
	
	
	
	
})