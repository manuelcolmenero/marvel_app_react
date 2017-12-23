// Imports
import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { colors } from 'marvel_app_react/src/commons'

export default class Input extends Component {

    static defaultProps = {
        labelStyle   : {},
        inputStyle   : {},
        errorStyle   : {},
        label        : '',
        value        : '',
        error        : '',
        placeholder  : '',
        onChangeText : () => { },
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>

                <TextInput
                    value                 = {this.props.value}
                    onChangeText          = {(v) => this.props.onChangeText(v)}
                    placeholder           = {this.props.placeholder}
                    placeholderTextColor  = {'grey'}
                    style                 = {[styles.input, this.props.inputStyle]}
                    underlineColorAndroid = {'transparent'}
                />

                {this.props.error ? <Text style={[styles.error, this.props.errorStyle]}>{this.props.error}</Text> : null}

            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {

    },

    error: {
        color: colors.white,
        textAlign: 'right',
        marginTop: 4,
    },

    input: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        fontSize: 16,
        color: colors.white,
    },

    label: {
        color: colors.white,
        fontSize: 16,
        marginBottom: 10,
        fontWeight: '600',
    },
})