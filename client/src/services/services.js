const url = 'https://ecommerce--react.herokuapp.com';

export const getAllItems = (category) => {
    const type = ((category && category !== 'undefined') ? `?category=${category}` : '')
    return fetch(`${url}/items${type}`)
            .then(res => res.json())
            .catch(err => alert(err))
};