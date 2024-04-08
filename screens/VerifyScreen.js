import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import Button from "../components/button";
import { colors } from "../theme";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const VerifyScreen = () => {
    const navigation = useNavigation();
    const [otp, setOTP] = useState("");

    useEffect(() => {
        if (otp.length === 4) {
            setTimeout(() => {
                navigation.replace('Home')
            }, 3000);
        }
    }, [otp]);

    return (
        <View className="flex-1 justify-center items-center">
            <Image source={require("../assets/images/bgOther.png")} style={{ width: width, height: height }} />

            <View className="absolute top-52">
                <View className="flex justify-center items-center">
                    <Text className="text-3xl font-bold">Xác nhận OTP</Text>
                    <Text>Nhập mã xác nhận đã được gửi về email của bạn</Text>
                </View>
                <View className="mt-20 flex-row space-x-5 justify-between">
                    <TextInput
                        mode="outlined"
                        activeOutlineColor="#3b1d0c"
                        className="mb-5 text-center"
                        onChangeText={(e) => setOTP((text) => text + e)}
                    />
                    <TextInput
                        mode="outlined"
                        activeOutlineColor="#3b1d0c"
                        className="mb-5 text-center"
                        textAlign="center"
                        onChangeText={(e) => setOTP((text) => text + e)}
                    />
                    <TextInput
                        mode="outlined"
                        activeOutlineColor="#3b1d0c"
                        className="mb-5 text-center"
                        textAlign="center"
                        onChangeText={(e) => setOTP((text) => text + e)}
                    />
                    <TextInput
                        mode="outlined"
                        activeOutlineColor="#3b1d0c"
                        className="mb-5 text-center"
                        textAlign="center"
                        onChangeText={(e) => setOTP((text) => text + e)}
                    />
                </View>

                {/* <Button content='Send' handle={() => navigation.navigate('Verify')}/> */}
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

export default VerifyScreen;
