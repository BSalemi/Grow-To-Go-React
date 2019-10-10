import { LOGIN_USER } from './types'

export function loginUser(user) {
    return {
        type: LOGIN_USER,
        user
    }
}

