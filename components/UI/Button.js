import { Pressable } from "react-native";
import { Ionicons} from  '@expo/vector-icons'
import { StyleSheet, Text } from "react-native";

export default function Button ({name, size, color, onPress}) {
    const style = StyleSheet.create({
        button: {
            margin: 4,
            padding: 8,
            justifyContent: 'center',
            alignItem: 'center',
            fontSize: 16
        },
        pressed: {
            opacity: 0.7
        }
    })
    return (
        <Pressable style={pressed => [style.button, pressed && style.pressed]} onPress={onPress}>
            <Ionicons name={name} size={size} color={color} /><Text>Add Place</Text>
        </Pressable>
    )
}