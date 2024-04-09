import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import * as Icons from "react-native-heroicons/solid";
import MenuItemProfile from "../components/menuItemProfile";


const width = Dimensions.get("window").width;

const ProfileScreen = () => {
    const menuItems = [
        {icon: 'BookmarkIcon', title: 'Đã lưu'},
        {icon: 'ClipBoardDocumentListIcon', title: 'Đơn hàng'},
        {icon: 'HeartIcon', title: 'Yêu thích'},
    ]
    return (
        <View className='flex-1'>
            <ScrollView>

                {/* avatar */}
                <View style={{height: hp(25)}} className='bg-yellow-950'>
                    <View className='justify-center items-center mt-20'>
                        <Text className='text-white text-xl font-bold text-center'>Hồ sơ của tôi</Text>
                    </View>
                    <View className='justify-center items-center mt-16'>
                        <Image source={require('../assets/images/avtDemo.png')} resizeMode="contain" style={{width: hp(12), height: hp(12)}}/>
                    </View>
                </View>

                {/* info */}
                <View className='mt-16 space-y-1'>
                    <View className='flex-row justify-center gap-2 items-center'>
                        <Text className='text-lg font-semibold text-center'>Ngo Nam</Text>
                        <TouchableOpacity className='p-1 bg-gray-300 rounded-full'>
                            <Icons.PencilIcon size={20} color='#000000'/>
                        </TouchableOpacity>
                    </View>
                    <Text className='text-center text-gray-500'>namngo102003@gmail.com</Text>
                    <Text className='text-center text-gray-500'>0987654321</Text>
                </View>

                {/* menu item */}
                <View className='mx-5 mt-10'>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <MenuItemProfile key={index} icon={item.icon} title={item.title} />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
};

export default ProfileScreen;
