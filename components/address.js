import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import * as Icons from "react-native-heroicons/outline";
import { RadioButton } from "react-native-paper";
import { colors } from "../theme";

const Address = () => {
    const [isCheck, setIsCheck] = React.useState(false);
    const checked = isCheck ? 'bg-amber-400' : 'bg-white';
    return (
        <View className="mt-2 border border-gray-300 rounded-xl bg-white">
            <Pressable
                onPress={() => console.log("nam")}
                className="p-2 space-y-1 flex-row justify-between items-center">
                
                <TouchableOpacity onPress={() => setIsCheck(!isCheck)}>
                    <View className={"border-2 border-gray-500 p-3 rounded-full " + checked} />
                </TouchableOpacity>

                <View style={{ width: wp(70) }} className='space-y-1'>
                    <View className="flex-row gap-1 items-center">
                        <Text className='font-semibold text-base'>Ngo Nam</Text>
                        <Text className='text-base'>|</Text>
                        <Text className='font-semibold text-base'>0987654321</Text>
                    </View>
                    <View>
                        <Text>KTX Khu B, Đường Nguyễn Du, Khu Phố 6, Phường Đông Hoà, Thành Phố Dĩ An, Bình Dương</Text>
                    </View>
                </View>
                <View>
                    <Icons.ChevronRightIcon size={24} color={"black"} />
                </View>
            </Pressable>
        </View>
    );
};

export default Address;
