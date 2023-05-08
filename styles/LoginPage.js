import { StyleSheet, StatusBar } from "react-native";

export const LoginPage = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: "#1fb4a1",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight - 20,
  },
  background: {
    backgroundColor: "whitesmoke",
    width: 400,
    height: "94%",
    borderRadius: 15,
    flexDirection: "column",
  },
  logo: {
    position: "relative",
    top: "15%",
    alignItems: "center",
    gap: 10,
  },
  logoImage: {
    width: 180,
    height: 180,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1fb4a1",
  },
  container: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  input: {
    height: 40,
    width: 300,
    marginTop: 22,
    marginBottom: -12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
    width: 200,
    marginTop: 40,
    marginBottom: -30,
    borderWith: 1,
    padding: 10,
    backgroundColor: "#1fb4a1",
    alignItems: "center",
    borderRadius: 10,
  },
  signInView: {
    flex: 1,
    flexDirection: "row",
  },
  signInImage: {
    width: 20,
    height: 20,
    marginRight: 20,
  },

  buttonText: {
    color: "whitesmoke",
    fontWeight: 600,
  },
  wrongPassText: {
    fontSize: 14,
    marginTop: 25,
    marginBottom: -20,
  },
});
