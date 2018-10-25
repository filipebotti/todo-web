
let USER = {
    token: '',
    storeCredentials: (credentials) => {
        // AsyncStorage.setItem('credentials', JSON.stringify(credentials))
    },
    getStoredCredentials: () => {

        // return AsyncStorage.getItem('credentials')
        // .then(data => JSON.parse(data))
        // .catch(error => console.log(error));
    },
    clear: () => {
        // AsyncStorage.removeItem('credentials');
    }
}

// const API_URL = "https://todo-api-vice.herokuapp.com"
const API_URL = "http://localhost:4000/api"


export { USER, API_URL };