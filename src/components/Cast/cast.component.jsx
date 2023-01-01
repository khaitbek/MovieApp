import { getResourceBy } from "@/API/api";
import { StyledCarousel, StyledMovieList } from "@/styles/components"
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { MovieItem } from "@components/MovieItem";
import { getCast } from "../../API/api";
import { StyledCastList } from "./styles";
import { Actor } from "@components/Actor";

export const Cast = ({ movieId, resourceType }) => {
  const [cast, setCast] = useState([]);
  const [isError, setError] = useState([]);
  const [isLoading, setLoading] = useState([]);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useMemo(async () => {
    try {
      const cast = await getCast(resourceType, movieId);
      setCast(cast.data.cast);
      setError(false);
    } catch (error) {
      setError(true);
    }
    finally {
      setLoading(false);
    }

  }, [])

  return <StyledCarousel ref={carousel}>
    <StyledCastList drag="x" dragConstraints={{ right: 0, left: -((cast.length - 2) * 278) }} tabIndex={0}>
      {cast.map(actor => {
        const { identifier, id, profile_path,name } = actor;
        return <Actor id={id} img={profile_path} name={name} key={crypto.randomUUID()} />
      })}
    </StyledCastList>
  </StyledCarousel>
}

