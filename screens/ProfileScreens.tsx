import React from 'react'
import { Pressable, Text, View, Image } from 'react-native'
import IconButton from '../components/ui/IconButton'
import { useDispatch } from 'react-redux'
import { logUserOut } from '../store/AuthReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
function ProfileScreens() {
  const dispatch = useDispatch()
  const logoutHandler = async() => {
    dispatch(logUserOut())
    await AsyncStorage.removeItem('idToken')
  }
  return (
    <>
    <Text>Logout</Text>
    <IconButton onPress={logoutHandler} size={24} icon="log-out" color="#000" />
    </>
  )
}

export default ProfileScreens