import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import axios from "axios";

const Map = () => {
    const [placeId, setPlaceId] = React.useState("ChIJ67Cr6OcndTERisFylLnkQ-w");
    const [location, setLocation] = React.useState(null);
    const apiKey = "AIzaSyD8TeyN69QlSutICyzuxMPj53XihtewW_A";
    const fetchPlaceDetail = async () => {
        try {
            const response = await axios.get(
                `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`
            );
            setLocation({
                latitude: response.data.result.geometry.location.lat,
                longtitude: response.data.result.geometry.location.lng,
            });
            return response;
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchPlaceDetail();
    }, [placeId]);
    return (
        <View className="flex-1">
            {/* <Text className='text-xl font-bold text-center p-2 bg-white'>Map</Text> */}
            <GooglePlacesAutocomplete
                placeholder="Nhập địa chỉ của bạn"
                debounce={500}
                onPress={(data, details = null) => {
                    setPlaceId(details.place_id);
                }}
                query={{
                    key: "AIzaSyD8TeyN69QlSutICyzuxMPj53XihtewW_A",
                    language: "en",
                }}
                style={{ zIndex: 999, position: "absolute", top: wp(9) }}
            />

            {location && (
                <MapView
                    provider="google"
                    initialRegion={{
                        latitude: 10.8700233,
                        longtitude: 106.8025735,
                        latitudeDelta: 0.9,
                        longtitudeDelta: 0.9,
                    }}
                    style={{ width: wp(100), height: hp(88), zIndex: -10 }}
                    region={{
                        longitude: location?.longtitude,
                        latitude: location?.latitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}>
                    <Marker
                        coordinate={{
                            longitude: location?.longtitude,
                            latitude: location?.latitude,
                        }}
                    />
                </MapView>
            )}
        </View>
    );
};

export default Map;
