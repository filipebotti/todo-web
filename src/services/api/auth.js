import { API_URL, getConfig } from './index';

export async function auth(credentials) {

    
    const response = await fetch(
        `${API_URL}/auth`,
        getConfig('POST', credentials)
    );
    console.log(response);
    return response.json();
    
}