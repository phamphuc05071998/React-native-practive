import React from 'react'
import { ScrollView, Text } from 'react-native'
import SliderItem from './SliderItem'

function Slider({categories}) {
    
  return (
   <ScrollView horizontal={true}>
    {categories.map((category, i: number) => <SliderItem key={i} image={category.display.categoryImage} title={category.display.displayName} tag={category.display.tag}/>)}
   </ScrollView>
  )
}

export default Slider