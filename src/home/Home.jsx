import React from 'react';
import Navbar from '../components/navbar/Navbar';
import styled from '@emotion/styled';
import NetFlixFeatured from '../components/featured/Featured';
import List from '../components/list/List';
import request from '../components/request/Request';



const HomeColor = styled.div`
 background-color:#0b0b0b;
 overflow:hidden;
`

const Home = () => {
    return (
        <HomeColor>
        <Navbar/>
       < NetFlixFeatured type="movie"/> 
       <List  title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals}/>
       <List  title="Trending" fetchUrl={request.fetchTrending} />
       <List  title="TopRated" fetchUrl={request.fetchTopRated}/>
       <List  title="ActionMovies" fetchUrl={request.fetchActionMovies}/>
       <List  title="ComedyMovies" fetchUrl={request.fetchComedyMovies}/>
       <List  title="HorrorMovies"  fetchUrl={request.fetchHorrorMovies}/>
       <List  title="RomanceMovies" fetchUrl={request.fetchRomanceMovies}/>
       <List  title="DocumentariesMovies" fetchUrl={request.fetchDocumentariesMovies}/>
        </HomeColor>
 
    ) 
}

export default Home;

