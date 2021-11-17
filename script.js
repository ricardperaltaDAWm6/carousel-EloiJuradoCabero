window.onload = function () {
    // Variables

    // Añadir las tres imágenes del directorio "img" al array IMAGENES.
    const IMAGENES = ["img1.jpg","img2.jpg","img3.jpg"];


    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;

    // posición actual guarda el indice de la imágen que se está mostrando (del array IMAGENES)
    let posicionActual = 0;

    // variables con los elementos del DOM HTML, aplicar el selector necesario.
    let $botonRetroceder = document.getElementById("retroceder");
    let $botonAvanzar = document.getElementById("avanzar");
    let $imagen = document.getElementById("imagen");
    let $botonPlay = document.getElementById("play");
    let $botonStop = document.getElementById("stop");
    var container = document.querySelector(".soccer");



    // Identificador del proceso que se ejecuta con setInterval().
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if (posicionActual === 2 ) {
            posicionActual = 0;
        }else{
            posicionActual++;
        }
        
        renderizarImagen();

    }

    container.addEventListener('mousemove', function (event) {
        var x = event.clientX;
        var y = event.clientY;
        var ball = document.querySelector(".ball");
        ball.style.position = "absolute";
        ball.style.left = `${x}px`;
        ball.style.top = `${y}px`;
      })

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if (posicionActual === 0 ) {
            posicionActual = 2;
        }else{
            posicionActual--;
        }
        
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
        console.log(posicionActual);
        $imagen.style.backgroundImage = `url(img/${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, [TIEMPO_INTERVALO_MILESIMAS_SEG]);

        $botonPlay.setAttribute("disabled","");
        $botonAvanzar.setAttribute("disabled","");
        $botonRetroceder.setAttribute("disabled","");
        $botonStop.removeAttribute("disabled");

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        // Desactivar la ejecución de intervalo.
        clearInterval(intervalo);

        $botonPlay.removeAttribute("disabled","");
        $botonAvanzar.removeAttribute("disabled","");
        $botonRetroceder.removeAttribute("disabled","");
        $botonStop.removeAttribute("disabled");
        // Activamos los botones de control. Utilizando setAttribute y removeAttribute.
    }

   

    // Eventos
    $botonAvanzar.addEventListener("click",pasarFoto);
    $botonRetroceder.addEventListener("click",retrocederFoto);
    $botonPlay.addEventListener("click",playIntervalo);
    $botonStop.addEventListener("click",stopIntervalo);
    // Añadimos los evenntos necesarios para cada bsoton. Mediante addEventListener.

    // Iniciar
    renderizarImagen();
} 
