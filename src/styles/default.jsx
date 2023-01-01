import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    box-sizing: inherit;
}

html{
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    background:#1D1D1D;
    font-family:"Staatliches", cursive;
    transition: background-color .3s ease-in-out;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

button{
    padding:6px;
    border:1px solid transparent;
    cursor:pointer;
}

ul {
    padding-left:0;
    margin:0;

}

button{
    font-family:inherit;
    border: 1px solid transparent;
    background-color: transparent;
    cursor: pointer;
}

a{
    display: inline-block;
    text-decoration: none;
}



.visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

/* sticky footer */
.site-main{
    flex-grow: 1;
}


.pagination-container{
    display:flex;
    gap:1rem;
    justify-content:center;
    margin-bottom:0;
    padding-top:3.075rem;
    list-style:none;
}

.pagination-container a{
    display:flex;
    align-items:center;
    justify-content:center;
    width:3rem;
    aspect-ratio:1;
    border-radius:50%;
    font-size:20px;
    background:#fff;
    cursor:pointer;
}

`