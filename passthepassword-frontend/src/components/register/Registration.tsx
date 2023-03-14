import { Button, Input } from "@rneui/themed";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux'
import Auth from "../../state/auth.state";
import { RootState, store } from "../../store";
import FormWrapper from "../form-wrapper/FormWrapper";

function RegistrationForm({}) {
    const authState = useSelector((state: RootState) => state.auth);
    const { register, handleSubmit } = useForm({
        defaultValues: authState
    });

    function onSubmit(v: any) {
        const newAuth: Auth = {
            username: v['username'],
            password: v['password'],
            isAuthenticated: false,
        }

        store.dispatch.auth.setAuth(newAuth)
        // TODO: implement validation
        store.dispatch.auth.doRegistration(newAuth)
        
    }
    
    return ( 
        <FormWrapper>
            <form onSubmit={handleSubmit(data => onSubmit(data))}>

                <div>
                    <label>
                    Username
                    <input
                        {...register("username")}
                        placeholder="Username"
                    />
                    </label>
                </div>

                <div>
                    <label>
                    Password
                    <input
                        {...register("password")}
                        placeholder="Password"
                        type='password'
                    />

                    </label>
                </div>

                

                <button type='submit'>
                    Register
                </button>
            </form>
        </FormWrapper>
    );
}

export default RegistrationForm;
