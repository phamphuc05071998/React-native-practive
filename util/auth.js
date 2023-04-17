import axios from "axios";
import { combineTransition } from "react-native-reanimated";
const API_KEY = "AIzaSyCdjcerrRotN-fEwcZ2jTVujUsotsAyT-o";
export const login = async (email, password) => {
  const body = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      body
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);

    throw new Error("Wrong email or password. Please try again");
  }
};

export const signUp = async (email, password) => {
  const body = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      body
    );
    return response.data;
  } catch (err) {
    throw new Error("Can not sign up for a moment,Please try again late");
  }
};
