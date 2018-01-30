$(document).ready(function(){

	$('.ks1').addClass('hand');
	$('.ks3').addClass('hand');
	$('.ks4').addClass('hand');

	var controller = new ScrollMagic.Controller();
	var ourScene1 = new ScrollMagic.Scene({
		triggerElement: '.ks5'
	})
	.setClassToggle('.ks5', 'lox')
	.addTo(controller);

	var ourScene2 = new ScrollMagic.Scene({
		triggerElement: '.ks6'
	})
	.setClassToggle('.ks6', 'lox')
	.addTo(controller);

	var ourScene1 = new ScrollMagic.Scene({
		triggerElement: '.ks7'
	})
	.setClassToggle('.ks7', 'lox')
	.addTo(controller);

	var ourScene1 = new ScrollMagic.Scene({
		triggerElement: '.ks8'
	})
	.setClassToggle('.ks8', 'lox')
	.addTo(controller);

	$('.ks12').click(function(){
		$('.ks12').css('opacity', 0);
		$('.ks13').css('opacity', 1);
	});
});