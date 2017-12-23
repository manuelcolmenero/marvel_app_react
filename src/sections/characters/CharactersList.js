/* ****************************************** */
/* I M P O R T S */
/* ****************************************** */
// Imports REACT
import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Imports REDUX
import { connect } from 'react-redux'

// Imports PROPIOS

import { asynccalls, colors } from 'marvel_app_react/src/commons'

import CharactersCell from 'marvel_app_react/src/sections/characters/CharactersCell'
import * as CharactersActions from 'marvel_app_react/src/redux/actions/characters'

/* ****************************************** */
/* C L A S S */
/* ****************************************** */
class CharactersList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [],
            selected: null,
        }
    }

    componentWillMount() {
        // Se invoca la función que obtendrá los datos
        this.props.fetchCharactersList()
    }


    renderItem(item, index) {
        return (
            <CharactersCell
                item={item}
                onSelect={(character) => this.onSelect(character)}
            />
        )
    }


    onSelect(character) {
        // Pretende actualizar que casa está marcada al pulsar
        this.props.updateSelected(character)
    }

    render() {

        return (

            <View style={styles.container}>
                <FlatList
                    data          = {this.props.list}
                    renderItem    = {({ item, index }) => this.renderItem(item, index)}
                    keyExtractor  = {(item, index)     => index}
                    extraData     = {this.props}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list        : state.characters.list,
        isFetching  : state.characters.isFetching,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        // Se declara una función con un dispatch de la action de obtener datos
        fetchCharactersList: () => {
            dispatch(CharactersActions.fetchCharactersList())
        },
        updateSelected: (character) => {
            dispatch(CharactersActions.updateCharactersSelected(character))
            Actions.CharactersView({ title: character.name })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)

// Si se desea poner el color en HEX #434344
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.containerBackground,
    },
})