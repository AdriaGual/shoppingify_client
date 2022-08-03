import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const createDefaultList = async (userId) => {
  await axios.post(`${API_URL}/lists`, {
    user_id: userId,
    name: "List",
    active: true,
  });
  return 200;
};
