import { API_URL, getConfig, USER } from './index';

export function fetchTasks() {

    return fetch(        
        '/tasks',
        getConfig()
    ).then(response => response.json())
    .catch(error => Promise.reject(error));
}

export async function addTask(task) {

    const response = await fetch(
        `/tasks`,
        getConfig('POST', task)
    );

    return response.json();
}

export async function removeTask(task) {
    
    const response = await fetch(
        `/tasks/${task.id}`,
        getConfig('DELETE')
    )

    return response;
}

export async function updateTask(task) {
    const response = await fetch(
        `/tasks/${task.id}`,
        getConfig('PUT', task)
    )

    return response.json();
}