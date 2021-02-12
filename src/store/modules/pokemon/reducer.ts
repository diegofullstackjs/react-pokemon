export interface IPOKEMONRESULT {
    name: string
    url: string
}
export interface IPOKEMON {
    loading: boolean
    error: boolean
    count: number
    next: string | null
    previous: string | null
    results: IPOKEMONRESULT[] | null  
}
export interface ActionType {
    type: string,
    payload: {
        count: number | null
        next: string | null
        previous: string | null
        results: IPOKEMONRESULT[] | null
    }
}
const INITIAL_STATE : IPOKEMON  = {
    loading: false,
    error: false,
    count: 0,
    next: null,
    previous: null,
    results: []
}
function pokemonReducer(state=INITIAL_STATE,action: ActionType){
    switch(action.type) {
        case 'POKEMON_API_REQUEST':
            return{
                ...state,
                loading: true,
                error: false
            }
        case 'POKEMON_API_REQUEST_SUCCESS':
            if(state.results !== null){
                return {
                    ...state,
                    loading:false,
                    error: false,
                    count: action.payload.count,
                    next: action.payload.next,
                    previous: action.payload.previous,
                    results: [
                        ...state.results,
                        action.payload.results
                    ]
                    }
            }else {

                return{
                    ...state,
                    loading:false,
                    error: false,
                    count: action.payload.count,
                    next: action.payload.next,
                    previous: action.payload.previous,
                    results: action.payload.results
                }
            }
        case 'POKEMON_API_REQUEST_ERROR':
            return {
                ...state,
                error: true,
                loading:false
            }
        default:
            return state

    }
}

export default pokemonReducer