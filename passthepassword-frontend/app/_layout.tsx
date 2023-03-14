import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "../src/store";

export default function Layout() {
    
  return (
    <Provider store={store}>
        <Stack 
            initialRouteName="index"
        >
        </Stack>
    </Provider>
  );
}


