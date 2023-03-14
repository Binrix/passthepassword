import { Button, Input } from "@rneui/themed";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux'
import { RootState, store } from "../../store";
import FormWrapper from "../form-wrapper/FormWrapper";

function RegistrationForm({}) {
    const authState = useSelector((state: RootState) => state.auth);
    const { register, handleSubmit } = useForm({
        defaultValues: authState
    });
    
    return ( 
        <FormWrapper>
            <form>
                <Input
                    {...register("username")}
                    placeholder="Username"
                />

                <Input
                    {...register("password")}
                    placeholder="Password"
                    secureTextEntry={true}
                />

                <Button
                    title='Register'
                    loading={false}
                    onPress={() => handleSubmit((data) => store.dispatch.auth.setRegistration(data))}
                    type="solid"
                />
            </form>
        </FormWrapper>
    );
}

export default RegistrationForm;
