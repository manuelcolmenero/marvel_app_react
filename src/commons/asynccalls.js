// Imports
import axios from 'axios'
import * as constants from 'marvel_app_react/src/commons/constants'

// Funciones de listado
export function fetchCharactersList(publicApiKey) {

    return new Promise(function (resolve, reject) {
        // Se obtiene el listado de personajes de forma asincrona
        const fetchUrl = FETCH_URL_CHARACTERS_LIST + publicApiKey
        axios.get(fetchUrl)
            .then((response) => {

                // Si existen datos deja pasar, pero si no hay datos devuelve array vacio
                const nuestraLista = response.data && response.data.records ? response.data.records : []
                resolve(nuestraLista)
            })
            .catch((error) => {

                reject(error)
            });
    })
}