/* ****************************************** */
/* I M P O R T S */
/* ****************************************** */
// Imports REACT
import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native'

// Imports REDUX
import { connect } from 'react-redux'

// Imports PROPIOS
import { colors } from 'marvel_app_react/src/commons'
import { Button } from 'marvel_app_react/src/widgets'
import * as CharactersActions from 'marvel_app_react/src/redux/actions/characters'

class CharactersView extends Component {

    render() {
        const { character } = this.props

        // Se validan los datos a pintar
        const name = character.name ? character.name : ''
        const description = character.description ? character.description : ''

        // Para la imagen se cambia la que se recibe por defecto y se utiliza la landscape_large
        const thumbnail = character.thumbnail ? { uri: character.thumbnail.path + '/landscape_large.' + character.thumbnail.extension } : null

        return (
            <View style={styles.container}>
                <Image source={thumbnail} style={styles.image} resizeMode={'cover'} />
                <View style={styles.textContainer}>
                    <Text style={styles.titleStyle}>Nombre</Text>
                    <Text style={styles.descriptionStyle}> {name}</Text>
                    </View>
                    <View style={styles.textContainer}>
                    <Text style={styles.titleStyle}>Descripción:</Text>
                    <Text style={styles.descriptionStyle}> {description}</Text>
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        character: state.characters.item,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersView)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.containerBackground,
    },

    textContainer: {
        alignItems: 'center',
        padding: 20,
    },

    titleStyle: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.white,
    },

    descriptionStyle: {
        fontSize: 16,
        color: colors.white,
    },

    image: {
        width: '100%',
        height: 200,
    },

    buttonContainer: {
        margin: 20,
    },
});