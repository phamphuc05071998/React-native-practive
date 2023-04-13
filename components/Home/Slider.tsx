import React from 'react'
import { ScrollView, Text } from 'react-native'
import CategoriesItem from './CategoriesItem'

function Slider({categories}) {
    console.log(categories)
  return (
   <ScrollView horizontal={true}>
    {categories.map(category => <CategoriesItem image={category.display.categoryImage} title={category.display.displayName} tag={category.display.tag}/>)}
   </ScrollView>
  )
}

export default Slider