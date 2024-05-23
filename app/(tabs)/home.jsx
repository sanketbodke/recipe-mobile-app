import { View, Text, Alert, FlatList, Image, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RecipeCard from '@/components/RecipeCard'
import TrendingPost from '@/components/Trending'
import useRecipes from '@/lib/useRecipes'
import { getAllRecipes } from '@/lib/apiCalls'
import EmptyState from '@/components/EmptyState'
import { useGlobalContext } from '../../context/GlobalProvide';
import { images } from '@/constants'

const Home = () => {
  const { data: recipes, isLoading } = useRecipes(getAllRecipes)
  const { user } = useGlobalContext();
  
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
                <Text className="text-2xl font-psemibold text-black-100">{user?.user?.username}</Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.chefImg}
                  className="w-12 h-12 rounded-[50%]"
                  resizeMode="center"
                />
              </View>
            </View>

            <Text className="text-black-100 text-lg font-pregular mb-3">
              Recently Added
            </Text>

            {isLoading ? (
              <ActivityIndicator
                animating={isLoading}
                color="#000"
                size="large"
                className="mt-2"
              />
            ) : <TrendingPost
              data={recipes}
            />}

          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title={"No recipes found"}
            subtitle={"Be the first one to create recipe"}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Home
