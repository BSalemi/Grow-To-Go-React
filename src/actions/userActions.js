import { LOGIN_USER } from './types'

export function loginUser(user, history) {
    history.push('/')  
    return {
        type: LOGIN_USER,
        user
    }
}

