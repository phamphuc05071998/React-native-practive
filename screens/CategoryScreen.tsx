import React from 'react'
import { Text, ScrollView, View, StyleSheet } from 'react-native'
import SliderImage from '../components/ui/SliderImage'

function CategoryScreen({route}) {
    const categoryData = route.params.itemData
    console.log(categoryData)
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
         Product: {categoryData.display.displayName}
        </Text>
      </View>
      <SliderImage images={categoryData.display.images}/>
      <View>
        <Text>
          {categoryData.content.details.description}
        </Text>
      </View>
      <View>
        <Text>
          {categoryData.content.details.price}
        </Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  screen: {
    padding: 8
  },
  titleContainer:{
    marginBottom: 16
  },
  title: {
    fontSize: 18,
    
    fontWeight: 'bold'
  }
})
export default CategoryScreen