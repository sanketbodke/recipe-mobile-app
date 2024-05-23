import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { useGlobalContext } from '@/context/GlobalProvide'
import { register } from '@/lib/apiCalls'

const signUp = (username, password) => {
  const [form, setForm] = useState({
    "username": "",
    "email": "",
    "password": ""
  })

  const [isLoading, setIsLoading] = useState(false)

  const submit = async () => {
    const { setUser, setIsLogged } = useGlobalContext();
    setIsLoading(true)
    try {
      const result = await register(form)

      setUser(result)
      setIsLogged(true)

      router.push("/home")
    } catch (error) {
      Alert.alert(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView className="h-full bg-white">
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
            handleChangeText={(e) => setForm({
              ...form,
              username: e
            })}
            otherStyle="mt-7"
            keyboardTyp="username"
          />

          <FormField
            title={"Email"}
            value={form.email}
            handleChangeText={(e) => setForm({
              ...form,
              email: e
            })}
            otherStyle="mt-7"
            keyboardTyp="email"
          />

          <FormField
            title={"Password"}
            value={form.password}
            handleChangeText={(e) => setForm({
              ...form,
              password: e
            })}
            otherStyle="mt-7"
            keyboardTyp="password"
          />

          <CustomButton
            title={"Sign Up"}
            handlePress={() => submit()}
            containerStyles={"mt-7"}
            textStyles={"text-xl"}
            isLoading={isLoading}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-secondary font-pregular">
              Already have an account ?
            </Text>
            <Link href="/sign-in" className="text-lg font-psemibold text-secondary">Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signUp