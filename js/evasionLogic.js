export function esquivarBoton(boton) {
    document.body.appendChild(boton);

    // 🛑 IMPORTANTE: Si tu caja en el HTML no se llama "card", 
    // cámbialo aquí por ".tu-clase" o "#tu-id"
    const card = document.querySelector('.card'); 

    boton.style.position = 'fixed';
    boton.style.zIndex = '9999';

    const botonWidth = boton.offsetWidth;
    const botonHeight = boton.offsetHeight;
    
    const ventanaWidth = window.innerWidth;
    const ventanaHeight = window.innerHeight;

    let randomX, randomY, choca;

    // 🔄 El Ciclo de Reintentos en PÍXELES puros
    do {
        // Generamos posición (dejando 20px de margen en las orillas de la pantalla)
        randomX = Math.floor(Math.random() * (ventanaWidth - botonWidth - 100)) + 50;
        randomY = Math.floor(Math.random() * (ventanaHeight - botonHeight - 100)) + 50;
        choca = false;

        // Si la tarjeta existe, activamos la detección de colisiones
        if (card) {
            const cardRect = card.getBoundingClientRect();
            
            // Le agregamos un "campo de fuerza" de 30px alrededor de la tarjeta
            const chocaX = randomX < (cardRect.right + 30) && (randomX + botonWidth) > (cardRect.left - 30);
            const chocaY = randomY < (cardRect.bottom + 30) && (randomY + botonHeight) > (cardRect.top - 30);
            
            if (chocaX && chocaY) {
                choca = true; // ¡Alarma de colisión! El loop se repite.
            }
        }
    } while (choca);

    // 🏁 Aplicamos las coordenadas seguras en píxeles
    boton.style.left = randomX + 'px';
    boton.style.top = randomY + 'px';
}