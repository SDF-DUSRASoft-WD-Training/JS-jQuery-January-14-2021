//document.querySelector(".owl-carousel").innerHTML = Date();

//$('.owl-carousel').owlCarousel({
jQuery('.owl').owlCarousel({
    loop:true,
    margin:10, // Data Type Number
    nav:true, // Data Type Boolean
    autoplay: true, // Data Type Boolean
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:5
        },
        1200:{
            items:6
        }
    }
})