
let USER = {
    token: '',
    storeCredentials: (credentials) => {
        localStorage.setItem('credentials', JSON.stringify(credentials));
    },
    getStoredCredentials: () => {

        return JSON.parse(localStorage.getItem('credentials'));
    },
    clear: () => {
        localStorage.removeItem('credentials');
    }
}

// const API_URL = "https://todo-api-vice.herokuapp.com"
const API_URL = "http://localhost:4000/api"


export { USER, API_URL };