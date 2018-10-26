import { getConfig } from './index';

export async function auth(credentials) {
    
    const response = await fetch(
        `/api/auth`,
        getConfig('POST', credentials)
    );
    
    return response.json();
    
}