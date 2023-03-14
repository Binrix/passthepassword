import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { LoginForm } from "../src/components/login/LoginForm";


type LoginProps = {}

const Login: React.FC<LoginProps> = ({}) => {
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
        <View>
            <Stack.Screen
            options={{
              title: "Login"
            }}
          />
          <View style={styles.main}>
            <LoginForm onSubmit={loginUser} ></LoginForm>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
    },
    main: {
      flex: 1,
      justifyContent: "center",
      maxWidth: 960,
      marginHorizontal: "auto",
    },
    title: {
      fontSize: 64,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 36,
      color: "#38434D",
    },
  });
  
export default Login;