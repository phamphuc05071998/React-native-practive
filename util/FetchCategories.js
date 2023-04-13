import axios from "axios";

export const fetchCategories = async () => {
  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/categories/list",
    headers: {
      "X-RapidAPI-Key": "17f0082575msh90c99cc71240602p109d4fjsn0f2f269ba0a0",
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);

    return response.data["shopping-categories"];
  } catch (err) {
    throw new Error("Could not fetch categories");
  }
};

export const fetchListCategories = async (tag) => {
  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/feeds/list",
    params: { limit: "24", start: "0", tag: tag },
    headers: {
      "X-RapidAPI-Key": "17f0082575msh90c99cc71240602p109d4fjsn0f2f269ba0a0",
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);

    return response.data;
  } catch (err) {
    throw new Error("Could not fetch data");
  }
};
