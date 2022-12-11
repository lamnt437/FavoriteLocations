import { View, Text } from "react-native"
import PlaceList from "../components/Place/PlaceList"
import Place from "../models/Place"

export default function AllPlaces() {
    let places = []
    let firstPlace = new Place('earth', null, null, null)
    places.push(firstPlace)
    return (
        <PlaceList places={places} />
    )
}