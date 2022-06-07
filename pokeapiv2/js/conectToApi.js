import { pintarPokemones } from "./pagination.js"
import { pintarCardDescription } from "./cardDescription.JS"
import {bolsa} from "./buttons.js"



const urlGet = 'https://pokeapi.co/api/v2/';



export const getPagination = async () => {
    try {
        const res = await fetch(`${urlGet}pokemon/`);
        const data = await res.json();
        pintarPokemones(data)
        return data
    }catch (error) {
        console.log(error)
    }
    if(localStorage.getItem('.bolsa')){
        bolsa = JSON.parse(localStorage.getItem('bolsa'));
        pintaBolsa()
    }
}

export const getPokemon = async id => {
    try {
        const res = await fetch(`${urlGet}pokemon/${id}/`);
        const data = await res.json();
        //console.log(data)
        pintarCardDescription(data)
        return data
    }catch (error) {
        console.log('pokemon no existe')
    }
}

export const getSpecies = async id => {
    try {
        const res = await fetch(`${urlGet}pokemon-species/${id}/`)
        const data = await res.json()
        console.log(data)
        return data
    }catch (error) {
        console.log(error)
    }
}