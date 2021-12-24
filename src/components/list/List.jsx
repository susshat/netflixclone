import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import React, { useRef, useState, useEffect } from 'react';
import Listitems from '../listitems/Listitems';
import styled from '@emotion/styled';
import axios from '../axios';

const NetflixList = styled.div`
width:100%;
margin-top: 10px;
`
const ListTitle = styled.span`
color:white;
font-size:20px;
font-weight: 500;
margin-left:50px;  
`
const Wrapper = styled.div`
 position: relative;
.sliderArrow{
    width:50px;
    height:100%;
    background-color: rgb(22, 22, 22, 0.5);
    color: white;
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;

    &.left{
        left: 0;
    }
    &.right{
        right:0;
    }
}   
`
const ListContainer = styled.div`
    margin-left: 50px;
    display: flex;
    width: max-content;
    margin-top:10px;
    transform: translateX(0px);
    transition: all 1s ease;
`
// fetchUrl was pased as props
export default function List({fetchUrl}) {
    const [slideNumber, setSlideNumber] = useState(0) 

    const [movies, setMovies] = useState([]);

    const [isMoved, setIsMoved] = useState(false);

    const listRef = useRef();

     useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    // if [], it only runs once.

    const handleClick = (direction) => {
        setIsMoved(true);

        let distance = listRef.current.getBoundingClientRect().x -50

        if(direction === "left" && slideNumber > 0 ) {
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`//smotheeeee transition broooo!!
        }
        
        if(direction === "right" && slideNumber <5 ) {
            setSlideNumber(slideNumber + 1 )
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
//the above code is for the slider to slide from left to right or vice versa and it also has animation feature for slider. 
    }
    return (
        //list
        <NetflixList>
            {/* listTitle */}
            <ListTitle className="listTitle">movie hera bro</ListTitle>

            <Wrapper>
            <ArrowBackIos className="sliderArrow left" 
            onClick= {()=>handleClick("left")}
            style={{display: !isMoved && "none"}}//hides the arrow from the silder and appears after you click it. 
            />
            <ListContainer ref={listRef}>
                {movies.map((movie, index)=>
                <Listitems movie={movie} key={index}/>)} 
            </ListContainer>
            <ArrowForwardIos className="sliderArrow right" onClick= {()=>handleClick("right")}/>
            </Wrapper>
        </NetflixList>
    )
}
