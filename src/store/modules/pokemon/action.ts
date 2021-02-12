import { IPOKEMON } from "./reducer";
function requestPokemonApi(){
    return {
        type: 'POKEMON_API_REQUEST'
    }
}
function requestPokemonSuccess(data: IPOKEMON){
    return {
        type: 'POKEMON_API_REQUEST_SUCCESS',
        payload: data
    }
}
function requestDetailsPokemon(data: IPOKEMON){
    console.log(data)
    return {
        type: 'POKEMON_API_REQUEST_DETAILS',
        payload: data
    }
}
function requestPokemoneError(){
    return {
        type: 'POKEMON_API_REQUEST_ERROR',
    }
}
//DETAILS OF POKEMON 

export {
    requestPokemonSuccess,
    requestPokemonApi,
    requestDetailsPokemon,
    requestPokemoneError
}