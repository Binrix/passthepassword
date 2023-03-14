import { Input } from "@rneui/themed";
import Constants from "expo-constants";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput, Text, View, Button, Alert, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Auth from "../../state/auth.state";
import { RootState, store } from "../../store";
import FormWrapper from "../form-wrapper/FormWrapper";

export function LoginForm({}) {
  const router = useRouter();
  const authState = useSelector((state: RootState) => state.auth);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
    store.dispatch.auth.doLogin(newAuth);
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
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <Input secureTextEntry onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        name="password"
      />
       {errors.password && <Text>This is required.</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </FormWrapper>
  );
}

const styles = StyleSheet.create({
    label: {
      color: 'white',
      margin: 20,
      marginLeft: 0,
    },
    button: {
      marginTop: 40,
      color: 'white',
      height: 40,
      backgroundColor: '#ec5990',
      borderRadius: 4,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      padding: 8,
      backgroundColor: '#0e101c',
    },
    input: {
      backgroundColor: 'white',
      borderColor: 'none',
      height: 40,
      padding: 10,
      borderRadius: 4,
    },
  });