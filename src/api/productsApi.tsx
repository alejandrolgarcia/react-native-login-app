import axios  from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://react-native-cafe-app.herokuapp.com/api';

const productsApi = axios.create({ baseURL });

/**
 * Midleware que require el token en cada petición
 */
productsApi.interceptors.request.use(

    async(config) => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers['x-token'] = token;
        }
        return config;
    }
    
);

export default productsApi;