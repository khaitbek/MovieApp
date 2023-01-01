import React from 'react'
import { StyledCastImage, StyledCastItem, StyledCastName } from "../Cast/styles"
import { IMG_URL } from "@/API/api"
import { useNavigate } from "react-router-dom";

export const Actor = ({ id, img, name }) => {
  const navigate = useNavigate();
  return (
    <StyledCastItem onClick={() => navigate(`/person/${id}`)}>
      <StyledCastImage src={`${IMG_URL}/${img}` || `https://via.placeholder.com/300?text="unknown"`} />
      <StyledCastName>{name}</StyledCastName>
    </StyledCastItem>
  )
}
