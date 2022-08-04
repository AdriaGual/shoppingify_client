import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const deleteItem = async (itemId: any) => {
  await axios.delete(`${API_URL}/items/` + itemId);
  return 200;
};
