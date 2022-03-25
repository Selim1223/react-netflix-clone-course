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
        <Row title="Les Séries les mieux notées" url={api.fetchTopRatedSeries}  isPoster={true}/>
        <Row title=" les séries de Comédies" url={api.fetchComedySeries}  isPoster={true}/>
        <Row title=" Les séries de romances" url={api.fetchRomanceSeries}  isPoster={true}/>
        <Row title="Les séries documentaires" url={api.fetchDocumentariesSeries}  isPoster={true}/>
        <Footer/>
        </div>
        )
    }