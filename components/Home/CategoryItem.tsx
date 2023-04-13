import React from 'react'
import { Pressable, Text, View, Image, StyleSheet } from 'react-native'
import { color } from '../../util/Colors'
import { useNavigation } from '@react-navigation/native'
function CategoryItem({title, image, categoryData}) {
  const navigation = useNavigation()
  const navigateToDetailPageHandler = () => {
      navigation.navigate('Category', {
        itemData : categoryData
      })
  }
  return (
   <Pressable onPress={navigateToDetailPageHandler} style={({pressed}) => [styles.container , pressed && styles.pressed]}>
      <Text style={styles.title}>{title}</Text>
    
      <Image style={styles.image} source={{uri: image}}/>
    
    
   </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 12,
    marginVertical: 16,
    borderRadius: 4,
    
    backgroundColor: color.primary400,
    shadowColor: 'black',
    shadowOpacity: 0.75,
    shadowRadius: 4,
    shadowOffset: {width: 2, height: 2},
    elevation: 8

  },
  pressed: {
    opacity: 0.75
  },
  image: {
    width : '100%',
    height: 250,
    borderRadius: 8
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: color.text100
  }
})

export default CategoryItem