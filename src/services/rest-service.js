const BASE_URL = 'https://api.themoviedb.org'
const API_KEY = '?api_key=6ed6c7506758fe2c502c759eb4612927'


const get = (url) => {
    return new Promise((resolve, reject) => {
        fetch(BASE_URL + url + API_KEY, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWQ2Yzc1MDY3NThmZTJjNTAyYzc1OWViNDYxMjkyNyIsInN1YiI6IjY2NDRhMTVjZmNlMmE0OTcxOWVjM2ZkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nn7uyJRkjmpuVI3jBlO7IQNgvGbZkx0W5uK0bCbbXgQ'
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                resolve(json);
            })
            .catch(() => {
                reject();
            });
    })
}

const restService = {
    get
}

export default restService