import React, { useEffect, useState } from 'react'
import { Alert, Text } from 'react-native'
import { fetchListCategories } from '../util/FetchCategories'
import CategoriesList from '../components/Home/CategoriesList'
function CategoriesScreen({route}) {
  const [categoriesItems, setCategoriesItems] = useState()
  const tag = route.params.tag
  
  useEffect(() => {
    const  fetchListItem = async () => {
      try {

       const response = await fetchListCategories(tag)
       setCategoriesItems(response.feed)
      
      } catch (err) {
        Alert.alert('Could not fetch data', 'Could not fetch data, please try later')
      }
    }
    fetchListItem()
  },[])
  return (
    <CategoriesList categories={categoriesItems}/>
  )
}

export default CategoriesScreen