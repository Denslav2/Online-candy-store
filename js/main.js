document.addEventListener('DOMContentLoaded', function () {
	// инициализация слайдера
	var slider = new SimpleAdaptiveSlider('.slider', {
		autoplay: true,
		interval: 4000,
	});
});

/*POPUP GALLERY*/
$(document).ready(function () {
	$('.gallery__wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			/*titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}*/
		}
	});
});


/*MODAL*/
$('.show-popup').magnificPopup({
	type: 'inline',
	removalDelay: 500, //delay removal by X to allow out-animation
	callbacks: {
		beforeOpen: function () {
			this.st.mainClass = this.st.el.attr('data-effect');
		}
	},
	midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

/*POST FORM*/
$(document).ready(function () {

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}