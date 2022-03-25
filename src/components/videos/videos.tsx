/* eslint-disable react-hooks/rules-of-hooks */


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import './videos.css'
import { API_KEY } from '../config/api';
import { Link } from "react-router-dom"


export default function video() {
let {id} = useParams();

const[data, setData] = useState([] as any[]);

useEffect(()=> {
const fetchData = async ()=> {
const result = await axios.get('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key='+API_KEY +''
);

setData(result.data.results);
console.log(setData)
};
fetchData();
})

return (
<div className='video'>
  <Link to={'/homepage'}> <button className="go_back_button">
   Retour à la page d'accueil
  </button>
  </Link>

  <h1>Vidéos du film</h1>
  <div className='video-playback'>
    {data.map(item=>(
    <>
      <h1>{item.name}</h1>
      <ReactPlayer url={'https://www.youtube.com/watch?v=' + item.key + '' }controls></ReactPlayer>
    </>
    ))}
  </div>
</div>
)
}