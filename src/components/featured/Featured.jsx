import React from "react";
import styled from "@emotion/styled";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";

const NetFlixFeatured = styled.div`
  height: 90vh;
  position: relative;
  background-image: ${(props) =>
    `url("${props.featuredImg}")`}; //accesing props from emotioins
  background-size: cover;
  padding: 50px;
  padding-top: var(--nav-height);
`;

// const FeaturedImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;

// `
const NetFlixInfo = styled.div`
  width: 300px;
  //position: absolute;
  left: 50px;
  bottom: 100px;
  color: white;
  display: flex;
  flex-direction: column;
`;
const InfoImg = styled.img`
  width: 200px;
`;

const NetFlixDesc = styled.span`
  margin: 20px 0px;
`;

const Buttons = styled.div`
  display: flex;
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    cursor: pointer;

    &.play {
      background-color: white;
      color: #0b0b0b;
      &.more {
        background-color: gray;
        color: white;
      }
    }
    span {
      margin-left: 5px;
    }
  }
`;
const Category = styled.div`
  /* position:absolute;  */
  top: 80px;
  left: 50px;
  font-size: 30px;
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center;

  select {
    cursor: pointer;
    background-color: #0b0b0b;
    border: 1px solid white;
    color: white;
    margin-left: 20px;
    padding: 5px;

  }
`;
export default function Featured({ type }) {
  return (
    <NetFlixFeatured featuredImg="https://www.teahub.io/photos/full/108-1080020_windows-xp-original-wallpaper-windows-xp-wallpaper-meme.jpg">
      {type && (
        <Category>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option> Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </Category>
      )}
      <NetFlixInfo>
        <InfoImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
          alt=""
        />
        <NetFlixDesc>
          Make Monday your own when the moon is in your appearance zone. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          consequuntur, ab cum error at accusantium ea magnam voluptate neque
          odit quam mollitia repellendus corporis, maxime et obcaecati qui
          veritatis quas.
        </NetFlixDesc>
        <Buttons>
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className=" ">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </Buttons>
      </NetFlixInfo>
    </NetFlixFeatured>
  );
}
