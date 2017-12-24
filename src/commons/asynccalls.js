// Imports
import axios from 'axios'
import { constants, apikey } from 'marvel_app_react/src/commons'

// Funciones de listado
export function fetchCharactersList() {

    return new Promise(function (resolve, reject) {
        // Se obtiene el listado de personajes de forma asincrona
        const fetchUrl =
        constants.FETCH_URL_CHARACTERS_LIST +
        constants.FETCH_URL_APIKEY + apikey.APIKEY

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