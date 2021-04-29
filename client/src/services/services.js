const url = 'http://localhost:5000';

export const getAllItems = (category) => {
    const type = ((category && category !== 'undefined') ? `?category=${category}` : '');
    return fetch(`${url}/items${type}`)
            .then(res => res.json())
            .catch(err => alert(err));
}