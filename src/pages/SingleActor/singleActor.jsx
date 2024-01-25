import { getSingleActor } from "@/API/api";
import { StyledHeroText, StyledHeroTitle } from "@/app/styles/components";
import { MovieList } from "@/components/MovieList/index";
import { Movies } from "@/components/Movies";
import { useContext, useMemo } from 'react';
import { useParams } from "react-router-dom";
import { ActorContext } from "../../entities/actor/model/store/ActorContext";

export const SingleActor = () => {
  const { actor, setActor } = useContext(ActorContext);
  const { id } = useParams();

  useMemo(async () => {
    try {
      const actorInfo = await getSingleActor(id);
      console.log(actorInfo.data);
      setActor(actorInfo.data);
    } catch (error) {
      console.log(error);
    }
  }, [])

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

