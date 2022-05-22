//arreglo a utilizar
const dado = [1, 2, 3, 4, 5, 6];
//funcion que recibe como parametro un arreglo y que randomiza el inice del mismo
const muestraNumerosRandom = (arreglo) => {
let indiceRandom = Math.floor(Math.random()*arreglo.length);
let numeroRandom = arreglo[indiceRandom];
return numeroRandom;
}
//mensaje con instrucciones sobre el juego
const mensajeInicio = confirm(`
    Bienvenido a este juego de azar!!!
    Consiste en intentar conseguir 2 veces el 
    mismo número al lanzar un dado virtual.

    Instrucciones:
        - Debes conseguir dos veces el mismo numero para ganar
        - Solo tienes 3 intentos
        - Si no lo consigues en los 3 intentos perderás tu alma
        - Diviértete! 
    `);
// Condicional que determina si el usuario dio aceptar
if(mensajeInicio == true){
    //se definen variables que contendran el numero de intentos y el arreglo con los numeros obtenidos
    let numeroDeIntentos = 1;
    let numerosObtenidos = [];
    //funcion que determina si un arreglo contiene elementos repetidos
    let comparaNumeros = (arr) =>{
        return arr.some(function(v,i) { return arr.indexOf(v,i+1)>-1 })
    }
    /*funcion que simula el lanzamiento de dado. Primero presenta un alert para empezar el lanzamiento, luego se agrega el numero obtenido a
    el arreglo con los numeros finales y añade +1 al contador de intentos */
    let lanzarDado = () => {
        alert(`Deseas lanzar el dado? (Intento ${numeroDeIntentos})
        valores obtenidos: ${numerosObtenidos}
        `)
        let contenedor = numerosObtenidos.push(muestraNumerosRandom(dado));
        console.log(numerosObtenidos);
        numeroDeIntentos++;
        return numerosObtenidos
    }
    //Se anidan 2 if para para condicionar los lanzamientos y finalmente evalua si hay repeticiones dentro del arreglo
    lanzarDado();
    numeroDeIntentos <= 3 ? lanzarDado(): null
    numeroDeIntentos <= 3 ? lanzarDado(): null
    comparaNumeros(numerosObtenidos) ? alert(`valores obtenidos: ${numerosObtenidos}    Has ganado!`):alert(`valores obtenidos: ${numerosObtenidos}      Perdiste MUAJAJAJJA`)

} 
