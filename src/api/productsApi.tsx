import axios  from "axios";

const baseURL = 'https://react-native-cafe-app.herokuapp.com/api';

const productsApi = axios.create({ baseURL });

export default productsApi;