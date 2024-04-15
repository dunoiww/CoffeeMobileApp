import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import React, { useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import * as Icons from "react-native-heroicons/outline";
import { colors } from "../theme";
import Categories from "../components/categories";
import Item from "../components/item";
import { useNavigation } from "@react-navigation/native";
import Draggable from "react-native-draggable";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [isActive, setIsActive] = useState("Tất cả");
    const categories = ["Espresso", "Machiato", "Latte", "America"];
    const quantity = 2;
    return (
        <View className="flex-1">
            <ScrollView>
                <View style={{ height: hp(35) }} className="bg-yellow-950 space-y-5">
                    {/* Header */}
                    <View style={{ width: wp(90) }} className="flex-row justify-between mx-auto mt-20 items-center">
                        <View>
                            <Text className="text-white">Giao đến</Text>
                            <Text className="text-white text-base font-semibold">Tân tiến, Đồng Phú, Bình Phước</Text>
                        </View>
                        <View>
                            <Image
                                source={require("../assets/images/avtDemo.png")}
                                style={{ width: hp(8), height: hp(8) }}
                            />
                        </View>
                    </View>
                    {/* Search bar */}
                    <View className="mx-5 py-2 px-3 bg-white rounded-lg">
                        <View className="flex-row justify-between">
                            <TextInput placeholder="tìm món..." className="text-lg" />

                            <TouchableOpacity
                                className="p-1 bg-yellow-950 rounded-lg">
                                <Icons.MagnifyingGlassIcon size={24} color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View className="-mt-20">
                    {/* carousel */}
                    <Carousel
                        loop
                        width={wp(100)}
                        height={hp(22)}
                        autoPlay={true}
                        data={[
                            { id: 1, image: require("../assets/images/Frame 17.png") },
                            { id: 2, image: require("../assets/images/Frame 17.png") },
                            { id: 3, image: require("../assets/images/Frame 17.png") },
                            { id: 4, image: require("../assets/images/Frame 17.png") },
                        ]}
                        scrollAnimationDuration={1000}
                        renderItem={({ item }) => (
                            <View className="justify-center items-center">
                                <Image
                                    source={item.image}
                                    resizeMode="contain"
                                    style={{ width: wp(90), height: hp(20) }}
                                />
                            </View>
                        )}
                    />
                </View>

                {/* categories */}
                <View className="mx-2">
                    <Categories categories={categories} />
                </View>

                {/* card item */}
                <View className="mx-5 mt-5 flex-row flex-wrap justify-between">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </View>
            </ScrollView>

            {/* cart */}
            <Draggable
                x={wp(80)}
                y={hp(82)}
                renderSize={24}
                renderColor="amber"
                isCircle>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')} className="p-5 bg-yellow-600 rounded-full">
                            <Icons.ShoppingCartIcon size={30} strokeWidth={2} color={colors.primary} />
                            <View className='absolute -right-1 top-1 bg-red-500 px-2 rounded-full'>
                                <Text className='text-white text-base'>{quantity}</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
            </Draggable>
        </View>
    );
};

export default HomeScreen;
