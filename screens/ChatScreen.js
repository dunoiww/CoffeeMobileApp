import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icons from "react-native-heroicons/solid";
import CustomKeyboard from "../components/customKeyboard";

const ChatScreen = () => {
    return (
        <CustomKeyboard>
            <SafeAreaView className="flex-1 mx-5">
                {/* header */}
                <View className="justify-center">
                    <Text className="text-2xl text-center font-semibold">Chat</Text>
                </View>

                {/* chat */}
                <View className="flex-1"></View>

                {/* input */}
                <View className="flex-row justify-between items-center -mx-4">
                    <View className="flex-row justify-between bg-white border p-2 border-neutral-300 rounded-full pl-5">
                        <TextInput placeholder="Chat with me..." className="flex-1 mr-2" />
                        <TouchableOpacity className="bg-neutral-200 p-2 mr-[1px] rounded-full">
                            <Icons.PaperAirplaneIcon size={hp(2.7)} color={"#737373"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </CustomKeyboard>
    );
};

export default ChatScreen;
