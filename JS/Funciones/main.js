
//Funcion normal para calcular la velocidad y otra para calcular el volumnen de una esfera
function velocidad(distancia,tiempo){
    let vel = distancia / tiempo;
    console.log("La velocidad es: " + vel + " m/s");
}
function volumenEsfera(radio){
    let volumen = (4/3) * Math.PI * Math.pow(radio, 3);
    console.log("El volumen de la esfera es: " + volumen + " m^3");
}

let velocidadInput = prompt("Ingrese la distancia (en metros):");
let tiempoInput = prompt("Ingrese el tiempo (en segundos):");
velocidad(velocidadInput, tiempoInput);

let radioInput = prompt("Ingrese el radio de la esfera (en metros):");
volumenEsfera(radioInput);



//Mismas funciones pero ahora usaremos funciones flecha
let distancia = prompt("Ingrese la distancia (en metros):");
let tiempo = prompt("Ingrese el tiempo (en segundos):");
const velocidad = (distancia, tiempo) => distancia / tiempo;
console.log("La velocidad es: " + velocidad(distancia, tiempo) + " m/s");

let radio = prompt("Ingrese el radio de la esfera (en metros):");
const volumenEsfera = radio => (4/3) * Math.PI * Math.pow(radio, 3);
console.log("El volumen de la esfera es: " + volumenEsfera(radio) + " m^3");
