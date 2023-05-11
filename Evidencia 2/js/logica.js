window.onload = function() {
    fondo = document.getElementById("fondo");
    nave1 = document.getElementById("nave");
    carro1 = document.getElementById("carro");

    humano1 = document.getElementById("humano");
}

function detener() {

    //
    fondo.style.animationPlayState = "paused";
    fondo.style.WebkitAnimationPlayState = "paused";

    //
    nave1.style.animationPlayState = "paused";
    nave1.style.WebkitAnimationPlayState = "paused";

    //
    carro1.style.animationPlayState = "paused";
    carro1.style.WebkitAnimationPlayState = "paused";
    console.log(carro1);
}

function arrancar() {

    //
    fondo.style.animationPlayState = "running";
    fondo.style.WebkitAnimationPlayState = "running";

    //
    nave1.style.animationPlayState = "running";
    nave1.style.WebkitAnimationPlayState = "running";

    //
    carro1.style.animationPlayState = "running";
    carro1.style.WebkitAnimationPlayState = "running";
}

function raptar() {
    nave1.style.animationPlayState = "running";
    nave1.style.WebkitAnimationPlayState = "running";

    humano1.style.animationPlayState = "running";
    humano1.style.WebkitAnimationPlayState = "running";

    setInterval(() => {
        humano1.style.visibility = "hidden";
    }, 9000);
}