import axios from 'axios';

const url = 'https://ecommerce--react.herokuapp.com';

export const getAllItems = (category) => {
    const type = ((category && category !== 'undefined') ? `?category=${category}` : '')
    return fetch(`${url}/items${type}`)
        .then(res => res.json())
        .catch(err => alert(err))
};


export const register = (username, email, password) => {
    const data = {
        username,
        email,
        password
    }

    return axios.post('/register', data);
}

export const login = (email, password) => {
    const data = {
        email,
        password
    }

    return axios.post('/login', data);
}

export const isAuth = () => {
    return axios.get('/user');
}

