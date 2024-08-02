const sliderlar2 = document.querySelectorAll('.bolme_slider1_2');
let slideIndex3 = 0;
let intervalId4 = null;


document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider(){
    if(sliderlar2.length > 0){

        sliderlar2[slideIndex3].classList.add("goster");
        intervalId4 = setInterval(sonrakiSlide2, 7000);
    }
}

function slideGoster2(index){
    if(index >= sliderlar2.length)
        slideIndex3 = 0;
    else if(index < 0)
        slideIndex3 = sliderlar2.length - 1;

    sliderlar2.forEach(bolme_slider1 => {
        bolme_slider1.classList.remove("goster");
    });
    sliderlar2[slideIndex3].classList.add("goster");
}

function oncekiSlide2(){
    slideIndex3--;
    slideGoster2(slideIndex3);
}

function sonrakiSlide2(){
    slideIndex3++;
    slideGoster2(slideIndex3);
}