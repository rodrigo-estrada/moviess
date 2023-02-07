import { StyleSheet, View } from "react-native"
import MovieList from "../components/MovieList"
import SearchBar from "../components/SearchBar"
import { } from "react-redux";
import useMovies from "../hooks/useMovies";
const Home = () => {

    const { topMovies, recommendedMovies, filterMovies } = useMovies()
    
    return <View style={styles.container}>
        <SearchBar/>
        {filterMovies.length === 0 ? <>
            <MovieList moviesJson={recommendedMovies} title={'Recomendados'} />
            <MovieList moviesJson={topMovies} title={'Mejor Calificados'} />
        </> :
            <MovieList moviesJson={filterMovies} title={'Resultados'} />
        }
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10
    }
})
export default Home