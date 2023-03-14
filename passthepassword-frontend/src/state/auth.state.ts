import { createModel } from '@rematch/core'
import { hashSync } from 'bcryptjs-react';
import { sha256 } from 'js-sha256';
import type { RootModel } from './root.model'

export default interface Auth {
    username: string;
    password: string;
    isAuthenticated: boolean;
}

const apiBaseURL = 'http://localhost:3000'

async function doAuth(dispatch: any, endpoint: string, payload: any) {
    const formData = new FormData();

    var hashedPassword = sha256(payload.password);
    // hashedPassword = hashSync(payload.password, "jan");
    formData.append("username", payload.username)
    formData.append("masterPassword", hashedPassword)
    // @ts-ignore
    const urlParams = new URLSearchParams(formData)
    const res = await fetch(`${apiBaseURL}/${endpoint}`, {
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
        async doRegistration(payload: Auth) {
            await doAuth(dispatch, 'register', payload)
        },
        async doLogin(payload: Auth) {
            await doAuth(dispatch, 'login', payload)
        }
    })
})