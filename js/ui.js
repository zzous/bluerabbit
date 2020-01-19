
$(function(){
	// mobile hambuger menu
	$('header').on('click', '.btn-expand', function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active')
			$('header .navigation').removeClass('active')
		} else {
			$(this).addClass('active')
			$('header .navigation').addClass('active')
		}
	});
})