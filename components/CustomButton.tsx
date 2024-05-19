import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading
}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-primary rounded-xl min-h-[62px] flex flex-row justify-center 
            items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
            disabled={isLoading}
        >
            <Text className={`text-black font-[500] tracking-widest ${textStyles}`}>
                {title}
            </Text>

            {isLoading && (
                <ActivityIndicator
                    animating={isLoading}
                    color="#fff"
                    size="small"
                    className="ml-2"
                />
            )}
        </TouchableOpacity>
    )
}

export default CustomButton