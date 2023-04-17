import React from "react";
import {
  Pressable,
  ImageBackground,
  Text,

  StyleSheet,
  Dimensions,

} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { color } from "../../util/Colors";

function MenuItem({ title, image, tag }) {
  const navigation = useNavigation()
  
  const navigateToDetailScreenHandler = () => {
    navigation.navigate('MenuItemScreen', {
        tag : tag,
        title: title
    })
  }
    
  return (
    <Pressable onPress={navigateToDetailScreenHandler} style={({pressed})  => [styles.container, pressed && styles.pressed]}>
      <ImageBackground
        imageStyle={styles.imageConfig}
        style={styles.image}
        source={{ uri: image }}
      >
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </Pressable>
  );
}
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    height: 150,
    width: deviceWidth /2 -16,
    borderRadius: 6,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageConfig: {
    // opacity: 0.8,

    // tintColor:color.gray400
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: color.gray900,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  pressed : {
    opacity: 0.8
  }
});
export default MenuItem;
