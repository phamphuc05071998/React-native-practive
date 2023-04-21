import axios from "axios";
import { combineTransition } from "react-native-reanimated";
const API_KEY = "AIzaSyCdjcerrRotN-fEwcZ2jTVujUsotsAyT-o";
export const login = async (email, password) => {
  const body = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    body
  );
  console.log(response);
  return response.data;
};

export const signUp = async (email, password) => {
  const body = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    body
  );
  return response.data;
};
