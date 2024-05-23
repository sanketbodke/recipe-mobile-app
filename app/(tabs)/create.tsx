import { View, Text, ScrollView, Alert, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import { icons } from '@/constants'
import { useGlobalContext } from '@/context/GlobalProvide'

const create = () => {
  const { user } = useGlobalContext();

  const userId = user.user._id

  const [form, setForm] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    recipeImg: "",
    cookingTime: 0,
    userOwner: userId,
  })

  const [isLoading, setIsLoading] = useState(false)

  const submit = async () => {
    setIsLoading(true)
    try {
      // await axios.post(`${API_BASE_URL}/users/login`, form)
      router.push("/create")
    } catch (error) {
      Alert.alert(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[75vh] px-4 my-3">
          <View>
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
              <Text className="text-[20px] font-medium">Create Recipes</Text>
            </View>
          </View>
          <FormField
            title={"Name"}
            value={form.name}
            handleChangeText={(e: any) => setForm({
              ...form,
              name: e
            })}
            otherStyle="mt-7"
            keyboardTyp="name"
          />

          <FormField
            title={"description"}
            value={form.description}
            handleChangeText={(e: any) => setForm({
              ...form,
              description: e
            })}
            otherStyle="mt-7"
            keyboardTyp="description"
          />

          <FormField
            title={"ingredients"}
            value={form.ingredients}
            handleChangeText={(e: any) => setForm({
              ...form,
              ingredients: e
            })}
            otherStyle="mt-7"
            keyboardTyp="ingredients"
          />

          <FormField
            title={"instructions"}
            value={form.instructions}
            handleChangeText={(e: any) => setForm({
              ...form,
              instructions: e
            })}
            otherStyle="mt-7"
            keyboardTyp="instructions"
          />

          <FormField
            title={"recipeImg Url"}
            value={form.recipeImg}
            handleChangeText={(e: any) => setForm({
              ...form,
              recipeImg: e
            })}
            otherStyle="mt-7"
            keyboardTyp="recipeImg"
          />

          <FormField
            title={"cookingTime"}
            value={form.cookingTime}
            handleChangeText={(e: any) => setForm({
              ...form,
              cookingTime: e
            })}
            otherStyle="mt-7"
            keyboardTyp="cookingTime"
          />

          <CustomButton
            title={"Create Recipe"}
            handlePress={() => submit()}
            containerStyles={"mt-7"}
            textStyles={"text-xl"}
            isLoading={isLoading}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default create