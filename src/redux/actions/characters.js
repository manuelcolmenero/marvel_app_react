import * as types from '../types/characters'
import { fetch, post } from 'marvel_app_react/src/webservices/webservices'

import { constants, apikey } from 'marvel_app_react/src/commons'


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
export function fetchCharactersList() {
    return (dispatch, getState) => {

        dispatch(setCharactersFetching(true))

        // Se obtiene el listado de personajes de forma asincrona
        const fetchUrl = constants.FETCH_URL_CHARACTERS_LIST +
            constants.FETCH_URL_APIKEY + apikey.APIKEY

        fetch(fetchUrl)
            .then(response => {
                dispatch(setCharactersFetching(false))
                // console.log("fetchCharactersList response: ", response.data.results)

                const list = response.data.results

                // Segunda llamada al dispatch es para devolver los datos recuperados 
                // al reducer
                dispatch(updateCharactersList(list))
            })
            .catch(error => {
                dispatch(setCharactersFetching(false))
                // console.log("fetchCharactersList error: ", error)
            })
    }
}