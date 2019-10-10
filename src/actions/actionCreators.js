import { LOGIN_USER, LOGOUT_USER } from '../actions/types'

export function loginUser(user) {
    return {
        type: LOGIN_USER,
        user
    }
}