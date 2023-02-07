import { useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { useDispatch } from "react-redux";
import { getDetailMovieAsync } from "../redux/movies/moviesSlice";

import Movie from "./Movie"

const MovieList = ({ moviesJson, title }) => {
    const dispatch = useDispatch();

    const goToDetail = (movie_id) => {
        dispatch(getDetailMovieAsync(movie_id))
    }

    const keyStractor = (item) => item?.id

    const renderItem = useCallback(({ item }) => <Movie info={item} onPress={goToDetail} />, [moviesJson])

    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            data={moviesJson}
            keyExtractor={keyStractor}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
        marginVertical: 8
    }
})

export default MovieList