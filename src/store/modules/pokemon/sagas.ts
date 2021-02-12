import axios, { AxiosResponse } from 'axios'
import {all, call, put, select,takeLatest} from 'redux-saga/effects'
import { requestPokemonSuccess, requestPokemoneError,requestDetailsPokemon} from './action'
import { IPOKEMON} from './reducer'
import {ISTATE} from '../../'
function* getDetailes(poke:string){
    try {
        let currentPage = yield `https://pokeapi.co/api/v2/pokemon/${poke}`
        let pokemon: AxiosResponse<IPOKEMON> = yield call(axios.get,currentPage)
        yield put(requestDetailsPokemon(pokemon.data))
    }catch{

    }
 
}
function* getPokemon() {
        try {
            let state:IPOKEMON = yield select((state:ISTATE) => state.pokemon)
            let currentPage = state.next? state.next : 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
            let pokemon: AxiosResponse<IPOKEMON> = yield call(axios.get,currentPage)
            if(pokemon.data.results) {
               for(const item of pokemon.data.results){
                   yield call(getDetailes,item.name)
               }
            }
          
            yield put(requestPokemonSuccess(pokemon.data))
        }catch{
            yield put(requestPokemoneError())
        }
         
}
function* AllSagas(){
    yield all([
        takeLatest('POKEMON_API_REQUEST',getPokemon)
    ])
}

export default AllSagas()