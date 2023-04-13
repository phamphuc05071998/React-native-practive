import React from 'react'
import { Image, View,Text, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
function CategoriesItem({image, title, tag}) {
  const navigation = useNavigation()
 
  function navigateToCategoriesDetail () {
    navigation.navigate('Categories', {
      tag: tag
    })
  }
  return (
    <Pressable style={({pressed}) => [styles.container , pressed && styles.pressed]} onPress={navigateToCategoriesDetail}>
      <View style={styles.imageContainer}>

      <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
    
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 50

  },
  imageContainer: {
    height:100 ,
    width: 100,
    
    padding: 4,
   
  },
  title: {
    textAlign: 'center',

  },
  pressed: {
    opacity: 0.75
  }
})
export default CategoriesItem