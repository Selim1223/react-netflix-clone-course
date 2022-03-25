import React from "react"

import Banner from "../banner/banner"
import api from "../config/api"
import Footer from "../footer/footer"
import Navbar from "../navbar/Navbar"
import Row from "../row/row"

export default function Series(){


    return (
        <div>
        <Navbar/>
        <Banner/>
        <Row title="Les Meilleures Séries" url={api.fetchTopRatedSeries}  isPoster={true}/>
        <Footer/>
        </div>
        )
    }