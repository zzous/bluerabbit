
$(function(){
	// mobile hambuger menu
	$('.btn-expand').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active')
			$('header .navigation').removeClass('active')
		} else {
			$(this).addClass('active')
			$('header .navigation').addClass('active')
		}
	});
})