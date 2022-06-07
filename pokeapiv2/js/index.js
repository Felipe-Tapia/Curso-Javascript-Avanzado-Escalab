import { getPokemon, getSpecies, getPagination } from "./conectToApi.js"


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