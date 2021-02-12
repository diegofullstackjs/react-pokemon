import {all} from 'redux-saga/effects'
import SagaPokemon from './pokemon/sagas'
export default function* rootSaga() {
    yield all([
        SagaPokemon,
        
    ])
}