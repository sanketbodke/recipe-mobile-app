import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { icons } from '@/constants';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getRecipeById } from '@/lib/apiCalls';
import useRecipes from '@/lib/useRecipes';

const Recipe = () => {
  const { recipeId } = useLocalSearchParams();
  const router = useRouter();

  const { data: recipe } = useRecipes(() => (
    getRecipeById(recipeId)
  ))

  const { name, recipeImg, description, ingredients, instructions } = recipe;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="flex-row justify-between items-center px-4 py-3">
          <TouchableOpacity
            onPress={() => router.push('/home')}
          >
            <Image
              source={icons.left}
              className="w-7 h-7 rounded-full"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Image
            source={icons.bookmark}
            className="w-7 h-7 rounded-full shadow overflow-visible"
            resizeMode="contain"
          />
        </View>
        <View className="relative">
          <ImageBackground
            source={{ uri: recipeImg }}
            className="w-full h-[350px]"
            resizeMode="cover"
          >
            <View className="flex-1 justify-end">
              <View className="p-4 border-r-t-2 rounded-t-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', }}>
                <Text className="text-black text-[30px] font-bold tracking-wider">{name}</Text>
              </View>
            </View>
          </ImageBackground>

        </View>
        <View className="p-4">
          <Text className="text-lg font-bold mb-2 tracking-wider">Description</Text>
          <Text className="mb-4 tracking-wider leading-5 text-[16px]">{description}</Text>
          <Text className="text-lg font-bold mb-2 tracking-wider">Ingredients</Text>
          <Text className="mb-4 tracking-wider leading-5 text-[16px]">{ingredients}</Text>
          <Text className="text-lg font-bold mb-2 tracking-wider">Instructions</Text>
          <Text className="mb-4 tracking-wider leading-5 text-[16px]">{instructions}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipe;
