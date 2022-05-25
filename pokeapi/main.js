//Definiciones de las constantes usadas en el script
const urlGet = 'https://pokeapi.co/api/v2/pokemon/';
const card = document.getElementById('nombre-pokemon')
const contenedorCards = document.getElementById('container');
const btnSiguiente = document.querySelector('.next-pag')
const btnAnterior = document.querySelector('.prev-pag')
const fragment = document.createDocumentFragment()
const btnAtrapar = document.querySelector('.gotcha')
const template = document.getElementById('template-cards').content
const buscador = document.getElementById('buscador-pkmn')
const buscadorBtn = document.getElementById('buscador-btn')
const resultado = document.getElementById('result')
const contenedorSoloTemplate = document.getElementById('solo-card-container');
const soloTemplate = document.getElementById('template-solo-card').content
const contenedorPokedex = document.getElementById('contenedor-pokedex');

let pokedex = {}

//Detecta el evento click dentro de los templates creados y ejecuta la funcion atraparPokemon()
contenedorCards.addEventListener('click', e => {
    atraparPokemon(e)
})

//Espera que el contenido del DOM cargue para poder ejecutar funciones
document.addEventListener('DOMContentLoaded',() =>{
    cambioDePagina()
    //console.log(numeroDePokemons)
    muestraPokemons(numeroDePokemons[0],numeroDePokemons[1])
    ocultarBotones()
});

//Obtencion de los datos proporcionados por la API con el uso de async/await
const fetchData = async cantidad => {
    try {
        const res = await fetch(urlGet + cantidad);
        const pokemons = await res.json();
        pintarPokemons(pokemons)  
    }catch (error) {
        console.log(error)
    }
}

const fetchData2 = async busqueda => {
    try {
        const res = await fetch(urlGet + busqueda);
        const pokemons = await res.json();
        if(!pokemons.length > 0) {
            pintarSoloCards(pokemons)
        }else{
            console.log('chai')
        }
        //console.log(pokemons.results[0].name)
       //const ola = listadoPokemons.filter(listadoPokemons => {return listadoPokemons === 'bulbasaur'})
        //console.log(listadoPokemons[3])

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
// btnAtrapar.onclick = () => {
    // }
    //     document.getElementById('gotcha-img').style.display = 'none'
    
const muestraPokemons = (inicio, fin) => {
    for(let i=inicio ; i<=fin ; i++){
        //console.log(i)
        fetchData(i)
    }
}

const pintarPokemons = pokemons => {
    template.querySelector('img').setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons.id}.png`)
    template.getElementById('id-pkmn').textContent ='ID: '+ pokemons.id
    template.getElementById('name').textContent = pokemons.name.charAt(0).toUpperCase()+pokemons.name.slice(1)
    template.getElementById('type').textContent ='Tipo : '+ pokemons.types.map((tipo, index) => {return tipo.type.name})
    template.getElementById('height').textContent ='Altura: '+ pokemons.height+' ft'
    template.getElementById('weight').textContent ='Peso: '+ pokemons.weight+' lb'
    template.querySelector('.gotcha').textContent = pokemons.id


    //console.log(template.getElementById('heigth'))
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    contenedorCards.appendChild(fragment)

}

const pintarSoloCards = pokemons => {

    soloTemplate.getElementById('solo-name').textContent = pokemons.name.charAt(0).toUpperCase()+pokemons.name.slice(1)

    //console.log(template.getElementById('heigth'))
    const clone = soloTemplate.cloneNode(true)
    fragment.appendChild(clone)
    contenedorSoloTemplate.appendChild(fragment)
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
    //console.log(numeroDePokemons[0]) 
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

const conteoPkmn = pokemons => {
    for (i = 0; i < pokemons.results.length; i++) {
        //console.log(pokemons.results.length)
        let nombrePokemon = pokemons.results

       //listadoPokemons.name = nombrePokemon
    //    const busquedaPorFiltro = nombrePokemon.filter(pokemons => pokemons == 'bulbasaur')
    //    if(busquedaPorFiltro == false){
    //        console.log('no sta el pokemon')
    //    }
        return nombrePokemon
        //console.log(pokemons.results[i].name)  
    }
    //console.log(pokemons)
}



const filtrarPkmn = pokemons => {
    //console.log(buscador.value)
    const busqueda = buscador.value.toLowerCase()
    //console.log(pokemons.name)
    console.log(busqueda)
    fetchData2(busqueda)
}

buscadorBtn.addEventListener('click', filtrarPkmn)

const obtenerTotalPokemons = (totalPokemons) => {
    //console.log(totalPokemons)
    for (let i = 1; i <= totalPokemons; i++){
        console.log(i)
    }
}

//Funcionalidad boton Atrapar

const atraparPokemon = e => {
//console.log(e.target)
    if(e.target.classList.contains('gotcha')){
    setPokedex(e.target.parentElement)
    }
    e.stopPropagation()    
}

const setPokedex = pokemon => {
    console.log(pokemon)
    const atrapados = {
        id:parseInt(pokemon.querySelector('.gotcha').textContent),
        nombre:pokemon.querySelector('#name').textContent,
        cantidad:1
    }
    if(pokedex.hasOwnProperty(atrapados.id)){
        atrapados.cantidad = pokedex[atrapados.id].cantidad + 1
        return atrapados.cantidad
    }

    pokedex[atrapados.id] = {...atrapados}
    console.log(pokedex)
}



// TODO:
// - Consumir pokeapi ✔️
// - Pintar pokemones en pantalla ✔️
// - Crear buscador por nombre e ID ✔️
// - Lanzar mensaje de pokemon no encontrado
// - Almacenar datos en localStorage
// - Aplicar estilos