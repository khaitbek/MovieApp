import { StyledMoviesTitle } from "@/app/styles/components";
import { GlobalStyles } from "@/app/styles/default";
import { Movies } from "@/components/Movies/index";
import { Player } from "@/components/Player/player";
import { Hero } from "@components/Hero";
import { MovieList } from "@components/MovieList";
import { Route, Routes } from "react-router-dom";
import { Search } from "../Search/Search";
import { SingleActor } from "../SingleActor/singleActor";
import { SingleMovie } from "../SingleMovie/SingleMovie";


export const Home = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={
                    <>
                        <Hero resourceId={157336} resourceType="movie" />
                        <Movies>
                            <StyledMoviesTitle>Popular movies</StyledMoviesTitle>
                            <MovieList type="movie" resource="popular" />
                            <StyledMoviesTitle>Popular TV shows</StyledMoviesTitle>
                            <MovieList type="tv" resource="popular" />
                            <StyledMoviesTitle>Top rated movies</StyledMoviesTitle>
                            <MovieList type="movie" resource="top rated" />
                            <StyledMoviesTitle>Top rated TV shows</StyledMoviesTitle>
                            <MovieList type="tv" resource="top rated" />
                        </Movies>
                    </>
                } />
                <Route path="search/:query" element={<Search />} />
                <Route path=":type/:id" element={<SingleMovie />} />
                <Route path="watch/:resource_type/:imdb_id" element={<Player />} />
                <Route path="person/:id" element={<SingleActor />} />
            </Routes>
            <GlobalStyles />
        </>
    )
}
