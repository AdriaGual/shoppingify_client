import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const getCategoriesWithItems = async () => {
  console.log("aaa");
  const { data } = await axios.get(`${API_URL}/categories/get_items`);
  return data;
};
