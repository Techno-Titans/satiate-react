import { StyleSheet, StatusBar, Platform } from "react-native";

export const HomePage = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: "#1fb4a1",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight - 20,
  },
  settingsAndSelection: {
    width: "99%",
    height: "90%",
    position: "relative",
    flexDirection: "row",
    top: 35,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "flex-start",
  },
  selectionPanel: {
    gap: 30,
    flexDirection: "row",
    padding: 20,
    overflow: "hidden",
  },
  settingsText: {
    fontWeight: 500,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    height: 50,
    fontFamily: Platform.OS === "android" ? "Roboto" : "",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
  },
  settingsSignOut: {
    fontWeight: 500,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    height: 50,
    fontFamily: Platform.OS === "android" ? "Roboto" : "",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    marginTop: 240,
  },
  settingsProfileText: {
    fontWeight: 600,
    height: 40,
    height: 50,
    fontFamily: "Roboto",
    paddingTop: 5,
  },
  settingsPanel: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    paddingTop: 50,
    gap: 20,
    borderRightColor: "lightgray",
    borderRightWidth: 1,
  },
  settingsProfile: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    height: 50,
    flexDirection: "row",
    marginBottom: 50,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
  },
  settingsImage: {
    marginRight: 5,
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  postButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    fontWeight: 500,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 40,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#1fb4a1",
    fontFamily: Platform.OS === "android" ? "Roboto" : "",
    borderColor: "lightgray",
    borderWidth: 2,
  },
  logoImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1fb4a1",
  },
  logoStyle: {
    flexDirection: "row",
    flex: 1,
    height: 60,
  },
});

export const PostView = StyleSheet.create({
  backgroundStyle: {
    position: "absolute",
    top: "15%",
    left: "35%",
    backgroundColor: "white",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 15,
    width: "40%",
    height: "70%",
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
    flexDirection: "column",
  },
  titleInput: {
    width: "100%",
    flex: 0.2,
    paddingLeft: 15,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  captionInput: {
    width: "100%",
    flex: 1,
    paddingLeft: 15,
  },
  postDisplayButton: {
    flex: 0.1,
    marginTop: 10,
    fontWeight: 500,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    borderRadius: 15,
    backgroundColor: "#1fb4a1",
    fontFamily: Platform.OS === "android" ? "Roboto" : "",
    borderColor: "lightgray",
    borderWidth: 2,
  },
  postDropdownButton: {
    fontSize: 11,
    flex: 0.1,
    marginTop: 10,
    fontWeight: 500,
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
    width: 100,
    fontFamily: Platform.OS === "android" ? "Roboto" : "",
    borderColor: "lightgray",
    borderWidth: 1,
  },
  closeButtonTouch: {
    width: "100%",
    flex: 0.1,
    borderColor: "lightgray",
    alignItems: "flex-end",
    paddingRight: 20,
  },
  closeButton: {
    width: 20,
    height: 20,
  },
});

export const PostDesign = StyleSheet.create({
  backgroundStyle: {
    width: 250,
    height: 300,
    flexDirection: "column",
    backgroundColor: "#1fb4a1",
    borderRadius: 15,
    marginBottom: 10,
  },
  imageStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 150,
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textStyle: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
  },
  titleStyle: {
    flex: 0.5,
    fontWeight: 800,
  },
  captionStyle: {
    flex: 1,
  },
  ratingStyle: {
    flex: 0.5,
    alignSelf: "flex-end",
  },
});
