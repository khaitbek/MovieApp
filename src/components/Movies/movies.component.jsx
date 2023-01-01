import { Container, StyledMovies, StyledMoviesTitle } from "@/styles/components"
import React from 'react'
import { MovieList } from "@components/MovieList";

export const Movies = ({children}) => {
  return (
    <StyledMovies tabIndex={0} title="Movies section">
      <Container tabIndex={0}>
        {children}
      </Container>
    </StyledMovies>
  )
}
