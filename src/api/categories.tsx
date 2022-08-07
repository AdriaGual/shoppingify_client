import axios from "axios";

const API_URL = "https://shoppingify-back.herokuapp.com/api";

export const getCategoriesWithItems = async () => {
  const { data } = await axios.get(`${API_URL}/categories/get_items`);
  return data;
};
