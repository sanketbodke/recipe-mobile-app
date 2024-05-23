import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { images } from '../constants';
import { useGlobalContext } from '../context/GlobalProvide';
import { router } from 'expo-router';

const Index = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) {
    router.push("/home")
    return null;
  }

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center h-full px-4">
          <View>
            <Text className="text-secondary text-[29px] font-pregular font-[900]">What time is it?</Text>
            <Text className="text-secondary text-[32px] font-pregular font-[900]">It's cooking time!</Text>
          </View>
          <Image
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
  );
};

export default Index;
