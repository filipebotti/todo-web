import { getConfig } from './index';

export async function signUp(payload) {

    const response = await fetch(
        '/api/users',
        getConfig('POST', payload)
    );

    return response.json();
}