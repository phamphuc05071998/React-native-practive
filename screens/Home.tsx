import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Slider from "../components/Home/Slider";
import { fetchCategories } from "../util/FetchCategories";
import { color } from "../util/Colors";
import SwiperSlider from "../components/Home/Swiper";
import LoadingApp from "../components/ui/LoadingOverlay";

function Home() {
  const [categories, setCategories] = useState();
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  useEffect(() => {
    const fetchHandler = async () => {
      setIsLoadingCategories(true);
      try {
        const data = await fetchCategories();
        setCategories(data);
        setIsLoadingCategories(false);
      } catch (err) {
        setIsLoadingCategories(false);
        throw new Error("Could not fetch categories");
      }
    };
    fetchHandler();
  }, []);
  if (isLoadingCategories) return <LoadingApp message="Loading"/>;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      {categories && <Slider categories={categories} />}
      <Text style={styles.title}>Best deal</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    padding: 8,
  },
  title: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: "bold",
    color: color.text100,
  },
});
export default Home;
