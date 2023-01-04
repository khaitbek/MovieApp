import React from 'react'
import { StyledCastImage, StyledCastItem, StyledCastName } from "../Cast/styles"
import { IMG_URL } from "@/API/api"
import { useNavigate } from "react-router-dom";
import { StyledMovieButton } from "@/styles/components";

export const Actor = ({ id, img, name }) => {
  const navigate = useNavigate();
  return (
    <StyledCastItem>
      <StyledCastImage src={`${IMG_URL}/${img}` || `https://via.placeholder.com/300?text="unknown"`} />
      <StyledMovieButton onClick={() => navigate(`/person/${id}`)}>See more</StyledMovieButton>
      <StyledCastName>{name}</StyledCastName>
    </StyledCastItem>
  )
}
