import { StyleSheet, TextInput, View } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useDispatch } from "react-redux";
import { getFilterMoviesAsync, cleanFilterMovies } from "../redux/movies/moviesSlice";
import { useState } from "react";
import useMovies from "../hooks/useMovies";

const SearchBar = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const { filterMovies } = useMovies()

    const onSearch = () => {
        dispatch(getFilterMoviesAsync({ query: searchText }))
    }

    const onChangeText = (text) => {
        setSearchText(text)
        if (filterMovies?.length > 0) {
            dispatch(cleanFilterMovies())
        }
    }
    
    return <View style={styles.searchContainer}>
        <TextInput
            placeholder="Search..."
            maxLength={40}
            onChangeText={onChangeText}
            onSubmitEditing={onSearch}
            style={styles.textInput}
            returnKeyType='search'
        />
        <FontAwesome name="search" size={20} color="gray" />
    </View>
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        height: 40,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: "center",
        flexDirection: 'row',
    },
    textInput: {
        flex: 1
    }
})

export default SearchBar