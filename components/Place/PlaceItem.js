import { Text, View } from "react-native";

export default function PlaceItem({place}) {
    console.log("placeItem", place)
    console.log("placeTitle", place.item?.title)
    return (
        <View>
            <Text>Place name should be shown here</Text>
            <Text>{place.item?.title}</Text>
        </View>
    )
}