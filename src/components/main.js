import React, { useReducer, useEffect } from 'react';
import Header from './header';
import Search from './search';
import Movie from './movie';

import './main.css';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=3eed3b2c";

const initialState = {
    loading: true,
    movies: [],
    errorMessage: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_MOVIES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            }
        case "SEARCH_MOVIES_RESPONSE":
            return {
                ...state,
                loading: false,
                movies: action.movies
            }
        case "SEARCH_MOVIES_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage
            }
        default:
            break;
    }
}
const Main = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                dispatch({
                    type: "SEARCH_MOVIES_RESPONSE",
                    movies : jsonResponse.Search
                })
            })
    }, []);

    const search = searchValue => {
        dispatch({
            type: "SEARCH_MOVIES_REQUEST"
        })

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=3eed3b2c`)
            .then(res => res.json())
            .then(jsonRes => {
                if (jsonRes.Response === "True") {
                    dispatch({
                        type: "SEARCH_MOVIES_RESPONSE",
                        movies : jsonRes.Search
                    })
                } else {
                    dispatch({
                        type: "SEARCH_MOVIES_FAILURE",
                        errorMessage: jsonRes.error
                    })
                }
            })
    }

    const { loading, movies, errorMessage} = state;

    return (
        <div className="main">
            <Header title="Search Movies!!!" />
            <Search search={search} />
            <br />
            <div className="movies">
                {loading && !errorMessage ? (
                    <span>Loading...</span>
                ) : errorMessage ? (
                    <span>{errorMessage}</span>
                ) : (
                            movies.map((movie, index) => (
                                <Movie key={`${index}-${movie.Title}`} movie={movie} />
                            ))
                        )}
            </div>


        </div>
    )


}


export default Main;