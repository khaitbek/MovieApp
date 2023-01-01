import { getSingleActor } from "@/API/api";
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from "react-router-dom";
import { Movies } from "@/components/Movies";
import { StyledHeroText, StyledHeroTitle, StyledMoviesTitle } from "@/styles/components";
import { MovieList } from "@/components/MovieList/index";
import { ActorContext } from "../../context/ActorContext";

export const SingleActor = () => {
  const {actor, setActor} = useContext(ActorContext);
  const {id} = useParams();

  useMemo(async () => {
    try {
      const actorInfo = await getSingleActor(id);
      console.log(actorInfo.data);
      setActor(actorInfo.data);
    } catch (error) {
      console.log(error);
    }
  },[])

  return (
    <Movies>
      <StyledHeroTitle>
        {actor.name}
      </StyledHeroTitle>
      <StyledHeroText>
        {actor.biography}
      </StyledHeroText>
      <MovieList type="movie" resource="person" />
    </Movies>
  )
}

