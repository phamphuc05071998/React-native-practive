import React from "react";
import { View, StyleSheet } from "react-native";
import MenuItem from "./MenuItem";
import { ScrollView } from "react-native";
function MenuList({ data }) {
    
  return (
    <ScrollView>

    <View style={styles.list}>
      {data.map((item: any, i: number) => (
        <MenuItem
            key={i}
          title={item.display.displayName}
          image={item.display.categoryImage}
          tag={item.display.tag}
        />
      ))}
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  list: {
    padding: 8,
    flexDirection: 'row',
    gap: 16,
    flexWrap: "wrap",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 24
  },
});
export default MenuList;
