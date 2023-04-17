import React, {useEffect, useState, useLayoutEffect} from 'react'
import { Alert, Text } from 'react-native'
import { fetchListCategories } from '../util/FetchCategories'
import CategoriesList from '../components/Home/CategoriesList'
import LoadingOverlay from '../components/ui/LoadingOverlay'

function MenuItemScreen({route, navigation }) {
    const [isLoading, setIsLoading] = useState(false)
    const [menuItemDetail, setMenuItemDetail] = useState()
    const tag = route.params.tag
    const title = route.params.title
   useLayoutEffect(() => {
    navigation.setOptions({
        title: title
    })
   })
    useEffect(() => {
        const fetchMenuItemHandler = async () => {
            setIsLoading(true)
            try {
                console.log(tag)
                const response = await fetchListCategories(tag)
                setMenuItemDetail(response.feed)
                console.log(response.feed)
                setIsLoading(false)
            } catch (err) {
                setIsLoading(false)

                Alert.alert('Could not fetch data, please try again later', err.message)
            }
        }
        fetchMenuItemHandler()
    },[fetchListCategories])
    if (isLoading) return <LoadingOverlay  message='Loading'/>
  return (
   <CategoriesList categories={menuItemDetail}/>
  )
}

export default MenuItemScreen