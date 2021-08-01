import React, { useEffect, useContext } from 'react';
import { View, Text, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, Keyboard, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Background } from '../components/Background';
import { WhiteImage } from '../components/WhiteImage';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any, any>{}

export const LoginScreen = ( { navigation }: Props ) => {

    const { signIn, errorMessage, removeError } = useContext(AuthContext);

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (errorMessage.length === 0) return;

        Alert.alert(
            'Login incorrecto',
            errorMessage,
            [
                {
                    text: 'Ok',
                    onPress: removeError
                }
            ]
        );

    }, [errorMessage]);

    const onLogin = () => {
        console.log({ email, password });
        Keyboard.dismiss();

        signIn({ correo: email, password });
    }

    return (
        <>
            {/* Background */}
            <Background />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                // Scroll al abrir el teclado
                behavior={ (Platform.OS === 'ios') ? 'padding' : 'height' }
            >

                <View style={ loginStyles.formContainer }>
                    {/* Keyboard avoid view */}
                    <WhiteImage />

                    <Text style={ loginStyles.title }>Login</Text>

                    <Text style={ loginStyles.label }>Email</Text>
                    <TextInput
                        placeholder="Ingrese su Email"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        // TODO
                        onChangeText={ (value) => onChange(value, 'email' ) }
                        value={ email }
                        onSubmitEditing={ onLogin }
                        
                        autoCapitalize="none"
                        autoCorrect={ false }

                    />

                    <Text style={ loginStyles.label }>Contraseña</Text>
                    <TextInput
                        placeholder="*****"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        underlineColorAndroid="white"
                        secureTextEntry
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        // TODO
                        onChangeText={ (value) => onChange(value, 'password' ) }
                        value={ password }
                        onSubmitEditing={ onLogin }

                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

                    {/* Boton Login */}
                    <View style={ loginStyles.buttonContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ loginStyles.button }
                            onPress={ onLogin }
                        >
                            <Text style={ loginStyles.buttonText }>Login</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Crear nueva cuenta */}
                    <View style={ loginStyles.newUserContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            onPress={ () => navigation.replace('RegisterScreen') }
                        >
                            <Text style={ loginStyles.buttonText }>Registrarse</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}
