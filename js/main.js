import { esquivarBoton } from './evasionLogic.js';

const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');
const textoMensaje = document.getElementById('mensaje');
const titulo = document.querySelector('h1');
let intentos = 0;

// --- FUNCIÓN DE VICTORIA (PERRITO) ---
function victoria() {
    titulo.style.display = 'none';
    btnNo.style.display = 'none';
    textoMensaje.style.display = 'block';
    
    textoMensaje.innerHTML = `
        <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dTg3dW8wMzh3dzFwODI0NWVxNDM1dDl4Nm56M3RveGJkenY1OTFuaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jp2KXzsPtoKFG/giphy.gif" 
             style="width: 200px; border-radius: 15px; margin-bottom: 20px;">
        <br><br>
        <b style="color: #ffb3c6;">¡Confirmadísimo! Ya no hay vuelta atrás... 😎</b>
    `;

    btnSi.innerText = "¡Excelente! 😁";
    btnSi.style.pointerEvents = 'none'; 
}

// --- FUNCIÓN DE DERROTA (BEBÉ) ---
function derrota() {
    titulo.style.display = 'none';
    btnSi.style.display = 'none';
    btnNo.style.display = 'none';
    textoMensaje.style.display = 'block';

    textoMensaje.innerHTML = `
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHJybGFhNHBlN3JsdWluYnc5dWUxdWQ2MmFiaXl2MmJ4ZHFtM3c2MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4V3RuU0zSq1SC8Hh4x/giphy.gif" 
             style="width: 200px; border-radius: 15px; margin-bottom: 20px;">
        <br><br>
        <p style="color: #ffb3c6;">Ni modo... se intentó. <br>
    `;
}

// --- LÓGICA DEL BOTÓN NO ---
function manejarNo(e) {
    if (e.cancelable) e.preventDefault();

    if (intentos === 0) {
        textoMensaje.innerText = "Ups, creo que tu dedo se resbaló. Inténtalo de nuevo :)";
        esquivarBoton(btnNo);
        intentos++;
    } else if (intentos === 1) {
        textoMensaje.innerText = "¿Segura? El domingo va a estar aburrido sin ti... :(";
        esquivarBoton(btnNo);
        intentos++;
    } else if (intentos === 2) {
        textoMensaje.innerText = "Última oportunidad antes de que el botón deje de moverse 🥺";
        esquivarBoton(btnNo);
        intentos++;
    } else if (intentos === 3) {
        // ACTIVAMOS EL BOTÓN ROSA (RECHAZAR)
        textoMensaje.innerText = ""; 
        btnNo.innerText = "Rechazar";
        btnSi.innerText = "¡Ándale, di que sí! 😁"; 
        btnSi.style.backgroundColor = "white";
        btnSi.style.color = "black";
        intentos++; // Subimos a 4 para que la próxima entre a derrota()
    } else if (intentos >= 4) {
        derrota();
    }
    
    titulo.style.display = 'none';
}

// --- EVENTOS (USAMOS CLICK PARA MÁXIMA COMPATIBILIDAD) ---
// Si el CSS ya tiene touch-action: manipulation, el click ya no tiene lag.
btnSi.addEventListener('click', victoria);
btnNo.addEventListener('click', manejarNo);
