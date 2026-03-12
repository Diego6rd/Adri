//Impotamos el botón de evasión 

import { esquivarBoton } from "./evasionLogic.js";
 

const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');

const titulo = document.getElementById('titulo');
const textoMensaje =  document.getElementById('mensaje');


//Cuenta de los intentos


let intentos =0;


//Evasión de los intentos


function reaccionarBotonNo(e){

    console.log("El mouse tocó el botón. Intento actual:", intentos);

    if(intentos === 0){

        textoMensaje.innerText = "Ups, creo que tu dedo se resbaló. Intentalo de nuevo :)";
        esquivarBoton(btnNo);
        intentos ++;
        titulo.style.display = 'none';
        
    }else if(intentos === 1){

        textoMensaje.innerText = "¿Segura? El domingo va a estar aburrido sin tí..... :(";
        esquivarBoton(btnNo);
        intentos ++;
        titulo.style.display = 'none';

    }else if(intentos === 2){

        textoMensaje.innerText = "Última oportunidad antes de que el botón deje de moverse 🥺🥺 ";
        esquivarBoton(btnNo);
        intentos ++;
        titulo.style.display = 'none';
    }else{

        //4to intento ya no se  mueve el botón F

        textoMensaje.innerText = "";
        btnNo.innerText = "Recharzar";

        btnSi.innerText = "¡Ándale, di que sí! 😁"; 
        btnSi.style.backgroundColor = "whithe"; // Un color rosita para que resalte del blanco
        btnSi.style.color = "black";
        btnSi.style.transform = "scale(1.1)"; // Lo hacemos un poquito más grande
        
        titulo.style.display = 'none';
    }
}


btnNo.addEventListener('mouseenter', reaccionarBotonNo);
btnNo.addEventListener('touchstart', reaccionarBotonNo);


//Final feliz :)

btnSi.addEventListener('click', () => {
    // 1. Desaparecemos el título y el botón No
    titulo.style.display = 'none';
    btnNo.style.display = 'none';

    textoMensaje.style.display = 'block';

    // 2. EL FATALITY VISUAL (Ojo: ¡innerHTML en mayúsculas!)
    textoMensaje.innerHTML = `
        <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dTg3dW8wMzh3dzFwODI0NWVxNDM1dDl4Nm56M3RveGJkenY1OTFuaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jp2KXzsPtoKFG/giphy.gif" 
             alt="Meme de victoria" 
             style="width: 200px; border-radius: 15px; margin-bottom: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
        <br><br>
        <b>¡Confirmadísimo! Ya no hay vuelta atrás... 😎</b>
    `;

    // 3. Cambiamos el texto del botón Sí y lo desactivamos
    btnSi.innerText = "¡Excelente! 😁";
    btnSi.style.pointerEvents = 'none'; 
});

btnNo.addEventListener('click', () => {
    if (intentos >= 3) { // Solo si ya pasó por todos los saltos
        titulo.style.display = 'none';
        btnSi.style.display = 'none';
        btnNo.style.display = 'none';

        // Mostramos un meme de resignación o tristeza graciosa
        textoMensaje.style.display = 'block';
        textoMensaje.innerHTML = `
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJybGFhNHBlN3JsdWluYnc5dWUxdWQ2MmFiaXl2MmJ4ZHFtM3c2MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4V3RuU0zSq1SC8Hh4x/giphy.gif" 
                 style="width: 200px; border-radius: 15px; margin-bottom: 20px;">
            <br><br>
            <p style="color: #ffb3c6;">Ni modo... se intentó. <br>
        `;
    }
});