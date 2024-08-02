const sliderlar = document.querySelectorAll('.bolme_slider1');
let slideIndex1 = 0;
let intervalId2 = null;


document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider(){
    if(sliderlar.length > 0){

        sliderlar[slideIndex1].classList.add("goster");
        intervalId2 = setInterval(sonrakiSlide, 7000);
    }
}

function slideGoster(index){
    if(index >= sliderlar.length)
        slideIndex1 = 0;
    else if(index < 0)
        slideIndex1 = sliderlar.length - 1;

    sliderlar.forEach(bolme_slider1 => {
        bolme_slider1.classList.remove("goster");
    });
    sliderlar[slideIndex1].classList.add("goster");
}

function oncekiSlide(){
    slideIndex1--;
    slideGoster(slideIndex1);
}

function sonrakiSlide(){
    slideIndex1++;
    slideGoster(slideIndex1);
}