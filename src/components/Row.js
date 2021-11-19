import React, { useState, useEffect } from 'react'
import axios from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const fetchData = async () => {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
        return response;
    }
    // A snippet of code which runs based on a specific condition/variable
    useEffect(()=> {
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: "390px",
        width:"100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay:1,
        }
    }
    // console.log(movies)

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            // console.log(movie.name)
            movieTrailer(movie?.name || "" , {id: true}).then((res) => {
                setTrailerUrl(res);
            })
            
            // .then((url) =>{
            //     const urlParams = new URLSearchParams(new URL(url).search);
            //     setTrailerUrl(urlParams.get('v'));
            // })
            // .catch((error) => console.log(error));
        }
    }
    console.log("trailerurl",trailerUrl);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img key={movie.id} onClick={() => handleClick(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name} /> 
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;