import { API_URL, getConfig } from './index';

export async function signUp(payload) {

    const response = await fetch(
        '/users',
        getConfig('POST', payload)
    );

    return response.json();
}