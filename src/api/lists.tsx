import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const createDefaultList = async (userId) => {
  await axios.post(`${API_URL}/lists`, {
    user_id: userId,
    name: "Shopping list",
    active: true,
  });
  return 200;
};

export const findActiveList = async (userId) => {
  const { data } = await axios.get(`${API_URL}/lists/find_by_user_id`, {
    params: { user_id: userId },
  });
  return data;
};

export const addItemToList = async (itemId, listId) => {
  await axios.post(
    `${API_URL}/lists/add_item_to_list/` + itemId + "/" + listId
  );
  return 200;
};
