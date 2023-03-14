import { createModel } from '@rematch/core'
import type { RootModel } from './root.model'

export default interface Auth {
    username: string;
    password: string;
    isAuthenticated: boolean;
}

const apiBaseURL = 'http://localhost:3000'

export const auth = createModel<RootModel>()({
    state: {
        username: "",
        password: "",
        isAuthenticated: false,
    } as Auth,
    reducers: {
        setAuth(state: Auth, payload: any) {
            return {
                username: payload.username || state.username,
                password: payload.password || state.password,
                isAuthenticated: payload.isAuthenticated || state.isAuthenticated
            }
        }
    },
    effects: (dispatch) => ({
        // TODO: add hashing of pass
        async doRegistration(payload: Auth) {
            console.log(payload)
            const formData = new FormData();
            formData.append("username", payload.username)
            formData.append("masterPassword", payload.password)
            // @ts-ignore
            const urlParams = new URLSearchParams(formData)
            const res = await fetch(`${apiBaseURL}/register`, {
                method: 'POST',
                body: urlParams
            })
            const json = await res.json();
            console.log(json)

            dispatch.auth.setAuth({
                username: json.username,
                password: '',
                isAuthenticated: true,
            })
        }
    })
})