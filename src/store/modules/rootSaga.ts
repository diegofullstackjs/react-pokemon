import {all} from 'redux-saga/effects'
import SagaPokemon from './pokemon/sagas'

export default function* rootSaga() {
    return yield all([
        SagaPokemon,
    ])
}