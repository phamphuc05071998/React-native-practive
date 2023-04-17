import React, {useState} from "react";
import { ScrollView } from "react-native";
import { Image, StyleSheet, Dimensions, View, Text } from "react-native";
function SliderImage({ images }) {
    const [activePaging, setActivePaging] = useState(0)
    const onScrollHandler =({nativeEvent}) => {
     const pag =   Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    setActivePaging(pag)

    }
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
      >
        {images.map((image :string, i: number) => (
          <Image
            resizeMode="cover"
            key={i}
            style={styles.image}
            source={{ uri: image }}
          />
        ))}
      </ScrollView>
      <View style={styles.pagingContainer}>
        {images.map((image: string, i: number) =>   <Text key={i}  style={activePaging === i ? styles.pagingTextActive : styles.pagingText} >⬤ </Text>) }
       
      </View>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight * 0.5,
    marginTop: 15
  },
  image: {
    width: deviceWidth,
    height: deviceHeight * 0.5,
  },
  pagingContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  pagingText: {
    color: "#bbb"
  },
  pagingTextActive: {
    color: 'black'
  }
});
export default SliderImage;
