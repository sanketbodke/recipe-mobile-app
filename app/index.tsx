import { View, Text, ScrollView, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center h-full px-4">
          <View>
            <Text className="text-secondary text-[29px] font-pregular font-[900]">What time is it?</Text>
            <Text className="text-secondary text-[32px] font-pregular font-[900]">It's cooking time!</Text>
          </View>
          <Image
            // source={{uri: "https://i.postimg.cc/sD79Mv0h/image.png"}}
            source={images.chefImg}
            className="w-full h-[400px]"
            resizeMode="contain"
          />

          <CustomButton
            title="Let's Cook"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
            textStyles="text-xl"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#000000" style="dark" />
    </SafeAreaView>
  )
}

export default index