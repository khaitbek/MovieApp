import { Container, StyledHeader, StyledHeaderWrapper, StyledNavItem, StyledNavLink, StyledNavList, StyledSearchBar, StyledSearchButton, StyledSearchForm } from "@/styles/components"
import React, { useRef } from 'react'
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
                All
              </StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLink to="/tv">
                TV SHOW
              </StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLink to="/movie">
                Movie
              </StyledNavLink>
            </StyledNavItem>
          </StyledNavList>

          <StyledSearchForm onSubmit={e => e.preventDefault()}>
            <StyledSearchBar onChange={inputHandler} ref={inputRef}  type="search" required/>
            <StyledSearchButton type="button">Search</StyledSearchButton>
          </StyledSearchForm>
        </StyledHeaderWrapper>
      </Container>
    </StyledHeader>
  )
}
