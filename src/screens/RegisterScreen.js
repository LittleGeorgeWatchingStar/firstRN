import React, { useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import Screen from "../components/Screen";
import logoRed from "../../assets/logo-red.png";
import {
  ErrorMessage,
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logoRed} />
        <Text style={styles.headline}>Selenaston</Text>
        <Text style={styles.tagline}>Welcomes you warmly</Text>
      </View>

      <View style={styles.inputContainer}>
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </Form>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headline: {
    fontSize: 32,
    fontWeight: "700",
    paddingVertical: 3,
    color: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    width: 400,
    height: 120,
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
    paddingVertical: 8,
    color: colors.secondary,
  },
});

export default RegisterScreen;
