import { Hero } from "@/components/Hero"
import { Movies } from "@/components/Movies";
import { StyledMoviesTitle } from "@/styles/components";
import React from 'react'
import { useParams } from "react-router-dom"
import { MovieList } from "@components/MovieList";
import { Cast } from "@/components/Cast";
import { StyledSingleMovieWrapper } from "./styles";
import { Player } from "@/components/Player";

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
