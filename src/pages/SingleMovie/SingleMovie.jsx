import { StyledMoviesTitle } from "@/app/styles/components";
import { Cast } from "@/components/Cast";
import { Hero } from "@/components/Hero";
import { Movies } from "@/components/Movies";
import { useParams } from "react-router-dom";
import { StyledSingleMovieWrapper } from "./styles";

export const SingleMovie = () => {
  const { type, id } = useParams();
  return (
    <>
      <StyledSingleMovieWrapper>
        <Hero resourceId={id} resourceType={type} />
      </StyledSingleMovieWrapper>
      <Movies>
        <StyledMoviesTitle>Cast</StyledMoviesTitle>
        <Cast resourceType={type} movieId={id} />
      </Movies>
    </>
  )
}
