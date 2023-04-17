import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, Button, Alert } from "react-native";
import Validator from "validator";
import { color } from "../../util/Colors";
import { login, signUp } from "../../util/auth";
import { useSelector, useDispatch } from "react-redux";
import { logUserIn } from "../../store/AuthReducer";
import { useNavigation } from "@react-navigation/native";
import LoadingOverlay from "../ui/LoadingOverlay";
function AuthForm() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState({
    email: "",
    isValid: true,
  });
  const [enteredPassword, setEnteredPassword] = useState({
    password: "",
    isValid: true,
  });
  const [enteredRepeatPassword, setEnteredRepeatPassword] = useState({
    repeatPassword: "",
    isValid: true,
  });
  const switchModeHandler = () => {
    setIsSignUp((prev) => !prev);
  };
  const enteredEmailHandler = (enteredEmail: string) => {
    const isEmail = Validator.isEmail(enteredEmail);
    setEnteredEmail({
      email: enteredEmail,
      isValid: isEmail,
    });
  };
  const enteredPasswordHandler = (enteredPassword: string) => {
    const isValidPassword = enteredPassword.trim().length >= 6;
    setEnteredPassword({
      password: enteredPassword,
      isValid: isValidPassword,
    });
  };
  const enteredRepeatPasswordHandler = (enteredRepeatPassword: string) => {
    const isValidRepeatPassword =
      enteredRepeatPassword.trim() === enteredPassword.password;
    setEnteredRepeatPassword({
      repeatPassword: enteredRepeatPassword,
      isValid: isValidRepeatPassword,
    });
  };
  const formIsValidate =
    enteredEmail.isValid &&
    enteredPassword.isValid &&
    enteredRepeatPassword.isValid;
  const submitAuthFormHandler = async () => {
    // console.log(enteredEmail.email, enteredPassword.password, enteredRepeatPassword.repeatPassword)
    try {
      setIsFetching(true);
      if (formIsValidate && isSignUp && enteredEmail.email && enteredPassword.password) {
        const email = enteredEmail.email;
        const password = enteredPassword.password;

        const response = await signUp(email, password);
        setIsFetching(false);
        dispatch(logUserIn(response.idToken));
        console.log(response);
        navigation.goBack();
      }
     if (formIsValidate && !isSignUp && enteredEmail.email && enteredPassword.password  ) {
        const email = enteredEmail.email;
        const password = enteredPassword.password;
        const response = await login(email, password);
        dispatch(logUserIn(response.idToken));
        setIsFetching(false);
        navigation.goBack();
      }
      else {
        Alert.alert(
            "Wrong email or password",
            "Can't sign up/ login at the moment, please try again later"
          );
      }
    } catch (err) {
      setIsFetching(false);

      Alert.alert(
        "Wrong email or password",
        err.message
      );
    }
  };
  if (isFetching)
    return <LoadingOverlay message={isSignUp ? "Signing up" : "Logging in"} />;
  return (
    <View style={styles.root}>
      <View style={styles.authContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            keyboardType={"email-address"}
            autoCapitalize="none"
            autoComplete="off"
            style={[styles.textInput, !enteredEmail.isValid && styles.textInputHasError]}
            value={enteredEmail.email}
            onChangeText={enteredEmailHandler}
            
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Password</Text>
          <TextInput
            autoCapitalize="none"
            secureTextEntry={true}
            autoComplete="off"
            style={[styles.textInput, !enteredPassword.isValid && styles.textInputHasError]}
            value={enteredPassword.password}
            onChangeText={enteredPasswordHandler}
          />
        </View>
        {isSignUp && (
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Repeat password</Text>
            <TextInput
              autoCapitalize="none"
              secureTextEntry={true}
              autoComplete="off"
              style={[styles.textInput, !enteredRepeatPassword.isValid && styles.textInputHasError]}
              value={enteredRepeatPassword.repeatPassword}
              onChangeText={enteredRepeatPasswordHandler}
            />
          </View>
        )}
        <View style={styles.buttonContainer}>
          <Button
            color={color.red500}
            title={isSignUp ? "Switch to Login" : "Switch to Sign up"}
            onPress={switchModeHandler}
          />
          <Button
            title={isSignUp ? "Sign up" : "Login"}
            onPress={submitAuthFormHandler}
            disabled={!formIsValidate}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 50,
  },
  
  authContainer: {
    padding: 16,

    backgroundColor: "#FFf",
    borderRadius: 6,
  },
  inputContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",

    color: "#333",
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: color.gray400,
    marginTop: 12,
    borderRadius: 6,
    backgroundColor: color.gray400,
  },
  textInputHasError: {
    borderColor: color.red500
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
    gap: 16,
  },
});
export default AuthForm;
