import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const TrendingPost = ({ data }) => {
    return (
        <FlatList
            data={data.reverse()}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => {
                        router.push(item._id)
                    }}
                >
                    <Image
                        source={{ uri: item.recipeImg }}
                        className="w-52 h-72 rounded-[30px] mt-3 bg-white/10 mr-5"
                        resizeMode='cover'
                    />
                </TouchableOpacity>
            )}
            horizontal
        />
    )
}

export default TrendingPost