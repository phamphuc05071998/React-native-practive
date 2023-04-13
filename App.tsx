import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import Home from "./screens/Home";
import IconButton from "./components/ui/IconButton";
import Menu from "./screens/Menu";
import {Ionicons} from "@expo/vector-icons"
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryScreen from "./screens/CategoryScreen";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  const openDrawerHandler = () => {};
  const StackNavigator = () => {
    return <>
       <Drawer.Navigator screenOptions={{
          headerRight :({tintColor}) => <IconButton icon="cart" size={24} color={tintColor} onPress={openDrawerHandler} /> 
        }}>
          <Drawer.Screen name="Home" component={Home} options={{
            drawerIcon: ({color, size}) => <Ionicons name="home" color={color} size={size}/>
          }}/>
          <Drawer.Screen name="Menu" component={Menu} options={{
            drawerIcon: ({color, size}) => <Ionicons name="menu" color={color} size={size}/>
          }} />
         
        </Drawer.Navigator>
   </>
    
  }
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Drawer' component={StackNavigator} options={{
          headerShown:false
        }}/>
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Category' component={CategoryScreen}/>
    </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
