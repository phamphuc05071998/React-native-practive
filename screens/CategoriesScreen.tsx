import React, { useEffect, useState } from 'react'
import { Alert, Text } from 'react-native'
import { fetchListCategories } from '../util/FetchCategories'
import CategoriesList from '../components/Home/CategoriesList'
import LoadingApp from '../components/ui/LoadingOverlay'
function CategoriesScreen({route}) {
  const [categoriesItems, setCategoriesItems] = useState()
  const tag = route.params.tag
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const  fetchListItem = async () => {
      setIsLoading(true)
      try {
       const response = await fetchListCategories(tag)
       setCategoriesItems(response.feed)
      setIsLoading(false)
      } catch (err) {
        setIsLoading(true)
        Alert.alert('Could not fetch data', 'Could not fetch data, please try later')
      }
    }
    fetchListItem()
  },[])
  if (isLoading) return <LoadingApp message='Loading'/>
  return (
    <CategoriesList categories={categoriesItems}/>
  )
}

export default CategoriesScreen