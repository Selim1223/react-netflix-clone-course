import React from "react"


import Banner from "../components/banner/banner"
import api from "../components/config/api"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/Navbar"
import Row from "../components/row/row"



export default function Films(){


    return (
        <div>
        <Navbar/>
        <Banner/>
        <Row title=" les Films d'action" url={api.fetchActionMovies}  isPoster={true}/>
        <Row title=" les Films d'horreur" url={api.fetchHorrorMovies}  isPoster={false}/>
        <Row title=" Les comédies" url={api.fetchComedyMovies}  isPoster={false}/>
        <Row title=" Les films de romances" url={api.fetchRomanceMovies}  isPoster={false}/>
        <Row title="Les documentaires" url={api.fetchDocumentaries}  isPoster={false}/>
        
        <Footer/>
        </div>
        )
    }