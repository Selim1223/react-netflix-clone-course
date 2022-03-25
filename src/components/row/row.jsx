import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import "./row.css"
import { Link } from "react-router-dom"


export default function Row({title, url, isPoster}) {
const baseUrl = "https://image.tmdb.org/t/p/original"
const [movies, setMovies] = useState([])

useEffect(() => {
async function fetchData() {
const request = await axios.get(url)
setMovies(request.data.results)
}
fetchData()
}, [url])

console.log(movies)

return (
<div className="row">
  <h2 className="row__title">{title}</h2>
  <div className="row__images">
    {movies.map(movie => (
    <div key={movie.id}>
      <Link to={'/video/'+movie.id}>
      
      <img src={ isPoster ? `${baseUrl}/${movie.poster_path}` : `${baseUrl}/${movie.backdrop_path}` }
        className="row__image" alt={movie?.title || movie?.name || movie?.original_title} />
        </Link>
        <p> {movie?.title || movie?.name || movie?.original_title}</p>
    </div>
    ))}
  </div>
</div>
)
}