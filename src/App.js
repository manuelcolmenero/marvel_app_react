/* ****************************************** */
/* I M P O R T S */
/* ****************************************** */
// Imports REACT
import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';

// Imports REDUX
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

// Imports PROPIOS
import { colors } from 'marvel_app_react/src/commons'

// - Sections
import CharactersList from 'marvel_app_react/src/sections/characters/CharactersList'
import CharactersNew from 'marvel_app_react/src/sections/characters/CharactersNew'

// - Webservices
import * as webservices from 'marvel_app_react/src/webservices/webservices'

// - Reducers
import * as reducers from './redux/reducers'

const reducer = combineReducers(reducers) // Se combinan los reducers
const store = createStore( // Se crea el store con:
    reducer, // Reducer propio
    applyMiddleware(thunk) // Middleware propio
)

/* ****************************************** */
/* C L A S S */
/* ****************************************** */
// Class MAIN
export default class App extends Component {

    // Lo primero que se hace es configurar la conexión y el diseño de la aplicación
    componentWillMount() {
        webservices.configureAxios()
        StatusBar.setBarStyle('light-content')

    }

    // Se incluye el boton de añadir personajes
    renderAddCharacterButton() {
        return (
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => Actions.CharactersNew()} >

                <Text style={styles.addButtonText}>{'Añadir'}</Text>
            </TouchableOpacity>
        )

    }

    // Se ejecuta la aplicación
    render() {
        return (

            <Provider store={store} >
                <Router>
                    <Scene key="root">
                        <Scene
                            key={'CharactersList'}
                            component={CharactersList}
                            navigationBarStyle={styles.navBar}
                            navBarButtonColor={colors.white}
                            renderRightButton={() => this.renderAddCharacterButton()}
                        />
                        <Scene
                            key={'CharactersNew'}
                            component={CharactersNew}
                            navigationBarStyle={styles.navBar}
                            navBarButtonColor={colors.white}
                            title={'Nuevo Personaje'}
                        />
                    </Scene>
                </Router>
            </Provider>
        );
    }
}

/* ****************************************** */
/* S T Y L E S H E E T */
/* ****************************************** */
// Constantes de estilo
const styles = StyleSheet.create({
    navBar: {
        backgroundColor: colors.navBarbackground,
    },
    addButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    addButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
