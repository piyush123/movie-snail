import {getAllMovies} from "./movies"

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch({
            type: "FETCH_MOVIES_START"
        })

        return getAllMovies().then(movies => {
            dispatch({
                type: "FETCH_MOVIES_COMPLETE",
                movies
            })
        })
    }
}
