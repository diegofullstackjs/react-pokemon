import axios, { AxiosResponse } from 'axios'
import {all, call, put, select, takeLatest} from 'redux-saga/effects'
import { ISTATE } from '../..'
import { requestPokemonSuccess } from './action'
import {ActionType, IPOKEMON} from './reducer'
function* getPokemon(info: ActionType) {
    yield console.log(info)
     const state:IPOKEMON = yield select((state:ISTATE) => (state.pokemon))
     let currentPage = state.next? state.next : 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';
     let pokemon:AxiosResponse<IPOKEMON> = yield call(axios.get,currentPage)
     yield put(requestPokemonSuccess(pokemon.data))
}
export default all([
    takeLatest('POKEMON_API_REQUEST',getPokemon)
])