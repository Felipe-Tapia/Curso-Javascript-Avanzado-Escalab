const urlGet = 'https://pokeapi.co/api/v2/pokemon/';
const card = document.getElementById('nombre-pokemon')
const contenedorCards = document.getElementById('container');
const btnSiguiente = document.querySelector('.next-pag')
const btnAnterior = document.querySelector('.prev-pag')
const fragment = document.createDocumentFragment()
const template = document.getElementById('template-cards').content

let pokedex = {}

document.addEventListener('DOMContentLoaded',() =>{
    //console.log(template.getElementById('name'))

    cambioDePagina()
    //console.log(numeroDePokemons)
    muestraPokemons(numeroDePokemons[0],numeroDePokemons[1])
    ocultarBotones()
});

const fetchData = async cantidad => {
    try {
        const res = await fetch(urlGet + cantidad);
        const pokemon = await res.json();
        pintarPokemons(pokemon)
    }catch (error) {
        console.log(error)
    }
}

btnSiguiente.onclick = () => {
    paginaSiguiente()
    ocultarBotones()
}
btnAnterior.onclick = () => {
    paginaAnterior()
    ocultarBotones()
}

const muestraPokemons = (inicio, fin) => {
    for(let i=inicio ; i<=fin ; i++){
        console.log(i)
        fetchData(i)
    }
}

const pintarPokemons = pokemon => {
    template.querySelector('img').setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`)
    template.getElementById('id-pkmn').textContent ='ID: '+ pokemon.id
    template.getElementById('name').textContent = pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)
    template.getElementById('type').textContent ='Tipo : '+ pokemon.types.map((tipo, index) => {return tipo.type.name})
    template.getElementById('height').textContent ='Altura: '+ pokemon.height+' ft'
    template.getElementById('weight').textContent ='Peso: '+ pokemon.weight+' lb'
    //console.log(template.getElementById('heigth'))
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    contenedorCards.appendChild(fragment)
}


const cambioDePagina = () => {
    inicioPokemons = 1;
    finPokemons = 9
    numeroDePokemons = [inicioPokemons, finPokemons ]
    return numeroDePokemons
}

const paginaSiguiente = (cambioDePagina) => {
    contenedorCards.innerHTML = ''
    numeroDePokemons[0] = numeroDePokemons[0]+9
    numeroDePokemons[1] = numeroDePokemons[1]+9
    muestraPokemons(numeroDePokemons[0],numeroDePokemons[1])
    //console.log(numeroDePokemons[0]) 
}
const paginaAnterior = (cambioDePagina) => { 
    console.log(numeroDePokemons[0]) 
        contenedorCards.innerHTML = ''
        numeroDePokemons[0] = numeroDePokemons[0]-9
        numeroDePokemons[1] = numeroDePokemons[1]-9
        muestraPokemons(numeroDePokemons[0],numeroDePokemons[1])
        //console.log(numeroDePokemons[0]) 
}


const ocultarBotones = () => {
    if(numeroDePokemons[0] === 1){
        btnAnterior.style.display = 'none'
    }else{
        btnAnterior.style.display = 'inline-block'
    }
}