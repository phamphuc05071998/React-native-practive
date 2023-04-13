import React from 'react'
import {Ionicons} from '@expo/vector-icons'
 import {Pressable, Text, StyleSheet, View} from "react-native"

function IconButton({onPress, size, color, icon}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [styles.button , pressed && styles.pressed]}>
        <Ionicons name={icon} size={size} color={color}/>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    button: {
        padding: 8

    },
    pressed: {
        opacity: 0.7
    }

})
export default IconButton