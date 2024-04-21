import { View, Text, ScrollView } from "react-native";
import React from "react";
import MessageItem from "./messageItem";

const MessageList = ({ messages }) => {
    return (
        <ScrollView>
            {
                messages.map((message, index) => {
                    return (
                        <MessageItem key={index} message={message} />
                    )
                })
            }
        </ScrollView>
    );
};

export default MessageList;
