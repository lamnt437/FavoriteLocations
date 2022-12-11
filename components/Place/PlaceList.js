import { FlatList, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";
import Place from "../../models/Place";

export default function PlaceList({places}) {
    // console.log({places})
    // console.log("type", typeof places)
    // console.log("inside places", places.places)
    // let createdPlaces = [
    //     {
    //         title: 'Hellwolrd',
    //         id: 1
    //     }
    // ]
    // TODO for loop in react?
    // TODO make the flatlist work
    if (!places.length) {
        return (
            <View>
                <Text>PlaceList</Text>
            </View>
        )
    }
    return (
        <FlatList data={places} keyExtractor={(item) => item.id} renderItem={(item) => {
            return <PlaceItem place={item} />
        }} />
    )
}