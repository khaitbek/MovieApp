import styled from "styled-components";
import { motion } from "framer-motion";


export const StyledCastTitle = styled.h3`
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.015em;
    color: #FFFFFF;
`

export const StyledCastList = styled(motion.ul)`
    display:grid;
    grid-auto-flow:column;
    grid-auto-columns:278px;
    gap:3rem;
    margin-bottom:4rem;
`

export const StyledCastItem = styled(motion.li)`
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

export const StyledCastItemWrapper = styled(motion.div)`

`
export const StyledCastImage = styled.img`
    min-width:100%;
    max-width:100%;
    height:auto;
    pointer-events:none;
    border-radius: 19px;

`

export const StyledCastName = styled.h4`
    margin-top:2rem;
    font-size:20px;
    color:#fff;
`