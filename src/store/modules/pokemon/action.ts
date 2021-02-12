import { IPOKEMON } from "./reducer";
function requestPokemonApi(){
    return {
        type: 'POKEMON_API_REQUEST'
    }
}
function requestPokemonSuccess(data: IPOKEMON){
    console.log()
    return {
        type: 'POKEMON_API_REQUEST_SUCCESS',
        payload: data
    }
}

export {
    requestPokemonSuccess,
    requestPokemonApi
}