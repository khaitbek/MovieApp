import { IMG_URL } from "@/API/api"
import { StyledMovieImage, StyledMovieItem, StyledMovieItemWrapper } from "@/styles/components"
import { useNavigate } from "react-router-dom"
import React from 'react'
import { motion } from "framer-motion";

export const MovieItem = ({ id, poster_path,type, title, description }) => {
  const navigate = useNavigate()
  return (
    <StyledMovieItem tabIndex={0} key={id} title={`${title}. ${description}`} onClick={() => navigate(`/${type}/${id}`)}>
      <StyledMovieImage src={`${IMG_URL}/${poster_path}`}width={300} height={300} load="lazy" alt={`${title}.${description}`} />
    </StyledMovieItem>
  )
}
