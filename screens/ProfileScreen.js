import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;

const ProfileScreen = () => {
    return (
        <View className="flex-1">
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[
                    require("../assets/images/Frame 17.png"),
                    require("../assets/images/Frame 17.png"),
                    require("../assets/images/Frame 17.png"),
                    require("../assets/images/Frame 17.png"),
                ]}
                scrollAnimationDuration={1000}
                renderItem={({ index }) => (
                    <View className="justify-center items-center">
                        <Image source={index} resizeMode="contain" style={{ width: 400, height: 400 / 2 }} />
                    </View>
                )}
            />
        </View>
    );
};

export default ProfileScreen;
