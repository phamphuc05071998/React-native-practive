import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import Home from "./screens/Home";
import IconButton from "./components/ui/IconButton";
import Menu from "./screens/Menu";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryScreen from "./screens/CategoryScreen";
import MenuItemScreen from "./screens/MenuItemScreen";
import AuthScreens from "./screens/AuthScreens";
import { Provider } from "react-redux";
import store from "./store/reduxStore";
import { useSelector , useDispatch } from "react-redux";
import { RootState } from "./store/reduxStore";
import ProfileScreens from "./screens/ProfileScreens";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logUserIn } from "./store/AuthReducer";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const openDrawerHandler = () => {};
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="cart"
              size={24}
              color={tintColor}
              onPress={openDrawerHandler}
            />
          ),
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Menu"
          component={Menu}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="menu" color={color} size={size} />
            ),
          }}
        />
        {!isLogin && (
          <Drawer.Screen
            name="Auth"
            component={AuthScreens}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
              title: "Sign up/Sign",
            }}
          />
        )}
        {isLogin && (
          <Drawer.Screen
            name="Logout"
            component={ProfileScreens}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="log-out" color={color} size={size} />
              ),
              title: "Profile",
            }}
          />
        )}
      </Drawer.Navigator>
    </>
  );
};
function Root ()  {
  const [isTryingLogin, setIsTryingLogin] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchToken = async () => {
      const idToken = await AsyncStorage.getItem('idToken')
      if (idToken) {
        dispatch(logUserIn(idToken))
      }
      setIsTryingLogin(false)
    }
    fetchToken()
  }, [isTryingLogin])
  return <>
     <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={StackNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="MenuItemScreen" component={MenuItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  </>
};
export default function App() {
 
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
