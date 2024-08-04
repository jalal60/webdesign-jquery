$(document).ready(function(){
	
	$('#btn-fadein').click(function(){
		$('h1').fadeIn();
	});

	$('#btn-fadeout').click(function(){
		$('h1').fadeOut();
	});
	
	$('#btn-toggle').click(function(){
		$('h1').fadeToggle();
	});
	
});