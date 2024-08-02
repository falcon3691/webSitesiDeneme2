const sliderlar3 = document.querySelectorAll('.bolme_slider1_3');
let slideIndex4 = 0;
let intervalId5 = null;


document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider(){
    if(sliderlar3.length > 0){

        sliderlar3[slideIndex4].classList.add("goster");
        intervalId5 = setInterval(sonrakiSlide3, 7000);
    }
}

function slideGoster3(index){
    if(index >= sliderlar3.length)
        slideIndex4 = 0;
    else if(index < 0)
        slideIndex4 = sliderlar3.length - 1;

    sliderlar3.forEach(bolme_slider1 => {
        bolme_slider1.classList.remove("goster");
    });
    sliderlar3[slideIndex4].classList.add("goster");
}

function oncekiSlide3(){
    slideIndex4--;
    slideGoster3(slideIndex4);
}

function sonrakiSlide3(){
    slideIndex4++;
    slideGoster3(slideIndex4);
}