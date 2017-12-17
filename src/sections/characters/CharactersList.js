/* ****************************************** */
/* I M P O R T S */
/* ****************************************** */
// Imports REACT
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Imports REDUX
import { connect } from 'react-redux'

// Imports PROPIOS
import { colors } from 'marvel_app_react/src/commons'
//import CharactersCell from 'marvel_app_react/src/sections/characters/CharactersCell'
//import * as CharactersActions from 'marvel_app_react/src/redux/actions/characters'

/* ****************************************** */
/* C L A S S */
/* ****************************************** */
export default class CharactersList extends Component {

    render() {
        return (

            <View style={styles.container}>
            <Text style={styles.nameStyle}> Welcome to MARVEL CharactersList</Text>
            </View>
        )
    }
}

// Si se desea poner el color en HEX #434344
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.containerBackground,
        paddingBottom: 20,
        paddingTop: 60,

    },
    nameStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
})