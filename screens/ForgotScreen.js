import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import Button from "../components/button";
import { colors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { ForgotPassword } from "../controller/ForgotController";
import Toast from "react-native-toast-message";

const { width, height } = Dimensions.get("window");

const ForgotScreen = () => {
    const [email, setEmail] = useState("");
    const handleVerifyEmail = async () => {
        const result = await ForgotPassword(email);
        Toast.show({
            type: "success",
            text1: result[1],
            topOffset: 70,
            text1Style: { fontSize: 18 },
            text2Style: { fontSize: 15 },
        });

        if (result[0]) navigation.navigate("Verify");
    };

    const navigation = useNavigation();
    return (
        <View className="flex-1 justify-center items-center">
            <Image source={require("../assets/images/bgOther.png")} style={{ width: width, height: height }} />

            <View className="absolute top-52">
                <View className="flex justify-center items-center">
                    <Text className="text-3xl font-bold">Bạn quên mật khẩu ư?</Text>
                    <Text>Đừng lo, chúng tôi sẽ hỗ trợ bạn</Text>
                </View>
                <View style={{ width: wp(90) }} className="mt-20">
                    <TextInput
                        mode="outlined"
                        label={"Email"}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        activeOutlineColor="#3b1d0c"
                        className="mb-5"
                    />
                </View>

                <Button content="Send" handle={handleVerifyEmail} />
            </View>

            <View className="absolute bottom-10 flex-row">
                <Text className="font-semibold">Bạn nhớ mật khẩu rồi sao?</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text className="font-semibold" style={{ color: colors.active }}>
                        {" "}
                        Đăng nhập ngay
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ForgotScreen;
