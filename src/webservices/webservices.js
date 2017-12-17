// Imports
import axios from 'axios'
import * as constants from 'marvel_app_react/src/webservices/constants'

// Funciones configuración conexión
export function configureAxios() {
    axios.defaults.baseURL = GLOBAL_BASEURL_MARVEL_GATEWAY
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.defaults.headers.common['Referer'] = GLOBAL_APPURL_REFERER
}

// Función de listado
export function fetch(url) {
    return new Promise(function(resolve, reject) {

        axios.get(url).then( response => {

            if(response.data)
                resolve( response.data )
            else 
                reject( response )

        }).catch( error => {
            reject( error )
        });
    })
}

// Función de update
export function post(url, data) {
    return new Promise(function(resolve, reject) {

        axios.post(url, data).then( response => {

            if(response.data)
                resolve( response.data )
            else 
                reject( response )

        }).catch( error => {
            reject( error )
        });
    })
}