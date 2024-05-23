import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import useRecipes from '@/lib/useRecipes'
import { getRecipesCreatedByUser, logOut } from '@/lib/apiCalls'
import { SafeAreaView } from 'react-native-safe-area-context'
import RecipeCard from '@/components/RecipeCard'
import { icons, images } from '@/constants'
import { router } from 'expo-router'
import { useGlobalContext } from '@/context/GlobalProvide'
import EmptyState from '@/components/EmptyState'

const profile = () => {

  const { user, setUser,setIsLogged } = useGlobalContext();

  const userId = user.user._id

  const { data: userData } = useRecipes(() => (
    getRecipesCreatedByUser(userId)
  ))

  const logOutUser = async () => {
    await logOut()
    setUser(null)
    setIsLogged(false)
  }

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
              <TouchableOpacity
                onPress={() => logOutUser()}
              >
              <Image
                source={icons.logout}
                className="w-7 h-7 rounded-full shadow overflow-visible"
                resizeMode="contain"
              />
              </TouchableOpacity>
            </View>
            <View className="justify-center items-center gap-2 mb-6">
              <View className="mt-1.5">
                <Image
                  source={images.chefImg}
                  className="w-20 h-20 rounded-[10%]"
                  resizeMode="cover"
                />
              </View>
              <Text className="text-[20px] font-medium">{user.user.username}</Text>
            </View>
          </>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title={"No recipes found"}
            subtitle={"Create Your First Recipe"}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default profile