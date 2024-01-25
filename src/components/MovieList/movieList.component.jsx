import { getActorMovies, getResourceBy } from "@/API/api";
import { StyledCarousel, StyledMovieList } from "@/app/styles/components";
import { useMemo, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import { MovieItem } from "../MovieItem/movieItem.component";

export const MovieList = ({ type, resource }) => {
  const [movies, setMovies] = useState([]);
  const [isError, setError] = useState([]);
  const [isLoading, setLoading] = useState([]);
  const { id } = useParams();
  const carousel = useRef();

  useMemo(async () => {
    if (movies.length !== 0) return;
    try {
      let resources = null;
      if (resource === "person") {
        resources = await getActorMovies(id);
        setMovies(resources.data.cast);
      } else {
        resources = await getResourceBy(type, resource);
        setMovies(resources.data.results);
      }

    } catch (error) {
      console.log(error);
      setError(true);
    }
    finally {
      setLoading(false);
    }

  }, []);

  return <StyledCarousel>
    <StyledMovieList drag="x" dragConstraints={{ right: 0, left: -((movies.length - 1) * 278) }} tabIndex={0}>
      {movies.map(movie => (
        <MovieItem id={movie.id} imdb={movie.imdb_id} type={type} key={movie.id} title={movie.original_title} description={movie.overview} poster_path={movie.poster_path} />
      ))}
    </StyledMovieList>
  </StyledCarousel>
}

