import { USER, API_URL } from '../config';
import * as authCalls from './auth';
import * as taskCalls from './tasks';
import * as registerCalls from './register';

export function getConfig(method = 'GET', body) {
    
    let headers = new Headers();
    headers.append("Content-Type", "application/json; charset=utf-8");
    headers.append("Authorization", USER.token || "");

    return {
        headers,
        method,
        body: JSON.stringify(body),
        mode:'cors'
    }
}
export { USER, API_URL }

export default {
    ...authCalls,
    ...taskCalls,
    ...registerCalls,
    getConfig,
    USER,
    API_URL
}