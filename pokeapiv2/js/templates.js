import {bolsa} from "./buttons.js"

const contenedorCards = document.getElementById('container');
const contenedorSoloCards = document.getElementById('solo-card-container');
const contenedorBolsa = document.getElementById('footer');


const template = document.getElementById('template-cards').content;
const templateDescription = document.getElementById('template-description').content;
const templateBolsa = document.getElementById('template-carrito').content;




const fragment = document.createDocumentFragment();

export const templateCards = pokemon => {
    template.querySelector('img').setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`)
    template.getElementById('id-pkmn').textContent ='ID: '+ pokemon.id
    template.querySelector('.name').textContent = pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)
    template.getElementById('type').textContent ='Tipo : '+ pokemon.types.map((tipo, index) => {return tipo.type.name})
    template.getElementById('height').textContent ='Altura: '+ pokemon.height+' ft'
    template.getElementById('weight').textContent ='Peso: '+ pokemon.weight+' lb'
    template.querySelector('.ver').value = pokemon.id
    
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    contenedorCards.appendChild(fragment)

    // pintarCarrito()
}


export const templateSoloCards = data => {
    templateDescription.querySelector('img').setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`)
    templateDescription.querySelector('.id').textContent ='ID: '+ data.id
    templateDescription.querySelector('.name').textContent = data.name.charAt(0).toUpperCase()+data.name.slice(1)
    templateDescription.querySelector('.type').textContent = data.types.map((tipo, index) => {return tipo.type.name})
    templateDescription.querySelector('.height').textContent = 'Altura: '+ data.height+' ft'
    templateDescription.querySelector('.weight').textContent = 'Peso: '+ data.weight+' lb'
    templateDescription.querySelector('.gotcha').dataset.id = data.id


    const clone = templateDescription.cloneNode(true)
    fragment.appendChild(clone)
    contenedorSoloCards.appendChild(fragment)
}

export const pintaBolsa = data => {
    Object.values(data).forEach(pokemon => {
        const newLocal = pokemon.name;
        templateBolsa.querySelector('.name').textContent = newLocal
    })

    const clone = templateBolsa.cloneNode(true)
    fragment.appendChild(clone)
    contenedorBolsa.appendChild(fragment)

    localStorage.setItem('bolsaStorage', JSON.stringify(bolsa))
}