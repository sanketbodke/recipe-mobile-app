import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyState = ({
    title,
    subtitle
}) => {
    return (
        <View className="flex justify-center items-center px-4">
            <Image
                source={images.notFound}
                resizeMode="contain"
                className="w-[270px] h-[216px]"
            />
            <Text className="text-sm font-pmedium text-black">{title}</Text>
            <Text className="text-xl text-center font-psemibold text-black mt-2">
                {subtitle}
            </Text>

            <CustomButton
                title="Back to Explore"
                handlePress={() => router.push("/home")}
                containerStyles="w-full my-5"
                textStyles="text-[18px]"
            />
        </View>
    )
}

export default EmptyState