import { Link, Stack, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";
import LinkButton from "../src/components/link-btn/LinkButton";
import { useSelector } from "react-redux";
import { RootState } from "../src/store";

export default function Page() {
  const authState = useSelector((state: RootState) => state.auth);
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Home",
        }}
      />
      <View style={styles.main}>
        <Text style={styles.title}>PassthePassWORT</Text>
        <Text style={styles.subtitle}>
          Dies ist eine sichere APP, wir schwören, binshallah.
        </Text>
        {
          !authState.isAuthenticated ? 
            <>
              <LinkButton href="/register">Register</LinkButton>
              <LinkButton href="/login">Login</LinkButton>
            </> : null
        }
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
