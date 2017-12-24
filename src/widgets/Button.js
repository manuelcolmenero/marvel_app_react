// Imports
import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Text, ActivityIndicator } from 'react-native'
import { colors } from 'marvel_app_react/src/commons'

export default class Button extends Component {

    static defaultProps = {
        labelStyle: {},
        containerStyle: {},
        spinnerColor: 'white',
        label: '',
        onPress: () => { },
        isFetching: false,
    }

    _onPress() {

        if (!this.props.isFetching) {
            this.props.onPress()
        }

    }
    render() {
        return (
            <TouchableOpacity style={[styles.container, this.props.containerStyle]} onPress={() => this._onPress()}>
                <Text style={[styles.label, this.props.labelStyle]}>
                    {this.props.label}
                </Text>
                {this.props.isFetching ? <ActivityIndicator animating={true} color={'white'} style={styles.spinner} /> : null}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'grey',
        borderRadius: 4,
        flexDirection: 'row',
    },

    label: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 16,
    },

    spinner: {
        marginLeft: 20,
    }
})