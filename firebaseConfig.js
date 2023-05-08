import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBaXGxBZcWa4e0xS8l91oIH_-_5lk4jRwM",
  authDomain: "satiate-ef62d.firebaseapp.com",
  projectId: "satiate-ef62d",
  storageBucket: "satiate-ef62d.appspot.com",
  messagingSenderId: "379933562616",
  appId: "1:379933562616:web:f9328adee1d33946fb8d0d",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
