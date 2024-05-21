import API_BASE_URL from "@/constants/api";
import axios from "axios";

const getAllRecipes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipe`);

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllRecipes };
