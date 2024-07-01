import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Request';
import Row from '../Row';

function HomeScreen() {

    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
            <Row title="Documentaries" fetchUrl={requests.fetchTrending}></Row>


        </div>
    )
}

export default HomeScreen; 