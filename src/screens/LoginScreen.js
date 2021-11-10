import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import logoRed from "../../assets/logo-red.png";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logoRed} />
        <Text style={styles.tagline}>
          Welcome back to Selenaston
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    width: 400,
    height: 80,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 50,
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color:colors.secondary,
  },
});

export default LoginScreen;
