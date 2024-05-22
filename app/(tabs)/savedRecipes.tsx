import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import useRecipes from '@/lib/useRecipes'
import { getSavedRecipes } from '@/lib/apiCalls'
import { SafeAreaView } from 'react-native-safe-area-context'
import RecipeCard from '@/components/RecipeCard'
import { icons } from '@/constants'
import { router } from 'expo-router'

const savedRecipes = () => {
  const userId = "664c96350b1ca00a5c5ab45e"

  const { data: userData } = useRecipes(() => (
    getSavedRecipes(userId)
  ))

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={userData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <RecipeCard recipe={item} />
        )}
        ListHeaderComponent={() => (
          <>
            <View className="px-4 py-3">
              <TouchableOpacity
                onPress={() => router.push('/home')}
              >
                <Image
                  source={icons.left}
                  className="w-7 h-7 rounded-full shadow overflow-visible"
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <View className="my-6">
                <Text className="text-[20px] font-medium">Saved Recipes</Text>
              </View>
            </View>
          </>
        )}
      />
    </SafeAreaView>
  )
}

export default savedRecipes