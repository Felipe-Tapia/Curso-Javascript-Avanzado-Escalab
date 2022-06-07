import { getPokemon, getSpecies, getPagination } from "./conectToApi.js"
import {pintaBolsa} from "./templates.js"

const busquedaIngresada = document.querySelector('#buscador-pkmn')
const busquedaBtn = document.querySelector('#buscador-btn')



busquedaBtn.addEventListener('click', () => {
    const id = busquedaIngresada.value
    getPokemon(id)
    document.body.classList.add('no-scroll');
})


//getSpecies(id)

getPagination()
window.addEventListener('load', () => {

    document.getElementById('loader').classList.toggle('loader2');

})




// 
// busquedaBtn2.addEventListener('click', () => {
//     const id = busquedaBtn2.value
//     getPokemon(id)
//     document.body.classList.add('no-scroll');
// })
const pintarDesdeLocalStorage = () => {
    if(localStorage.getItem('bolsaStorage')){
        console.log(JSON.parse(localStorage.getItem('bolsaStorage')))
        const bolsa = JSON.parse(localStorage.getItem('bolsaStorage'));
        return bolsa
    }
    pintaBolsa(bolsa)
}

    
window.addEventListener('DOMContentLoaded', e => {
    pintarDesdeLocalStorage()
} )
