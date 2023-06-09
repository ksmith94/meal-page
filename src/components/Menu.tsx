import { faEgg, faHouse, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Menu(): JSX.Element {
  return (
    <div className="menu">
      <ul>
        <li>
          <StyledLink to="/"><FontAwesomeIcon icon={faHouse}/>Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/myrecipes"><FontAwesomeIcon icon={faStar} />My Recipes</StyledLink>
        </li>
        <li>
          <StyledLink to="/ingredients"><FontAwesomeIcon icon={faEgg} />Ingredients</StyledLink>
        </li>
        {/* <li>
          <StyledLink to="/create-a-recipe"><FontAwesomeIcon icon={faPlus} />Create a Recipe</StyledLink>
        </li> */}
      </ul>
    </div>
  );
}

export default Menu;

const StyledLink = styled(Link)`
  cursor: pointer;
`