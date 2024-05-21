import { View, Text, Alert, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import RecipeCard from '@/components/RecipeCard'
import TrendingPost from '@/components/Trending'
import useRecipes from '@/lib/useRecipes'
import { getAllRecipes } from '@/lib/apiCalls'

const Home = () => {
  const {data: recipes, isLoading, refetch} = useRecipes(getAllRecipes)

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={recipes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <RecipeCard recipe={item} />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6 bg-[#facf50] rounded-[35px] p-4">
              <View>
                <Text className="font-pmedium text-sm text-black">Welcome Back</Text>
                <Text className="text-2xl font-psemibold text-black-100">Shriya</Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={{ uri: "https://avatars.githubusercontent.com/u/114821672?v=4" }}
                  className="w-12 h-12 rounded-[50%]"
                  resizeMode="center"
                />
              </View>
            </View>

            <Text className="text-black-100 text-lg font-pregular mb-3">
              Recently Added
            </Text>

            <TrendingPost />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Home
