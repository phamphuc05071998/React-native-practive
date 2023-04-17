import React from 'react'
import { ScrollView, FlatList, StyleSheet } from 'react-native'
import CategoryItem from './CategoryItem'


function CategoriesList({categories}) {
  return (
    <FlatList style={styles.container} data={categories} keyExtractor={item => item['tracking-id']} renderItem={({item}) => <CategoryItem title={item.display.displayName} image={item.display.images[0]} categoryData={item}/>} />

    
  )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: color.primary100
    }
})
export default CategoriesList