import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

const TrendingPost = ({data}) => {

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => (
                <Image
                    source={{ uri: item.recipeImg }}
                    className="w-52 h-72 rounded-[30px] mt-3 bg-white/10 mr-5"
                    resizeMode='cover'
                />
            )}
            horizontal
        />
    )
}

export default TrendingPost