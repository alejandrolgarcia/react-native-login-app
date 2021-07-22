import React from 'react';
import { View, Text, TextInput, Platform, TouchableOpacity } from 'react-native';
import { Background } from '../components/Background';
import { WhiteImage } from '../components/WhiteImage';
import { loginStyles } from '../theme/loginTheme';

export const LoginScreen = () => {
    return (
        <>
            {/* Background */}
            <Background />

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
                    
                    autoCapitalize="none"
                    autoCorrect={ false }

                />

                <Text style={ loginStyles.label }>Contraseña</Text>
                <TextInput
                    placeholder="*****"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    underlineColorAndroid="white"
                    style={[
                        loginStyles.inputField,
                        ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"

                    // TODO
                    
                    autoCapitalize="none"
                    autoCorrect={ false }
                />

                {/* Boton Login */}
                <View style={ loginStyles.buttonContainer }>
                    <TouchableOpacity
                        activeOpacity={ 0.8 }
                        style={ loginStyles.button }
                    >
                        <Text style={ loginStyles.buttonText }>Login</Text>
                    </TouchableOpacity>
                </View>

                {/* Crear nueva cuenta */}
                <View style={ loginStyles.newUserContainer }>
                    <TouchableOpacity
                        activeOpacity={ 0.8 }
                        onPress={ () => console.log('OnPress') }
                    >
                        <Text style={ loginStyles.buttonText }>Registrarse</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
