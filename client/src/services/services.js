import axios from 'axios';


export const getAllItems = (category) => {
    const type = ((category && category !== 'undefined') ? `?category=${category}` : '')
    return axios.get(`/items${type}`);
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

