import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icons from "react-native-heroicons/solid";
import CustomKeyboard from "../components/customKeyboard";
import MessageList from "../components/messageList";
import { getMessage, sendMessage } from "../controller/MessageController";

const ChatScreen = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const inputRef = useRef("");

    
    let allMessages = [];

    // get messages data
    const getMessagesData = async () => {
        try {
            const data = await getMessage();
            for (const key in data) {
                allMessages.push(data[key].NoiDung);
            }

            setMessages([...allMessages]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSendMessage = async () => {
        if (inputRef) inputRef?.current?.clear();
        await sendMessage(message);
        await getMessagesData();
    };

    useEffect(() => {
        getMessagesData();
    }, []);

    return (
        <CustomKeyboard>
            <View className="flex-1 mx-5">
                {/* header */}
                <SafeAreaView className="justify-center">
                    <Text className="text-2xl text-center font-semibold">
                        Chat
                    </Text>
                </SafeAreaView>

                {/* chat */}
                <View className="flex-1">
                    {messages && <MessageList messages={messages} />}
                </View>

                {/* input */}
                <View className="flex-row justify-between items-center -mx-4 mb-1">
                    <View className="flex-row justify-between bg-white border p-2 border-neutral-300 rounded-full pl-5">
                        <TextInput
                            ref={inputRef}
                            placeholder="Chat with me..."
                            className="flex-1 mr-2"
                            value={message}
                            onChangeText={(e) => setMessage(e)}
                        />
                        <TouchableOpacity
                            onPress={handleSendMessage}
                            className="bg-neutral-200 p-2 mr-[1px] rounded-full">
                            <Icons.PaperAirplaneIcon
                                size={hp(2.7)}
                                color={"#737373"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </CustomKeyboard>
    );
};

export default ChatScreen;
