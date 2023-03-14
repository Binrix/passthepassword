import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegistrationForm from "../src/components/register/Registration";

function Register() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Register"
        }}
      />
      <View style={styles.main}>
        <RegistrationForm />
      </View>
    </View>
  );
}

export default Register;

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
