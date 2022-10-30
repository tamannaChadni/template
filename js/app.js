$(document).ready(function(){

    //slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items:1,
        smartSpeed:1000,
        navText :['Prev','Next'],
        responsive:{
            0:{
               
            },
            600:{
                
            },
            1000:{
               
            }
        }
    })
    $('#project-slider').owlCarousel({
        loop:true,
        // margin:10,
        nav:false,
        dots:true,
        items:2,
        smartSpeed:600,
        autoplay:true,
        autoplayTimeout:4000,
        center: true,
        
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2,
                margin: 8,
            }
            
        }
    })
});