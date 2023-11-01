import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";

import Logo from "../../assets/icons/Logo.svg";
import PageTemplate from "../../components/atoms/PageTemplate";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";

const Login = () => {
  return (
    <View style={styles.pageLayout}>
      <Logo width={150} height={150} />
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <Text style={styles.text}>Sign In</Text>
            <Input
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="abc@email.com"
              name="email"
              type="text"
              value={values.email}
            />
            <Input
              handleBlur={handleBlur}
              value={values.password}
              placeholder="Your password"
              handleChange={handleChange}
              name="password"
              type="text"
            />
            <Text style={styles.passwordText}>Forgot password? Reset</Text>
            <Button onPress={handleSubmit} title="Submit" label="Sign In" />
          </View>
        )}
      </Formik>

      <Text>OR</Text>
      <Text>Don't have an account? Sign up</Text>
    </View>
  );
};

export default Login;

export const styles = StyleSheet.create({
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
});
