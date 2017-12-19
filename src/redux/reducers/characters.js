import * as types from '../types/characters'

const initialState = {
    isFetching: false,
    list: [],
    item: null,
}

// Se devuelve desde el action las propiedades (Type y Value) para ser tratados por el reducer
export default function reducer(state = initialState, action = {}) {
    console.log('types: ', action.type)
    switch (action.type) {

        
        // Se pregunta por el Type recibido del action
        case types.CHARACTERS_UPDATE_LIST:
            return {
                ...state,
                list: action.value
            }
        case types.CHARACTERS_UPDATE_CHARACTER:
            return {
                ...state,
                item: action.value
            }
        case types.CHARACTERS_SET_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }
        default:
            return state;
    }
}