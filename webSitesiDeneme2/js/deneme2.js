const kutular = document.querySelectorAll('.kutular3');
let kutuIndex = 0;
let intervalId1 = null;

document.addEventListener("DOMContentLoaded", initializeSlider())

function initializeSlider(){
    if(kutular.length > 0){

        kutular[kutuIndex].classList.add("goster");
        intervalId1 = setInterval(sonrakiKutu, 7000);
    }
}

function kutuGoster(index){
    if(index >= kutular.length){
        kutuIndex = 0;
    }
    else if(index < 0){
        kutuIndex = kutular.length - 1;
    }

    kutular.forEach(kutular3 => {
        kutular3.classList.remove("goster");
    });
    kutular[kutuIndex].classList.add("goster");
}

function oncekiKutu(){
    kutuIndex--;
    kutuGoster(kutuIndex);
}

function sonrakiKutu(){
    kutuIndex++;
    kutuGoster(kutuIndex);
}
