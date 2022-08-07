import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const deleteItem = async (itemId: any) => {
  await axios.delete(`${API_URL}/items/` + itemId);
  return 200;
};

export const createItem = async (data: any) => {
  await axios.post(`${API_URL}/items`, {
    name: data.name,
    note: data.note,
    image: data.image,
    category_id: data.category,
  });
  return 200;
};

export const getTopItemsCategories = async () => {
  const { data } = await axios.get(`${API_URL}/items/get_top_items_categories`);
  return data;
};
