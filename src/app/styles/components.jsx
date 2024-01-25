import { IMG_URL } from "@/API/api";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Container
export const Container = styled.div`
    width:100%;
    max-width:1240px;
    margin: 0 auto;
    padding: 0 20px;
    
`
// Header
export const StyledHeader = styled.header`
    margin-top:75px;
    margin-bottom:55px;
`

export const StyledNav = styled.nav`
    
`

export const StyledNavList = styled.ul`
    display:flex;
    align-items:center;
    gap:23px;
    list-style:none;
`
export const StyledNavItem = styled.li`
    &:nth-child(1) a{
        color:#fff;
        opacity:1;
    }
   
`

export const StyledNavLink = styled(Link)`

    font-size: 40px;
    line-height: 50px;
    color: #FFFFFF;
    opacity: 0.19;
    letter-spacing: -0.035em;
`

export const StyledHeaderWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:2rem;
    flex-wrap:wrap;
`

export const StyledSearchForm = styled.form`
    display:flex;
`

export const StyledSearchBar = styled.input`
    border:1px solid transparent;
    font:inherit;
    font-size:20px;
`

export const StyledSearchButton = styled.button`
border:1px solid transparent;
border-top-right-radius:10px;
border-bottom-right-radius:10px;
    color:#000;
    background:#FFE24B;
`

// HERO
export const StyledHero = styled.section`
    position:relative;
    padding-block:85px;

    background-image:url(${props => `${IMG_URL}/${props.bg}`});
    background-repeat:no-repeat;
    background-size:cover;
    isolation:isolate;
    &::before{
        content:"";
        position:absolute;
        inset:0;
        z-index:-2;
        background-color:rgba(0,0,0,0.6);
    }
`

export const StyledHeroTitle = styled.div`
    margin-bottom:36px;
    font-size: 22px;
    line-height: 90%;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    @media screen and (min-width:967px){
        font-size:80px;
    }

    @media screen and (min-width:1240px){
        font-size:112px;
    }
`

export const StyledHeroOuter = styled.div`
    display:grid;
    gap:2rem;
    justify-content:center;
    @media screen and (min-width:1240px){
    grid-template-columns:1fr 1fr;

    }
`

export const StyledHeroWrapper = styled.div`
    max-width:680px;
`

export const StyledHeroYear = styled.p`
    margin-bottom:20px;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.005em;
    color: #FFFFFF;
    text-transform:uppercase;
`

export const StyledHeroText = styled.p`
    margin-bottom:40px;
    font-size: 20px;
    line-height: 132%;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    opacity: 0.82;
`

export const StyledHeroSpan = styled.span`
    margin-left:5px;
    margin-block:0;
    font-size:30px;
    color:#ea6f2e;
`

export const StyledHeroBtnContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

export const StyledHeroDarkBtns = styled.div`
    display:flex;
    gap:12px;
`

export const StyledHeroWatchBtn = styled(Link)`
    display:inline-block;
    padding:6px;
    font-weight: 700;
    font-size: 18px;
    line-height: 131%;
    border-radius: 4px;
    color:#000;
    background-color:#FFE24B;
`

export const StyledHeroTrailerBtn = styled.button`
    font-weight: 700;
    font-size: 18px;
    line-height: 131%;
    border: 0.75px solid rgba(255, 255, 255, 0.52);
    border-radius: 4px;
    color:#ffffff;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.0128) 100%);
`

export const StyledHeroAddBtn = styled.button`
    font-weight: 700;
    font-size: 18px;
    line-height: 131%;
    border: 0.75px solid rgba(255, 255, 255, 0.52);
    border-radius: 4px;
    color:#ffffff;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.0128) 100%);
`

// MOVIES
export const StyledMovies = styled.section`
    padding-block:85px;
`

export const StyledMoviesTitle = styled.h3`
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.015em;
    color: #FFFFFF;
`

export const StyledMovieList = styled(motion.ul)`
    display:grid;
    grid-auto-flow:column;
    grid-auto-columns:278px;
    gap:3rem;
    margin-bottom:4rem;
`


export const StyledMovieItem = styled(motion.li)`
    position:relative;
    flex-shrink:0;
    max-width:300px;
    border:2px solid transparent;
    border-radius: 19px;
    cursor:pointer;
    overflow:hidden;
    transition:opacity 0.3s ease-in-out;
    &:hover{
        opacity:0.8;
    }
    &:focus{
        border-color:#fff;
    }
    &:focus, &:hover button{
        display:block;
    }

`

export const StyledMovieButton = styled.button`
    position:absolute;
    top:50%;
    width:80%;
    left:10%;
    right:10%;
    display:none;
    padding:1rem 2rem;
    font-size:2rem;
    color:white;
    background:#FFE24B;
    transform:translateY(-50%);
    border-radius:10px;
`

export const StyledMovieItemWrapper = styled(motion.div)`

`
export const StyledMovieImage = styled.img`
    min-width:100%;
    max-width:100%;
    height:auto;
    pointer-events:none;
    border-radius: 19px;

`

// Carousel
export const StyledCarousel = styled(motion.div)`
    overflow:hidden;
`