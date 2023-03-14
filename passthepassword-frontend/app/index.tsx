import { Stack, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";
import LinkButton from "../src/components/link-btn/LinkButton";


export default function Page() {
  const router = useRouter();
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
        <LinkButton href="/register">Register</LinkButton>
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
