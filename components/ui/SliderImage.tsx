import React from 'react'
import { ScrollView } from 'react-native'
import { Image, StyleSheet } from 'react-native'
function SliderImage({images}) {
  return (
   <ScrollView horizontal={true} removeClippedSubviews showsHorizontalScrollIndicator={false}>
    {images.map(image => <Image  style={styles.image} source={{uri: image}}/>)}
   </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
        padding: 16,

    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 8,
        padding: 16,

    }
})
export default SliderImage