import React from 'react';
import styled from '@emotion/styled';

const ListItems = styled.div`
width: 225px;
height: 120px;
background-color: #0b0b0b;
margin-right: 5px;
padding: 20px;

.row_poster{
    object-fit: contain;
    width: 100%;
    max-height:100px;
    transition: transform 450ms; // the smooth hover effect

    &:hover{
        transform : scale(1.08);
    }
}
`
const base_url = "https://image.tmdb.org/t/p/w500";
export default function Listitems({movie}) {
    return (
        <ListItems >
            <img className='row_poster' src={`${base_url}${movie.poster_path}`} alt={movie.name} />
        </ListItems>
    )
}
