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

const getRecipeById = async (recipeId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipe/${recipeId}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getRecipesCreatedByUser = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipe/userRecipes/${userId}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getSavedRecipes = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipe/savedRecipes/${userId}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllRecipes, getRecipeById, getRecipesCreatedByUser, getSavedRecipes };
