import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-171c1.firebaseio.com/'
});

export default instance;