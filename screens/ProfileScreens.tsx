import React from 'react'
import { Pressable, Text } from 'react-native'
import IconButton from '../components/ui/IconButton'
function ProfileScreens() {
  const logoutHandler = () => {

  }
  return (
    <IconButton onPress={logoutHandler} size={24} icon="log-out" color="#000" />
      
    
  )
}

export default ProfileScreens