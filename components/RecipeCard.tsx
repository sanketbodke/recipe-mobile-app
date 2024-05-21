import { View, Text, Image } from 'react-native'
import React from 'react'


const RecipeCard = ({ recipe: {
    name,
    description,
    recipeImg
} }) => {
    return (
        <View className="px-4 mb-8">
            <View className="bg-white rounded-[10px] shadow-lg p-4">
                <Image
                    source={{ uri: recipeImg }}
                    className="w-full h-60 rounded-[10px] mb-4"
                    resizeMode='cover'
                />
                <View>
                    <Text className="text-[24px] font-semibold text-gray-800">{name}</Text>
                    <Text className="text-[16px] mt-2 text-gray-600 tracking-wide leading-6">{description}</Text>
                </View>
            </View>
        </View>
    )
}

export default RecipeCard
