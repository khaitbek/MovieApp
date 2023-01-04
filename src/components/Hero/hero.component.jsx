import React, { useEffect, useMemo, useState } from 'react'
import { Container, StyledHero, StyledHeroAddBtn, StyledHeroBtnContainer, StyledHeroDarkBtns, StyledHeroOuter, StyledHeroText, StyledHeroTitle, StyledHeroTrailerBtn, StyledHeroWatchBtn, StyledHeroWrapper, StyledHeroYear } from "@/styles/components";
import { BASE_API, API_KEY, getFetch, getSingleMovie, getSingleResourceBy } from "@/API/api";
import { formatDate } from "@/utilities/dateFormatter";
import { Player } from "@/components/Player/player";

export const Hero = ({ resourceId, resourceType }) => {
    const [currentMovie, setCurrentMovie] = useState({});
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);
    useMemo(async () => {
        try {
            const currentMovieData = await getSingleResourceBy(resourceType, resourceId);
            const { backdrop_path, id, original_title, name, overview, popularity, poster_path, release_date, runtime, vote_average, imdb_id } = currentMovieData.data;
            setCurrentMovie({
                backdrop_path, id, original_title, name, overview, popularity, poster_path, release_date, runtime, vote_average, imdb_id
            });
            setError(false);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, []);
    return (
        <StyledHero bg={currentMovie.backdrop_path}>
            <Container>
                <StyledHeroOuter>
                    <StyledHeroWrapper>
                        <StyledHeroTitle>{currentMovie.original_title || currentMovie.name}</StyledHeroTitle>
                        <StyledHeroYear>{currentMovie.release_date}</StyledHeroYear>
                        <StyledHeroText>
                            {currentMovie.overview}
                        </StyledHeroText>
                        <StyledHeroBtnContainer>
                            <StyledHeroWatchBtn to={`/watch/${resourceType}/${currentMovie.imdb_id}`}>
                                Watch
                            </StyledHeroWatchBtn>
                            <StyledHeroDarkBtns>
                                <StyledHeroTrailerBtn>Trailer
                                </StyledHeroTrailerBtn>
                                <StyledHeroAddBtn>Add List</StyledHeroAddBtn>
                            </StyledHeroDarkBtns>
                        </StyledHeroBtnContainer>
                    </StyledHeroWrapper>
                </StyledHeroOuter>
            </Container>
        </StyledHero>
    )
}