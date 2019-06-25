$(document).ready(function() {
	$('.step_next').on('click',function() {
		let stepNext = $(this).attr("data-step");
		$('#step-'+(stepNext-1)).addClass('hidden');
		$('#step-'+stepNext).removeClass('hidden');
		return false;
	});
	$('.step_prev').on('click',function() {
		let stepPrev = $(this).attr("data-step");
		$('.step_item').addClass('hidden');
		$('#step-'+stepPrev).removeClass('hidden');
		return false;
	});
});