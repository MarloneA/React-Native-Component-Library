import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#F7074F",
    width: "100%",
  },
  label: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "normal",
    letterSpacing: 0.25,
    color: "white",
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    padding: 16,
    borderWidth: 1,
    borderColor: "#D3DAEE",
    width: "100%",
    marginBottom: 20,
  },
  text: {
    color: "#122B46",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: 400,
    textAlign: "left",
    width: "100%",
    marginBottom: 20,
  },
  pageLayout: {
    display: "flex",
    padding: 20,
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  passwordText: {
    textAlign: "right",
    width: "100%",
    paddingBottom: 20,
  },
  container: {
    display: "flex",
    flexFlow: "column",
    width: "100%",
  },
  backgroundGradient: {
    fill: "conic-gradient(from 180deg at 50% 50%, #B9CBFB 0deg, #ECACAD 95.99230170249939deg, #9895EE 112.5deg, #C55492 196.875deg, #90A2F8 292.5deg)",
    // opacity: 0.4,
    filter: "blur(50px)",
  },
});
