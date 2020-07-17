// $(document).ready(function() {
// 	$('.header_burger').click(function(event) {
// 		$('.header_burger,.header_menu').toggleClass('active');
// 	});
// });

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	IOS: function() {return navigator.userAgent.match(/IOS/i);},
	Opera: function() {return navigator.userAgent.match(/Opera/i);},
	Windows: function() {return navigator.userAgent.match(/Windows/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());}
};

	let body=document.querySelector('body');
if(isMobile.any()){
	body.classList.add('touch');
}
else {
	body.classList.add('mouse');
}
