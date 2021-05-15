const url = 'heroku create my-cool-project';

export const getAllItems = (category) => {
    const type = ((category && category !== 'undefined') ? `?category=${category}` : '')
    return fetch(`${url}/items${type}`)
        .then(res => res.json())
        .catch(err => alert(err))
};

function getOptions(method, body) {
    const options = {
        method,
        headers: {}
    };

    const token = localStorage.getItem('authToken');
    if (token != null) {
        options.headers['X-Authorization'] = token;
    };

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body)
    };

    return options
};

export const login = (email, password) => {
    const user = fetch()
}