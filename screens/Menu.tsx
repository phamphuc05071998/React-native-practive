import React, { useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import { fetchMenu } from "../util/FetchCategories";
import MenuList from "../components/Menu/MenuList";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function Menu() {
  const [menuList, setMenuList] = useState();
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    const fetchMenuHandler = async () => {

      try {
        const res = await fetchMenu();
       setIsLoading(false)
        setMenuList(res["browse-categories"]);
      } catch (err) {
       setIsLoading(false)

        Alert.alert("Could not fetch menu", err.message);
      }
    };
    fetchMenuHandler();
  }, [fetchMenu]);
  if (isLoading) return <LoadingOverlay message='Loading'/>
  return (
    <>
     
    {menuList && <MenuList data={menuList}/>}
    </>
  );
}

export default Menu;
