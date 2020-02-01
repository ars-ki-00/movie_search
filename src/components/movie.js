import React from 'react';

import './movie.css';

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
    const poster =
        movie.poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <img
                    width="200"
                    height="300"
                    alt={`Moive : ${movie.Title}`}
                    src={poster}
                />
            </div>
            <p>({movie.Year})</p>
        </div>
    )
}

export default Movie;