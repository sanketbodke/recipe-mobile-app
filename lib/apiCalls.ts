import API_BASE_URL from "@/constants/api";
import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const register = async (formData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/register`,
      formData
    );
  } catch (error) {
    Alert.alert(error.message);
  }
};

const login = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login`, formData);
    await AsyncStorage.setItem(
      "@user_data",
      JSON.stringify(response.data.data)
    );
  } catch (error) {
    Alert.alert(error.message);
  }
};

const getCurrentUser = async () => {
  try {
    const userData = await AsyncStorage.getItem("@user_data");
    if (userData) {
      return JSON.parse(userData);
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const logOut = async () => {
  try {
    await AsyncStorage.removeItem("@user_data");
  } catch (error) {
    console.log("Error clearing user data: ", error);
  }
};

const createRecipe = async (formData) => {
  try {
    await axios.post(`${API_BASE_URL}/recipe/create`, formData);
  } catch (error) {
    Alert.alert(error.message);
  }
};

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
    const response = await axios.get(
      `${API_BASE_URL}/recipe/userRecipes/${userId}`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getSavedRecipes = async (userId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/recipe/savedRecipes/${userId}`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  register,
  login,
  logOut,
  createRecipe,
  getCurrentUser,
  getAllRecipes,
  getRecipeById,
  getRecipesCreatedByUser,
  getSavedRecipes,
};
