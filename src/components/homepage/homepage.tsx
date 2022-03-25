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
        <Row title="Les films les mieux notés" url={api.fetchTopRatedMovies}  isPoster={false}/>
        <Footer/>
        </div>
        )
    }