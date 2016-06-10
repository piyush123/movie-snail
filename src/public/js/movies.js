import fetch from "isomorphic-fetch"

const getMovieByID = (id) => {
    return new Promise(resolve => {
        fetch(`/api/movies/${id}`).then(response => {
            resolve(response.json())
        })
    })
}

const getAllMovieIDs = () => {
    return new Promise(resolve => {
        fetch("/api/movies").then(response => {
            resolve(response.json())
        })
    })
}

export const getAllMovies = () => {
    return new Promise(resolve => {
        getAllMovieIDs().then(ids => {
            let promises = []
            ids.forEach(id => {
                promises.push(getMovieByID(id))
            })
            Promise.all(promises).then(movies => {
                resolve(movies)
            })
        })
    })
}
