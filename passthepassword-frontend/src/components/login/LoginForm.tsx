import { hashSync } from "bcryptjs-react";
import { sha256 } from "js-sha256";
import React, { useState } from "react";
import FormWrapper from "../form-wrapper/FormWrapper";

type EntryListProps = {
    onSubmit: (username: string, password: string) => void;    
}

export const LoginForm: React.FC<EntryListProps> = ({
    onSubmit
}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        var hashedPassword = sha256(password);
        hashedPassword = hashSync(password, 10);

        onSubmit(username, hashedPassword);
    }


    return (
        <FormWrapper>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} /> 
                </div> 
                <div> 
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} /> 
                    </div> 
                <button type="submit">Login</button>
            </form>
        </FormWrapper>
    );
}