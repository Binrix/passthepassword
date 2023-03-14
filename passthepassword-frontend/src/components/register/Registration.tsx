import { Button, Input } from "@rneui/themed";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { TextInput, Text, View, Alert, StyleSheet } from "react-native";
import Auth from "../../state/auth.state";
import { RootState, store } from "../../store";
import FormWrapper from "../form-wrapper/FormWrapper";

function RegistrationForm({}) {
  const router = useRouter();
  const authState = useSelector((state: RootState) => state.auth);
  const { control,
    handleSubmit,
    formState: { errors } } = useForm({
    defaultValues: authState,
  });

  if (authState.isAuthenticated) {
    router.push("");
  }

  function onSubmit(v: any) {
    const newAuth: Auth = {
      username: v["username"],
      password: v["password"],
      isAuthenticated: false,
    };

    store.dispatch.auth.setAuth(newAuth);
    // TODO: implement validation
    store.dispatch.auth.doRegistration(newAuth);
  }

  return (
    <FormWrapper>
      <Text>Username</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="username"
      />
      {errors.username && <Text>This is required.</Text>}

      <Text>Password</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </FormWrapper>
  );
}

export default RegistrationForm;
