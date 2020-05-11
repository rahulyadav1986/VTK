$(document).ready(function () {
   
    $('.why-slider').owlCarousel({
        loop: false,
        center: true,
        loop: true,
        autoplay: false,
        margin: 30,
        smartSpeed: 450,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false
            },
            600: {
                items: 2
            },
            980: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });  
	

});

window.addEventListener('load', function(){
    var load_screen = document.getElementById('load_screen');
    document.body.removeChild(load_screen);
})




