import { getConfig } from './index';

export async function auth(credentials) {
    
    const response = await fetch(
        `/auth`,
        getConfig('POST', credentials)
    );
    
    return response.json();
    
}