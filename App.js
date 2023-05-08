import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, StatusBar } from "react-native";
import { LoginScreen } from "./components/Login";
import { LoginPage } from "./styles/LoginPage";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

import { HomeScreen } from "./components/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Roboto: require("./assets/fonts/Roboto-Black.ttf"),
      });
      await Font.loadAsync({
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      });
      await Font.loadAsync({
        "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
      });

      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        {/*<Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
