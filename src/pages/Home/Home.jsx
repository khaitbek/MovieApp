import React from 'react'
import { Hero } from "@components/Hero";
import { MovieList } from "@components/MovieList";
import { GlobalStyles } from "@/styles/default";
import { Movies } from "@/components/Movies/index";
import { StyledMoviesTitle } from "@/styles/components";
import { Routes, Route, Outlet } from "react-router-dom"
import { SingleMovie } from "../SingleMovie/SingleMovie";
import { Player } from "@/components/Player/player";
import { SingleActor } from "../SingleActor/singleActor";
import { ActorContextProvider } from "@/context/ActorContext";
import { Search } from "../Search/Search";


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
