import React from "react"
import {connect} from "react-redux"

const Header = (props) => {
    return <header>
        <img src="images/logo.png" width="220" height="43" alt="Movie Snail logo" />
    </header>
}

const Movie = (props) => {
    let title = props.title,
        poster = props.poster,
        alt = `Poster for ${title}`,
        style = {
            backgroundImage: `url(${poster.url})`,
            height: poster.height,
            width: poster.width
        }

    return <div className="movie" style={style} onMouseOver={() => props.onHover(props)} onMouseOut={props.onHoverEnd} />
}

const Movies = (props) => {
    let items = [],
        movies = props.movies

    if (props.loading) {
        return <h1>Now Loading...</h1>
    }

    if (movies) {
        movies.forEach(movie => {
            items.push(<Movie key={movie.id} {...props} {...movie} />)
        })
    }

    return <div className="movies">
        {items}
    </div>
}

const MovieDetails = ({title, year, plot}) => {
    return <div className="details">
        <h2>{title} ({year})</h2>
        <div>{plot}</div>
    </div>
}

const _App = (props) => {
    let hover
    if (props.hover) {
        hover = <MovieDetails {...props.hover} />
    }
    return <div id="app">
        <Header />
        <Movies {...props} />
        {hover}
    </div>
}

const mapStateToProps = (state) => {
    return Object.assign({}, state)
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHover: (movie) => {
            dispatch({
                type: "DISPLAY_MOVIE_INFO",
                movie
            })
        },
        onHoverEnd: () => {
            dispatch({
                type: "DISPLAY_MOVIE_INFO_COMPLETE"
            })
        }
    }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)
