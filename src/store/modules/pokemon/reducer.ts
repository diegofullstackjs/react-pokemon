interface EFFECTENTRIES {
    effect: string
    short_effect: string
}
export interface OBJECTPOKEMON {
    name: string,
    effect_entries: EFFECTENTRIES[]
}
export interface IPOKEMONRESULT{
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
    pokemon_details?: OBJECTPOKEMON[] | undefined
}
export interface ActionType {
    type: string,
    payload: {
        count: number | null
        next: string | null
        previous: string | null
        results: IPOKEMONRESULT[] | null
        pokemon_details?: OBJECTPOKEMON[]
    }
}
const INITIAL_STATE : IPOKEMON  = {
    loading: false,
    error: false,
    count: 0,
    next: null,
    previous: null,
    results: [],
    pokemon_details: []
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
                return{
                    ...state,
                    loading:false,
                    error: false,
                    count: action.payload.count,
                    next: action.payload.next,
                    previous: action.payload.previous,
                    results: action.payload.results
                }
        case 'POKEMON_API_REQUEST_ERROR':
            return {
                ...state,
                error: true,
                loading:false
            }
        case 'POKEMON_API_REQUEST_DETAILS' : 
        return {
            ...state,
            error: false,
            loading: false,
            pokemon_details: action.payload
        }
        default:
            return state

    }
}

export default pokemonReducer