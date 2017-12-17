import * as types from '../types/characters'
import * as constants from 'marvel_app_react/src/commons/constants'
import { fetch, post } from 'react_native_app/src/webservices/webservices'

// Funcion que devuelve el action que actualiza
function updateCharactersList(value) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        value: value
    }
}

function setCharactersFetching(value) {
    return {
        type: types.CHARACTERS_SET_FETCHING,
        value: value
    }
}

export function updateCharactersSelected(value) {
    return {
        type: types.CHARACTERS_UPDATE_CHARACTER,
        value: value
    }
}

// Función para cargar el WS del listado
export function fetchCharactersList(publicApiKey) {
    return (dispatch, getState) => {

        dispatch(setCharactersFetching(true))

        // Se obtiene el listado de personajes de forma asincrona
        const fetchUrl = constants.FETCH_URL_CHARACTERS_LIST + publicApiKey

        fetch(fetchURL).then(response => {
            dispatch(setCharactersFetching(false))
            console.log("fetch response: ", response)
            const list = response.records

            // Segunda llamada al dispatch es para devolver los datos recuperados 
            // al reducer
            dispatch(updateCharactersList(list))
        }).catch(error => {
            dispatch(setCharactersFetching(false))
            console.log("error: ", error)
        })
    }
}