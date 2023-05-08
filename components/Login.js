import { firebase } from "../firebaseConfig";
import {
  getAuth,
  AuthErrorCodes,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
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
  Platform,
} from "react-native";
import * as Google from "expo-google-app-auth";
import { LoginPage, LoginForm } from "../styles/LoginPage";
import React, { useState, useEffect } from "react";

const auth = getAuth();
auth.languageCode = "it";
const provider = new GoogleAuthProvider();

const loginOnAndroid = () => {};

const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
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
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passInputValue, setPassInputValue] = useState("");
  const [notifOpacityValue, setNotifOpacityValue] = useState(1);
  const [notifMessageValue, setNotifMessageValue] = useState("");
  const [notifColorValue, setNotifColorValue] = useState("");
  const [marginValue, setMarginValue] = useState(-20);

  const loginCheck = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
  };

  function textCode(color, text, opacity, margin) {
    setNotifColorValue(color);
    setNotifMessageValue(text);
    setNotifOpacityValue(opacity);
    setMarginValue(margin);
  }

  const loginEmailPass = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        emailInputValue,
        passInputValue
      );
      textCode("lightgreen", "User logged in!", 1);
    } catch (error) {
      if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        textCode("red", "Wrong Password", 1, 20);
      } else {
        textCode("red", "Error", 20);
      }
    }
    loginCheck();
  };

  const signUpEmailPass = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        emailInputValue,
        passInputValue
      );
      textCode("lightgreen", "User created!", 1, 20);
    } catch (error) {
      textCode("red", "Error!", 1, 20);
    }
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
          {Platform.OS === "web" ? (
            <TouchableOpacity
              onPress={loginWithGoogle}
              style={LoginPage.button}
            >
              <View style={LoginPage.signInView}>
                <Image
                  style={LoginPage.signInImage}
                  source={require("../assets/google.png")}
                />
                <Text style={LoginPage.buttonText}>Sign In With Google</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={LoginForm.container}>
              <TextInput
                value={emailInputValue}
                onChangeText={(email) => setEmailInputValue(email)}
                style={LoginForm.input}
                placeholder="Email"
              />

              <TextInput
                secureTextEntry={true}
                value={passInputValue}
                onChangeText={(pass) => setPassInputValue(pass)}
                style={LoginForm.input}
                placeholder="Password"
              />

              <Text
                style={[
                  LoginForm.wrongPassText,
                  { opacity: notifOpacityValue },
                  { marginBottom: marginValue },
                  { color: notifColorValue },
                ]}
              >
                {notifMessageValue}
              </Text>

              <TouchableOpacity
                onPress={loginEmailPass}
                style={LoginForm.button}
              >
                <Text style={LoginForm.buttonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={signUpEmailPass}
                style={LoginForm.button}
              >
                <Text style={LoginForm.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
