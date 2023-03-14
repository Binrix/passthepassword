import { createModel } from '@rematch/core'
import type { RootModel } from './root.model'

export default interface Auth {
    username: string;
    password: string;
    isAuthenticated: boolean;
}

export const auth = createModel<RootModel>()({
    state: {
        username: "",
        password: "",
        isAuthenticated: false,
    } as Auth,
    reducers: {
        setRegistration(state: Auth, payload: any) {
            return {
                username: payload.username || state.username,
                password: payload.password || state.password,
                isAuthenticated: payload.isAuthenticated || state.isAuthenticated
            }
        }
    }
})