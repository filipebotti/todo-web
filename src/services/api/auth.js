import { API_URL, getConfig } from './index';

export async function auth(credentials) {

    console.log(credentials);
    
    const response = await fetch(
        `/auth`,
        getConfig('POST', credentials)
    );
    console.log(response);
    return response.json();
    
}