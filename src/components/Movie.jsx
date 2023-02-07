import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import Rating from "./Rating"
import { api } from "../constants"

const Movie = ({ info: { id, poster_path, title, vote_average }, onPress }) => {

    const handlePress = () => {
        onPress(id)
    }
    
    return (<TouchableOpacity onPress={handlePress} style={styles.container}>
        <Image style={styles.image}
            source={{ uri: `${api.IMAGE_PATH}${poster_path}` }}
            resizeMode='cover'
        />
        <Text numberOfLines={1}
            style={styles.title}>{title}
        </Text>
        <Rating rating={vote_average} />
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        width: 150,

    },
    image: {
        width: 150,
        height: 250,
        borderRadius: 4
    },
    title: {
        fontWeight: '600',
        color: 'white',
        fontSize: 16,
        marginVertical: 6
    }
})
export default Movie