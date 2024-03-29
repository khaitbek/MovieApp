import { IMG_URL, searchResources } from "@/API/api";
import { Container, StyledHero, StyledHeroSpan, StyledHeroText, StyledMovieImage, StyledMovieItem, StyledMovieList } from "@/app/styles/components";
import { useMemo, useState } from 'react';
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";

export const Search = () => {
    const [searchMovieData, setSearchMovieData] = useState({});
    const { query } = useParams();
    const navigate = useNavigate();

    useMemo(async () => {
        const searchMovieResults = await searchResources("movie", query, searchMovieData.page);
        setSearchMovieData({ page: searchMovieResults.data.page, totalPages: searchMovieResults.data.total_pages, movies: searchMovieResults.data.results });
    }, [query, searchMovieData.page]);

    return (
        <>
            <StyledHero style={{ paddingBlock: "20px" }}>
                <Container>
                    <StyledHeroText style={{ marginBlock: 0, display: "block" }}>
                        Showing results for
                        <StyledHeroSpan>
                            "{query.replaceAll("+", " ")}"
                        </StyledHeroSpan>
                    </StyledHeroText>
                </Container>
            </StyledHero>
            <Container>
                <ReactPaginate containerClassName="pagination-container" pageRangeDisplayed={3} pageCount={searchMovieData.totalPages || 0} previousLabel="&#8592;" nextLabel="&#8594;" onPageChange={(e) => {
                    setSearchMovieData(prevData => {
                        return { ...prevData, page: e.selected }
                    })
                }} />
            </Container>
            {searchMovieData.movies && <StyledMovieList style={{ gridAutoFlow: "row", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 300px))", justifyContent: "center", paddingTop: 50 }}>
                {searchMovieData.movies.map(movie => {
                    return <StyledMovieItem tabIndex={0} key={movie.id} title={`${movie.original_title}. ${movie.description}`} onClick={() => navigate(`/movie/${movie.id}`)}>
                        <StyledMovieImage style={{ height: 400 }} src={movie.poster_path ? `${IMG_URL}/${movie.poster_path}` : `https://via.placeholder.com/500?text=${movie.original_title[0]}`} />
                    </StyledMovieItem>
                })}
            </StyledMovieList>}
        </>
    )
}
