import { templateCards } from "./templates.js"

const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

const contenedorCards = document.getElementById('container');



export const pintarPokemones =  async data => {

    for(let i=0 ; i<data.results.length ; i++){
        //console.log(data.results[i])
        consultarBotones(data)
        try {
            let respuesta = await fetch(data.results[i].url)
            let pokemon = await respuesta.json()
            //console.log(respuesta, pokemon)
            templateCards(pokemon)
        } catch (error) {
            console.log(error)
        }
    }    

    //console.log(data)
    nextBtn.value = data.next
    prevBtn.value = data.previous

    //pasarPagina(nextBtn.value )
}


const pasarPagina = async (changePage) =>{
    try {
        let respuesta = await fetch(changePage)
        let pokemon = await respuesta.json()
        //console.log(pokemon);
        pintarPokemones(pokemon)
    } catch (error) {
        console.log(error)
    }
}

const consultarBotones = (data) =>{
    //console.log(data.results[0])
    let firstPokemon = data.results[0]
    if(firstPokemon){
        prevBtn.style.display = 'block';
    }else{
        prevBtn.innerHTML = "";
    }
}

nextBtn.addEventListener('click', 
function(){
    contenedorCards.innerHTML = "";
    pasarPagina(nextBtn.value);
})
prevBtn.addEventListener('click', 
function(){
    contenedorCards.innerHTML = "";
    pasarPagina(prevBtn.value);
})