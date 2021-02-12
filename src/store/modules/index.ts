import {combineReducers} from 'redux'
import PokemonReducer from './pokemon/reducer'



export default combineReducers({
    pokemon: PokemonReducer
})