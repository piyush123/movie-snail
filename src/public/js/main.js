import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import {appReducer} from "./reducers"
import {fetchMovies} from "./actions"
import {App} from "./components"

let store = createStore(appReducer,
    applyMiddleware(thunkMiddleware)
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)

store.dispatch(fetchMovies())
