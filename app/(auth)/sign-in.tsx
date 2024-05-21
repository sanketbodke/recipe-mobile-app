import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import API_BASE_URL from '@/constants/api'
import axios from 'axios'

const signIn = (username: String, password: String) => {
  const [form, setForm] = useState({
    "username": "",
    "password": ""
  })

  const [isLoading, setIsLoading] = useState(false)

  const submit = async () => {
    setIsLoading(true)
    try {
      // await axios.post(`${API_BASE_URL}/users/login`, form)
      router.push("/home")
    } catch (error) {
      Alert.alert(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[75vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[150px] h-[150px]"
          />

          <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">
            Log in to Let's Cook
          </Text>

          <FormField
            title={"Username"}
            value={form.username}
            handleChangeText={(e: any) => setForm({
              ...form,
              username: e
            })}
            otherStyle="mt-7"
            keyboardTyp="username"
          />

          <FormField
            title={"Password"}
            value={form.password}
            handleChangeText={(e: any) => setForm({
              ...form,
              password: e
            })}
            otherStyle="mt-7"
            keyboardTyp="password"
          />

          <CustomButton
            title={"Sign In"}
            handlePress={() => submit()}
            containerStyles={"mt-7"}
            textStyles={"text-xl"}
            isLoading={isLoading}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-secondary font-pregular">
              Don't have an account?
            </Text>
            <Link href="/home" className="text-lg font-psemibold text-secondary">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn