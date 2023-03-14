import React from "react";
import { LoginForm } from "./LoginForm";


type LoginProps = {}

export const Login: React.FC<LoginProps> = ({ 
    
}) => {
    const loginUser = (username: string, password: string) => {
        console.log(password.length);

        var requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, masterPassword: password })
        }

        fetch('http://localhost:3000/login', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <LoginForm onSubmit={loginUser} ></LoginForm>
    );
}


