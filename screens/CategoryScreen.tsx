import React, { useState } from "react";
import { Text, ScrollView, View, StyleSheet, Pressable } from "react-native";
import SliderImage from "../components/ui/SliderImage";
import { color } from "../util/Colors";
import Button from "../components/ui/Button";

function CategoryScreen({ route, navigation }) {
  const [expanseDetail, setExpanseDetail] = useState(false);
  const seeMoreDetailHandler = () => {
    setExpanseDetail(true);
  };
  const seeLessDetailHandler = () => {
    setExpanseDetail(false);
  };
  const categoryData = route.params.itemData;

  return (
    <ScrollView>
      <SliderImage images={categoryData.display.images} />
      <View style={styles.screen}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{categoryData.display.displayName}</Text>
        </View>
        <View>
          <Text style={styles.priceText}>
            {categoryData.content.details.price}
          </Text>
        </View>
      {categoryData.content.details.description && <View
          style={
            expanseDetail
              ? styles.productDetailContainerExpanse
              : styles.productDetailContainer
          }
        >
          <View style={styles.productDetail}>
            <Text style={styles.title}>Product detail</Text>
            <Text>{categoryData.content.details.description}</Text>
          </View>
          {!expanseDetail && (
            <Button
              style={styles.expanseButtonStyle}
              onPress={seeMoreDetailHandler}
            >
              See more detail
            </Button>
          )}
          {expanseDetail && (
            <Button style={styles.buttonStyle} onPress={seeLessDetailHandler}>
              See less detail
            </Button>
          )}
        </View>}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 8,
  },
  titleContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: color.gray900,
    fontWeight: "bold",
  },

  priceText: {
    fontSize: 16,

    color: color.red500,
    fontWeight: "bold",
  },
  productDetailContainer: {
    backgroundColor: color.orange000,

    // padding: 16,
    borderRadius: 8,
    marginTop: 16,
    height: 200,
    overflow: "hidden",
  },
  productDetailContainerExpanse: {
    backgroundColor: color.orange000,

    // padding: 16,
    borderRadius: 8,
    marginTop: 16,

    overflow: "hidden",
  },
  productDetail: {
    padding: 16,
    opacity: 0.75,
  },
  expanseButtonStyle: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    borderWidth: 1,
    backgroundColor: color.orange100,
    width: "100%",
    borderColor: color.gray400,
    marginTop: 16,
  },
  buttonStyle: {
    alignSelf: "center",
    borderWidth: 1,
    backgroundColor: color.orange100,
    width: "100%",
    borderColor: color.gray400,
    marginTop: 12,
  },
});
export default CategoryScreen;
