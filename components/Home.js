import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { firebase } from "../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  HomePage,
  PostView,
  PostDesign,
  AndroidHomePage,
} from "../styles/HomePage";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Post } from "./Post";

const auth = getAuth(firebase);
const db = getFirestore(firebase);

const signOutOfAccount = () => {
  auth.signOut();
};

export const HomeScreen = ({ navigation }) => {
  const [postDisplayValue, setPostDisplayValue] = useState({ display: "none" });
  const [postButtonDisplayValue, setPostButtonDisplayValue] = useState({
    display: "flex",
  });
  const [selectedValue, setSelectedValue] = useState("donation");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

  const ShowPostView = () => {
    setPostDisplayValue({ display: "flex" });
    setPostButtonDisplayValue({ display: "none" });
  };

  const HidePostView = () => {
    setPostDisplayValue({ display: "none" });
    setPostButtonDisplayValue({ display: "flex" });
  };

  const [user, setUser] = useState({});
  let postRef;
  let unsubscribe;

  async function createPost() {
    try {
      const postRef = await addDoc(collection(db, "posts"), {
        uid: user.uid,
        type: selectedValue,
        name: title,
        caption: caption,
        rating: 0,
      });
      console.log("Document written with ID: ", postRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const loginCheck = () => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigation.navigate("Login");
      }
      setUser(user);
      console.log(user);
    });
  };

  useEffect(() => {
    loginCheck();
  }, []);

  return (
    <SafeAreaView style={HomePage.backgroundStyle}>
      {Platform.OS === "web" ? (
        <View style={HomePage.settingsAndSelection}>
          <View style={HomePage.settingsPanel}>
            <View style={HomePage.logoStyle}>
              <Image
                style={HomePage.logoImage}
                source={require("../assets/logo.png")}
              />
              <Text style={HomePage.logoText}>Satiate</Text>
            </View>
            <View style={HomePage.settingsProfile}>
              <Image
                style={HomePage.settingsImage}
                source={{ uri: user.photoURL }}
              />
              <Text style={HomePage.settingsProfileText}>
                {user.displayName}
              </Text>
            </View>
            <TouchableOpacity
              onPress={signOutOfAccount}
              style={HomePage.settingsText}
            >
              <Text>Donation</Text>
            </TouchableOpacity>
            <TouchableOpacity style={HomePage.settingsText}>
              <Text>Pickup</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={signOutOfAccount}
              style={[HomePage.settingsSignOut]}
            >
              <Text>Sign Out</Text>
            </TouchableOpacity>
          </View>
          <View style={HomePage.selectionPanel}>
            <Post />
          </View>
          <TouchableOpacity
            onPress={ShowPostView}
            style={[HomePage.postButton, postButtonDisplayValue]}
          >
            <Text>Post</Text>
          </TouchableOpacity>
          <View style={[PostView.backgroundStyle, postDisplayValue]}>
            <TouchableOpacity
              onPress={HidePostView}
              style={PostView.closeButtonTouch}
            >
              <Image
                style={PostView.closeButton}
                source={require("../assets/close.png")}
              />
            </TouchableOpacity>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              style={PostView.postDropdownButton}
            >
              <Picker.Item label="Donation" value="donation" />
              <Picker.Item label="Pickup" value="pickup" />
            </Picker>
            <TextInput
              style={PostView.titleInput}
              value={title}
              onChangeText={setTitle}
              placeholder="Title"
              placeholderTextColor="lightgray"
            />
            <TextInput
              style={PostView.captionInput}
              value={caption}
              onChangeText={setCaption}
              placeholder="Caption"
              placeholderTextColor="lightgray"
            />
            <TouchableOpacity
              onPress={createPost}
              style={PostView.postDisplayButton}
            >
              <Text>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <>
          <ScrollView style={AndroidHomePage.selectionPanel}>
            <Post />
          </ScrollView>
          <View style={AndroidHomePage.taskBar}>
            <TouchableOpacity
              onPress={ShowPostView}
              style={[AndroidHomePage.taskText, { marginLeft: 30 }]}
            >
              <Text>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={signOutOfAccount}
              style={[AndroidHomePage.taskText, { marginRight: 30 }]}
            >
              <Text>Sign Out</Text>
            </TouchableOpacity>
          </View>
          <View style={AndroidHomePage.logoBar}>
            <Image
              style={AndroidHomePage.imageLogo}
              source={require("../assets/logo.png")}
            />
          </View>
          <View style={[PostView.backgroundStyle, postDisplayValue]}>
            <TouchableOpacity
              onPress={HidePostView}
              style={PostView.closeButtonTouch}
            >
              <Image
                style={PostView.closeButton}
                source={require("../assets/close.png")}
              />
            </TouchableOpacity>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              style={PostView.postDropdownButton}
            >
              <Picker.Item label="Donation" value="donation" />
              <Picker.Item label="Pickup" value="pickup" />
            </Picker>
            <TextInput
              style={PostView.titleInput}
              value={title}
              onChangeText={setTitle}
              placeholder="Title"
              placeholderTextColor="lightgray"
            />
            <TextInput
              style={PostView.captionInput}
              value={caption}
              onChangeText={setCaption}
              placeholder="Caption"
              placeholderTextColor="lightgray"
            />
            <TouchableOpacity
              onPress={createPost}
              style={PostView.postDisplayButton}
            >
              <Text>Post</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
