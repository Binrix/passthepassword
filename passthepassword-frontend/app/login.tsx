import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { LoginForm } from "../src/components/login/LoginForm";


type LoginProps = {}

function Login() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Login"
        }}
      />
      <View style={styles.main}>
        <LoginForm />
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