import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://react-pizza-restaurant.firebaseio.com/'
});

export default instance;