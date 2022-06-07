import { getPokemon } from "./conectToApi.js" 
import { pintaBolsa } from "./templates.js"

export let bolsa = {}


const container = document.getElementById('container')
container.addEventListener('click', e => {
    mostrarSoloCard(e)
})
const containerSoloCard = document.getElementById('solo-card-container')
containerSoloCard.addEventListener('click', e => {
    agregarBolsa(e)
})
const containerBolsa= document.getElementById('footer')
containerBolsa.addEventListener('click', e => {
    liberarPokemon(e)
})
const mostrarSoloCard = e => {
    if(e.target.classList.contains('ver')){
        getPokemon(e.target.value)
    }
}

const agregarBolsa = e => {
    if(e.target.classList.contains('gotcha')){
        setBolsa(e.target.parentElement)
    }
    e.stopPropagation()
}

const setBolsa = objeto => {
    const capturado = {
        nombre : objeto.querySelector('.name').textContent,
        id: objeto.querySelector('.gotcha').dataset.id
    }
    
    bolsa[capturado.id] = {...capturado}
    pintaBolsa(bolsa)
}

export const closeWindow = () => {
    const closeBtn = document.querySelector('.cerrar')
    const soloCard = document.querySelector('#solo-card-container')

    closeBtn.addEventListener('click', () => {
        soloCard.innerHTML = ''
        document.body.classList.remove('no-scroll')
    })
}

const liberarPokemon = e => {
    if(e.target.classList.contains('liberar')){
        e.target.parentElement.style.display = 'none'
    }
    e.stopPropagation()
}
