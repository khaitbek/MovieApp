import React, { useRef } from 'react'
import { Container, StyledHeader, StyledHeaderWrapper, StyledNavItem, StyledNavLink, StyledNavList, StyledSearchBar, StyledSearchButton, StyledSearchForm } from "@styles/components"
import { debounce } from "../../utilities/debounce";
import { useNavigate, useParams } from "react-router-dom";

export const Header = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const params = useParams();
  const inputHandler = debounce(()=>{
    navigate(`search/${inputRef.current.value.replaceAll(" ","+")}`);
    inputRef.current.value = "";
  }) 
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrapper>
          <StyledNavList>
            <StyledNavItem>
              <StyledNavLink to="/">
                Movie App
              </StyledNavLink>
            </StyledNavItem>
          </StyledNavList>

          <StyledSearchForm onSubmit={e => e.preventDefault()}>
            <StyledSearchBar onChange={inputHandler} ref={inputRef} aria-label="search for movies" placeholder="search for movies"  type="search" required/>
            <StyledSearchButton type="button">Search</StyledSearchButton>
          </StyledSearchForm>
        </StyledHeaderWrapper>
      </Container>
    </StyledHeader>
  )
}
