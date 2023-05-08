import {
  View,
  Button,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
  Picker,
} from "react-native";
import { firebase } from "../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { HomePage, PostView, PostDesign } from "../styles/HomePage";
import {
  getFirestore,
  serverTimestamp,
  collection,
  addDoc,
  getDocs,
  querySnapshot,
} from "firebase/firestore";

const auth = getAuth(firebase);
const db = getFirestore(firebase);

export const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postData = querySnapshot.docs.map((doc) => ({
        title: doc.data().name,
        caption: doc.data().caption,
        rating: doc.data().rating,
        type: doc.data().type,
        url: doc.data().url,
      }));
      setPosts(postData);
    };
    fetchData();
    console.log(posts);
  }, []);
  return (
    <>
      {posts.map((item, index) => (
        <View key={index} style={PostDesign.backgroundStyle}>
          <View style={PostDesign.imageStyle}>
            <Image style={PostDesign.image} source={{ uri: item.url }} />
          </View>
          <View style={PostDesign.textStyle}>
            <Text style={PostDesign.titleStyle}>
              {item.title} - {item.type}
            </Text>
            <Text style={PostDesign.captionStyle}>{item.caption}</Text>
            <Text style={PostDesign.ratingStyle}>{item.rating} likes</Text>
          </View>
        </View>
      ))}
      ;
    </>
  );
  // <View style={PostDesign.backgroundStyle}>
  //   {posts.map((item) => (
  //     <>
  //       <View style={PostDesign.imageStyle}>
  //         <Image
  //           style={PostDesign.image}
  //           source={{ uri: "https://picsum.photos/150/250" }}
  //         />
  //       </View>
  //       <View style={PostDesign.textStyle}>
  //         <Text style={PostDesign.titleStyle}>
  //           {item.title} - {item.type}
  //         </Text>
  //         <Text style={PostDesign.captionStyle}>{item.caption}</Text>
  //         <Text style={PostDesign.ratingStyle}>{item.rating}</Text>
  //       </View>
  //     </>
  //   ))}
  // </View>
};
