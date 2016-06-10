export const appReducer = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_MOVIES_START":
            return Object.assign({}, state, {
                loading: true
            })
        case "FETCH_MOVIES_COMPLETE":
            return Object.assign({}, state, {
                movies: action.movies,
                loading: false
            })
        case "DISPLAY_MOVIE_INFO":
            return Object.assign({}, state, {
                hover: action.movie
            })
        case "DISPLAY_MOVIE_INFO_COMPLETE":
            return Object.assign({}, state, {
                hover: null
            })
        default:
            return state
    }
}
