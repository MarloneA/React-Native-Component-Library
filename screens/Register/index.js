import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Button from "../../components/atoms/Button";

export default class Register extends Component {
  render() {
    const handleSubmit = () => {};
    return (
      <View style={styles.pageLayout}>
        <Text style={styles.text}>Sign Up</Text>
        <View style={styles.container}>
          <Text style={{}}>What are you?</Text>
          <Button
            onPress={handleSubmit}
            title="Submit"
            label="Competitor & team"
          />
          <Button
            onPress={handleSubmit}
            title="Submit"
            label="Event Organiser"
          />
          <Button
            onPress={handleSubmit}
            title="Submit"
            label="Vendor or Sponsor"
          />
        </View>

        <View>
          <Button onPress={handleSubmit} title="Submit" label="Next" />
          <Text>OR</Text>
          <Text>Already have an account? Sign in</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageLayout: {
    display: "flex",
    padding: 20,
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    color: "#122B46",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: 400,
    textAlign: "left",
    width: "100%",
  },
  pageLayout: {
    display: "flex",
    padding: 20,
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexFlow: "column",
    width: "100%",
    backgroundColor: "pink",
  },
});
