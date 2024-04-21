import { View, Text, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import React from 'react'

const MessageItem = ({message}) => {
  return (
    <View className='flex-row justify-end mb-1 items-center gap-2'>
        <View style={{width: wp(80)}}>
            <View className='flex self-end p-3 rounded-2xl bg-white border border-neutral-200'>
                <Text style={{fontSize: hp(1.9)}}>{message}</Text>
            </View>
        </View>
    </View>
  )
}

export default MessageItem