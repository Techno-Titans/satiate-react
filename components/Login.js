import { firebase } from "../firebaseConfig";
import {
  getAuth,
  AuthErrorCodes,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LoginPage } from "../styles/LoginPage";
import React, { useState, useEffect } from "react";

const auth = getAuth();
auth.languageCode = "it";
const provider = new GoogleAuthProvider();

const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      navigation.navigate("Home");
    })
    .catch((error) => {});
};

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     navigation.navigate("Home");
//   }
// });

export const LoginScreen = ({ navigation }) => {
  const loginCheck = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
  };

  useEffect(() => {
    loginCheck();
  }, []);
  return (
    <View style={LoginPage.backgroundStyle}>
      <View style={[LoginPage.background]}>
        <View style={LoginPage.logo}>
          <Image
            style={LoginPage.logoImage}
            source={require("../assets/logo.png")}
          />
          <Text style={LoginPage.logoText}>Satiate</Text>
          <TouchableOpacity onPress={loginWithGoogle} style={LoginPage.button}>
            <View style={LoginPage.signInView}>
              <Image
                style={LoginPage.signInImage}
                source={require("../assets/google.png")}
              />
              <Text style={LoginPage.buttonText}>Sign In With Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
