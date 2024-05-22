import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import useRecipes from '@/lib/useRecipes'
import { getRecipesCreatedByUser } from '@/lib/apiCalls'
import { SafeAreaView } from 'react-native-safe-area-context'
import RecipeCard from '@/components/RecipeCard'
import { icons } from '@/constants'
import { router } from 'expo-router'

const profile = () => {
  const userId = "664c96350b1ca00a5c5ab45e"

  const { data: userData } = useRecipes(() => (
    getRecipesCreatedByUser(userId)
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
                source={icons.logout}
                className="w-7 h-7 rounded-full shadow overflow-visible"
                resizeMode="contain"
              />
            </View>
            <View className="justify-center items-center gap-2 mb-6">
              <View className="mt-1.5">
                <Image
                  source={{ uri: "https://avatars.githubusercontent.com/u/114821672?v=4" }}
                  className="w-12 h-12 rounded-[10%]"
                  resizeMode="cover"
                />
              </View>
              <Text className="text-[20px] font-medium">Shriya</Text>
            </View>
          </>
        )}
      />
    </SafeAreaView>
  )
}

export default profile