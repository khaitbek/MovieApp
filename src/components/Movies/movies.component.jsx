import { Container, StyledMovies } from "@/app/styles/components";

export const Movies = ({ children }) => {
  return (
    <StyledMovies tabIndex={0} title="Movies section">
      <Container tabIndex={0}>
        {children}
      </Container>
    </StyledMovies>
  )
}
