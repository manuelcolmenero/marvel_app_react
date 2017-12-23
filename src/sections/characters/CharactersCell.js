// Imports
import React, { Component } from 'react';
import { Platform, View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default class CharactersCell extends Component {

    // Propiedades por defecto para prevenir errores y documentar el componente
    static defaultProps = {
        item: {},
        onSelect: () => { },
    }

    render() {
        // Declaración de variables 
        const { item, onSelect } = this.props

        // Se validan los datos a pintar
        const name = item.name ? item.name : ''
        const thumbnail = item.thumbnail ? { uri: item.thumbnail.path + '/landscape_large.' + item.thumbnail.extension } : null

        return (
            <TouchableOpacity>
                <Image source={thumbnail} style={styles.imageStyle} resizeMode={'cover'}/>
                <View style={styles.containerStyle}>
                    <Text style={styles.nameStyle}> {name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}



const styles = StyleSheet.create({

    imageStyle: {
        height: 250,
    },

    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left:0,
        backgroundColor: 'rgba(30,30,30,0.5)',

        ...Platform.select({
            ios: {
                shadowColor: 'rgba(255,255,255,0.2)',
                shadowOpacity: 1,
                shadowOffset: { height: 4, width: 4 },
                shadowRadius: 2,
            },
            android: {
                elevation: 4,
            },
        })
    },

    nameStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F7F7F7',
    },
}) 