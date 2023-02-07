import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendedMoviesAsync, getTopMoviesAsync, stateSelector } from "../redux/movies/moviesSlice";


const useMovies = () => {
    const dispatch = useDispatch();
    const { topMovies, recommendedMovies, filterMovies } = useSelector(stateSelector)

    useEffect(() => {
        dispatch(getTopMoviesAsync())
        dispatch(getRecommendedMoviesAsync())
    }, [])

    return { topMovies, recommendedMovies, filterMovies }
}

export default useMovies