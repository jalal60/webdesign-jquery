$(document).ready(function(){
	
	$('#btn-show').click(function(){
		$('h1').show(1000);
	});

	$('#btn-hide').click(function(){
		$('h1').hide(1000);
	});
	
	$('#btn-toggle').click(function(){
		$('h1').toggle(1000);
	});
	
});