import React from "react"
import Banner from "../banner/banner"
import api from "../config/api"
import Footer from "../footer/footer"
import Navbar from "../navbar/Navbar"
import Row from "../row/row"

export default function Homepage(){


    return (
        <div>
        <Navbar/>
        <Banner/>
        <Row title="Programmes Netflix" url ={api.fetchNetflixOriginals} isPoster={true}/>
        <Row title="Tendances actuelles" url={api.fetchTrending}  isPoster={false}/>
        <Row title="Les mieux notés" url={api.fetchTopRatedMovies}  isPoster={false}/>
        <Row title="Films d'action" url={api.fetchActionMovies}  isPoster={false}/>
        <Row title="Films d'horreur" url={api.fetchHorrorMovies}  isPoster={false}/>
        <Row title=" Les comédies" url={api.fetchComedyMovies}  isPoster={false}/>
        <Row title="Les documentaires" url={api.fetchDocumentaries}  isPoster={false}/>
        <Row title="Les Séries" url={api.fetchTrendingSeries}  isPoster={false}/>
        <Footer/>
        </div>
        )
    }