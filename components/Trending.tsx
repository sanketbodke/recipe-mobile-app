import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

const TrendingPost = () => {
    const postImg = [
        { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4j1JeMqzn7ANxVA5uQ0Pu_vc3BxsiGjf_T0Sto1ryMIyTvg4PDjeImzjMRqLNzgNxQCY&usqp=CAU", id: 1 },
        { imgUrl: "https://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-680x900.jpg", id: 2 },
        { imgUrl: "https://picturetherecipe.com/wp-content/uploads/2020/07/Butter-Chicken-PTR-Featured-680x900.jpg", id: 3 },
        { imgUrl: "https://therecipecritic.com/wp-content/uploads/2019/05/besthomemadepizzahero.jpg", id: 4 },
        { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4j1JeMqzn7ANxVA5uQ0Pu_vc3BxsiGjf_T0Sto1ryMIyTvg4PDjeImzjMRqLNzgNxQCY&usqp=CAU", id: 5 }
    ]
    return (
        <FlatList
            data={postImg}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <Image
                    source={{ uri: item.imgUrl }}
                    className="w-52 h-72 rounded-[30px] mt-3 bg-white/10 mr-5"
                    resizeMode='contain'
                />
            )}
            horizontal
        />
    )
}

export default TrendingPost