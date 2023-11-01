import React from 'react';
// import { StyleSheet, Text, View } from "react-native";
// import {View, TextField, Text, Button, Card} from 'react-native-ui-lib';
import Constants from "expo-constants";
import Login from './screens/login';
import Register from './screens/Register';
import {Text, View} from "react-native"
import PageTemplate from './components/atoms/PageTemplate';

function App() {
  return (
    <Register />
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default AppEntryPoint;
