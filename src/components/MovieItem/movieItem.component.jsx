import React from 'react'
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import { IMG_URL } from "@/API/api"
import { StyledMovieButton, StyledMovieImage, StyledMovieItem, StyledMovieItemWrapper } from "@/styles/components"

export const MovieItem = ({ id, poster_path,type, title, description }) => {
  const navigate = useNavigate()
  return (
    <StyledMovieItem tabIndex={0} key={id} title={`${title}. ${description}`} >
      <StyledMovieImage src={`${IMG_URL}/${poster_path}`}width={300} height={300}  load="lazy" alt={`${title}.${description}`} />
      <StyledMovieButton onClick={() => navigate(`/${type}/${id}`)}>See more</StyledMovieButton>
    </StyledMovieItem>
  )
}
