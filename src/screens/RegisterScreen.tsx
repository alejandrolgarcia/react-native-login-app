import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import { loginStyles } from '../theme/loginTheme';
import { WhiteImage } from '../components/WhiteImage';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}

export const RegisterScreen = ( { navigation }: Props ) => {

    const { email, password, name, onChange } = useForm({
        name: '',
        email: '',
        password: ''
    });

    const onRegister = () => {
        console.log({ name, email, password });
        Keyboard.dismiss();
    }

    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: '#5856D6' }}
                // Scroll al abrir el teclado
                behavior={ (Platform.OS === 'ios') ? 'padding' : 'height' }
            >

                <View style={ loginStyles.formContainer }>
                    {/* Keyboard avoid view */}
                    <WhiteImage />

                    <Text style={ loginStyles.title }>Registro</Text>

                    <Text style={ loginStyles.label }>Nombre</Text>
                    <TextInput
                        placeholder="Ingrese su nombre"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        // TODO
                        onChangeText={ (value) => onChange(value, 'email' ) }
                        value={ name }
                        onSubmitEditing={ onRegister }
                        
                        autoCapitalize="words"
                        autoCorrect={ false }

                    />

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
                        onSubmitEditing={ onRegister }
                        
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
                        onSubmitEditing={ onRegister }

                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

                    {/* Boton Login */}
                    <View style={ loginStyles.buttonContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ loginStyles.button }
                            onPress={ onRegister }
                        >
                            <Text style={ loginStyles.buttonText }>Crear cuenta</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Regresar al Login */}
                    <TouchableOpacity
                        onPress={ () => navigation.replace('LoginScreen') }
                        activeOpacity={ 0.8 }
                        style={ loginStyles.buttonReturn }
                    >
                        <Text style={ loginStyles.buttonText }>Ir a Login</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </>
    )
}