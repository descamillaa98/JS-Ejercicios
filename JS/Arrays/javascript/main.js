//Promediar calificaciones enviadas por usuarios

const calificaciones = [4.3, 5.0, 4.1, 4.4, 3.1, 4.0];

const suma = calificaciones.reduce((sumador,calificacion) => sumador + calificacion)

/*
function calcularPromedio(){
    let sumador = 0
    for(let i=0 ; i < calificaciones.length ; i++){
        sumador += calificaciones[i]
        console.log("El sumador es: " + sumador)
    }
    return sumador/calificaciones.length
}
    */

// let promedio = calcularPromedio()
let promedio = suma/calificaciones.length
console.log("El promedio es: " + promedio);
console.log("El promedio redondeado es: " + promedio.toFixed(1));