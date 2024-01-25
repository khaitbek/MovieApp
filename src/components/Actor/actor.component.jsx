import { IMG_URL } from "@/API/api";
import { StyledMovieButton } from "@/app/styles/components";
import { useNavigate } from "react-router-dom";
import { StyledCastImage, StyledCastItem, StyledCastName } from "../Cast/styles";

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
