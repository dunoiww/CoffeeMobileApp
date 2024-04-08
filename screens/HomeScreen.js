import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import React, { useState } from 'react'
import * as Icons from 'react-native-heroicons/outline';
import { colors } from '../theme';

const HomeScreen = () => {
    const [isActive, setIsActive] = useState('Tất cả');
  return (
    <View className='flex-1'>
        <ScrollView>
            <View style={{height: hp(35)}} className='bg-yellow-950 space-y-5'>
                <View style={{width: wp(90)}} className='flex-row justify-between mx-auto mt-20 items-center'>
                    <View>
                        <Text className='text-white'>Giao đến</Text>
                        <Text className='text-white text-base font-semibold'>Tân tiến, Đồng Phú, Bình Phước</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/images/avtDemo.png')} style={{width: hp(8), height: hp(8)}}/>
                    </View>
                </View>

                <View className='mx-5 py-2 px-3 bg-white rounded-lg'>
                    <View className='flex-row justify-between'>
                        <TextInput placeholder='tìm món...' className='text-lg'/>

                        <TouchableOpacity className='p-1 bg-yellow-950 rounded-lg'>
                            <Icons.MagnifyingGlassIcon size={24} color='#ffffff'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View className='-mt-20'>
                <View className='justify-center items-center'>
                    <Image source={require('../assets/images/Frame 17.png')} resizeMode='contain' style={{width: 400, height: 200}} />
                </View>
            </View>

            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingLeft: 15}}>
                    <View className='flex-row space-x-5'>
                        <TouchableOpacity onPress={() => setIsActive('Tất cả')} style={{backgroundColor: isActive === "Tất cả" ? colors.active : 'black'}} className='p-2 rounded-lg'>
                            <Text className='text-lg text-white'>Tất cả</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsActive('Món chính')} style={{backgroundColor: isActive === "Món chính" ? colors.active : 'black'}} className='p-2 rounded-lg'>
                            <Text className='text-lg text-white'>Món chính</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsActive('Món phụ')} style={{backgroundColor: isActive === "Món phụ" ? colors.active : 'black'}} className='p-2 rounded-lg'>
                            <Text className='text-lg text-white'>Món phụ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsActive('Đồ uống')} style={{backgroundColor: isActive === "Đồ uống" ? colors.active : 'black'}} className='p-2 rounded-lg'>
                            <Text className='text-lg text-white'>Đồ uống</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    </View>
  )
}

export default HomeScreen