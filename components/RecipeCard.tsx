import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '@/constants'
import { router } from 'expo-router'


const RecipeCard = ({ recipe: {
    _id,
    name,
    cookingTime,
    recipeImg
} }) => {
    return (
        <View className="px-4 mb-8">
            <TouchableOpacity
                onPress={() => {
                    router.push(`/${_id}`)
                }}
            >
                <View className="bg-white rounded-[10px] shadow-lg p-4">
                    <Image
                        source={{ uri: recipeImg }}
                        className="w-full h-60 rounded-[10px] mb-4"
                        resizeMode='cover'
                    />
                    <View>
                        <Text className="text-[24px] font-semibold text-gray-800">{name}</Text>
                        <View className="flex-row items-center gap-2 mt-0.5">

                            <Image
                                source={icons.clock}
                                className="w-5 h-5"
                                resizeMode='contain'
                            />
                            <Text className="text-[16px] mt-2 text-gray-600 tracking-wide leading-6">{cookingTime} min</Text>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default RecipeCard
