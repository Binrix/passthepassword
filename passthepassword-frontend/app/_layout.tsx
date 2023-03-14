import { Button } from "@rneui/base";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import LinkButton from "../src/components/link-btn/LinkButton";
import { store } from "../src/store";

export default function Layout() {
    
  return (
    <Provider store={store}>
        <Stack 
            initialRouteName="index"
            screenOptions={{
              headerRight: () => {
                return (
                  <div style={styles.menu}>
                    <div style={styles.menu}>
                      <LinkButton href="/passwords">Passwords</LinkButton>
                      <LinkButton href="/test">test</LinkButton>
                    </div>
                    <Button onPress={() => store.dispatch.auth.doLogout()}>Logout</Button>
                  </div>
                )
              }
            }}
        >
        </Stack>
    </Provider>
  );
}

const styles = StyleSheet.create({
  menu: {
    display: "flex",
    flexDirection: "row",
    gap: 1,
    paddingRight: 10,
  },
});

