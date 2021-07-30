import React, { createContext, useReducer } from 'react';
import productsApi from '../api/productsApi';
import { LoginData, Usuario } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: () => void;
    signIn: ( loginData: LoginData ) => void;
    logOut: () => void;
    removeError: () => void;  
}

const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

// Provider
export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = async ({ correo, password }: LoginData ) => {
        try {
            const { data } = await productsApi.post('/auth/login', { correo, password });
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            });
            
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const signUp = () => {}
    const logOut = () => {}
    const removeError = () => {}

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>
    )
}