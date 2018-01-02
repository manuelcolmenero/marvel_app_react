/* ****************************************** */
/* I M P O R T S */
/* ****************************************** */
// Imports REACT
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';

// Imports REDUX
import { connect } from 'react-redux'
import * as CharactersActions from 'marvel_app_react/src/redux/actions/characters'

// Import ImagePicker
import ImagePicker from 'react-native-image-picker'

// Imports PROPIOS
import { colors } from 'marvel_app_react/src/commons'
import { Input, Button } from 'marvel_app_react/src/widgets'

class CharactersNew extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            nameError: '',
            description: '',
            descriptionError: '',
            image: null,
        }
    }

    validateForm() {
        let valid = true
        let errors = {}

        if (!this.state.name) {
            errors.name = 'Introduce un nombre valido.'
            valid = false
        }

        if (!this.state.description) {
            errors.description = 'Introduce una descripción valida.'
            valid = false
        }

        this.setState({
            nameError: errors.name ? errors.name : '',
            descriptionError: errors.description ? errors.description : '',
        })

        return valid
    }

    onSubmit() {

        if (this.validateForm()) {

            const characterData = {
                name: this.state.name,
                image: this.state.image ? 'data:image/jpeg;base64,' + this.state.image.data : null,
                description: this.state.description
            }

            // Aquí habria que realizar la llamada al post 
            // this.props.postCharacter(characterData) 
            console.log('Datos personaje introducidos: ', characterData)

            // Works on both iOS and Android
            Alert.alert(
                'Aviso',
                'Funcionalidad no disponible',
                [
                    { text: 'Confirmar', },
                ],
                { cancelable: false }
            )

        }
    }

    onSelectImageTapped() {
        const options = {
            title: 'Seleccionar imagen',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };


        ImagePicker.showImagePicker(options, (response) => {
            //console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                this.setState({
                    image: response
                });
            }
        });

    }

    render() {

        const imageUri = this.state.image ? { uri: this.state.image.uri } : null
        const imageButtonText = this.state.image ? this.state.image.fileName : 'Elegir imagen'

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>

                    <Image source={imageUri} style={styles.imageContainerBackground} resizeMode={'cover'} />

                    <TouchableOpacity style={styles.button} onPress={() => this.onSelectImageTapped()} >
                        <Text style={styles.textButton}>{imageButtonText}</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={(v) => this.setState({ name: v })}
                        value={this.state.name}
                        error={this.state.nameError}
                        label={'Nombre:'}
                        placeholder={'Spider-Man'}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={(v) => this.setState({ description: v })}
                        value={this.state.description}
                        error={this.state.descriptionError}
                        label={'Descripción:'}
                        placeholder={'Descripción de personaje.'}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        label={'Guardar'}
                        onPress={() => this.onSubmit()}
                        isFetching={this.props.isFetching}
                    />
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.characters.isFetching,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        postCharacter: (data) => {
            /*
            Se ejecuta la llamada a grabar el personaje.
            Se deja comentada dado que de ninguna forma iba a funcionar
            dispatch(CharactersActions.postCharacter(data))
            */
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersNew)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.containerBackground,
    },

    imageContainer: {
        width: '100%',
        height: 200,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageContainerBackground: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },

    button: {
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 6,
    },

    textButton: {
        color: 'white',
        fontWeight: '600',
    },

    inputContainer: {
        margin: 20,
    },

    buttonContainer: {
        margin: 20,
    },

})