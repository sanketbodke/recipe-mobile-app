import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

import { icons } from "@/constants";

const TabIcon = ({
    icon,
    color,
    name,
    focused
}) => {
    return (
        <View className="flex item-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
                style={{ color: color }}
            >{name}</Text>
        </View>
    )
}

const _layout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#000000",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#ffffff",
                        borderTopWidth: 1,
                        borderTopColor: "#ffffff",
                        height: 84,
                    },
                }}
            >

                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="savedRecipes"
                    options={{
                        title: "SavedRecipes",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.bookmark}
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="create"
                    options={{
                        title: "Create Recipe",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.plus}
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />

            </Tabs>
        </>
    )
}

export default _layout