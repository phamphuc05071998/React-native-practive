import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
function Button({ style, children, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
    >
      <Text style={style.title}>{children}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 8,
    alignItems: 'center'
  },
  pressed: {
    opacity: 0.85,
  },
  title: {
    textAlign: "center",
  },
});
export default Button;
