import React from "react"

import { useState, useEffect } from "react"
import "./banner.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import api from "../config/api";
import axios from "axios";
import { Link } from "react-router-dom";



export default function Navbar() {

  
    const [movie, setMovie] = useState([]); 
    const [popup, setPopup] = useState(false)

    function handlePopup() {
      popup ? setPopup(false) : setPopup(true)
    }
  
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(api.fetchTrending)
  
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        )
      }
      fetchData()
    }, [])
  
    function truncateText(string, n) {
      return string?.length > n ? string.substr(0, n - 1) + "..." : string
    }
  
    const bannerStyle = {
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
    }
  
    return (
      <header className="banner" style={bannerStyle}>
        <div className="banner__content">
          <h1 className="banner__title">
              
            {movie?.title  || movie?.name || movie?.original_title}
          </h1>
          <p className="banner__description">
            {truncateText(movie?.overview, 100)}
          </p>
          {movie.id && (
            <div className="banner__buttons">
              <Link to={'/video/'+movie.id}>
                
                <button className="banner__button banner__button--play">
                  <PlayArrowIcon /> Lecture
                </button>
              </Link>

              <button className="banner__button" onClick={handlePopup}>
                <HelpOutlineIcon />
                Plus d'infos
              </button>
            </div>
          )}
        </div>
        
      </header>
    )
  }
