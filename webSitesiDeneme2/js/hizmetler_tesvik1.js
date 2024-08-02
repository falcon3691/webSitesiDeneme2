const sliderlar1 = document.querySelectorAll('.bolme_slider1_1');
let slideIndex2 = 0;
let intervalId3 = null;


document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider(){
    if(sliderlar1.length > 0){

        sliderlar1[slideIndex2].classList.add("goster");
        intervalId3 = setInterval(sonrakiSlide1, 7000);
    }
}

function slideGoster1(index){
    if(index >= sliderlar1.length)
        slideIndex2 = 0;
    else if(index < 0)
        slideIndex2 = sliderlar1.length - 1;

    sliderlar1.forEach(bolme_slider1_1 => {
        bolme_slider1_1.classList.remove("goster");
    });
    sliderlar1[slideIndex2].classList.add("goster");
}

function oncekiSlide1(){
    slideIndex2--;
    slideGoster1(slideIndex2);
}

function sonrakiSlide1(){
    slideIndex2++;
    slideGoster1(slideIndex2);
}