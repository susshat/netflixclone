import { KeyboardArrowDown, Notifications, Search,  } from '@mui/icons-material';
import React from 'react';
import {useState} from "react";
import styled from '@emotion/styled';

const NavBarSurface = styled.header`
width: 100%;
color: white;
font-size: 14px;
position: fixed;
top:0;
z-index: 999;
background: ${props => props.isScrolled ? "#0b0b0b": 'linear-gradient(to top, transparent 0%, rgb(0,0,0,0.3) 50%)'};
`;
const Container = styled.div`
        padding:0px 50px ;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: var(--nav-height);
`
const LeftContainer = styled.div`
            display: flex;
            align-items: center;
`
const NetflixIcon = styled.img`
        height: 25px;
      margin-right: 40px;
`
const LeftSpan = styled.span`
       margin-right: 20px;
            cursor: pointer;   
`
const RightCointainer = styled.div`
             display: flex;
            align-items: center;
`
const KidSpan = styled.span`
       margin-right: 20px;
            cursor: pointer;   
`
const SearchIcon = styled(Search)`
           margin: 0px 15px;
                cursor: pointer;
`
const NotificationIcon = styled(Notifications)`
               margin: 0px 15px;
                cursor: pointer;
`
const AvatarIcon = styled.img`
                  width: 30px;
                height: 30px;
                border-radius: 5px;
                object-fit: cover;
                cursor: pointer;
`
const ArrowIcon = styled(KeyboardArrowDown)`
          margin: 0px 15px;
                cursor: pointer;
`
const Profile = styled.div`
                &:hover{
                    .options{
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                    }
                }
`
const ProfileOption = styled.div`
                        display: none;
                    background-color:#0b0b0b;
                    border-radius: 5px;  
`
const ProfileSpan = styled.span`
                    padding: 10px;
                    cursor: pointer;
`

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () =>(windows.onscroll = null);
    };


    return (
        <NavBarSurface isScrolled={isScrolled}>
            <Container>
                <LeftContainer>
                    <NetflixIcon src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                     alt=""/>
                     <LeftSpan>Homepage</LeftSpan>
                     <LeftSpan>Movies</LeftSpan>
                     <LeftSpan>Series</LeftSpan>
                     <LeftSpan>New and Popular</LeftSpan>
                     <LeftSpan>My List</LeftSpan>
                    </LeftContainer>
                    <RightCointainer>
                        <SearchIcon/>
                        <KidSpan>KID</KidSpan>
                        <NotificationIcon/>
                        <AvatarIcon 
                        src="https://avatars.dicebear.com/api/pixel-art/sushant.svg"
                        alt="" 
                        />
                        <Profile>
                        <ArrowIcon/>
                        <ProfileOption className="options">
                            <ProfileSpan>Settings</ProfileSpan>
                            <ProfileSpan>Logout</ProfileSpan>
                        </ProfileOption>
                        </Profile>
                        </RightCointainer>
                        </Container>   
        </NavBarSurface>
    )
}

export default Navbar;
