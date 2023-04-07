import { faBowlFood, faHouse } from "@fortawesome/free-solid-svg-icons";
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
          <StyledLink to="/recipes"><FontAwesomeIcon icon={faBowlFood} />Recipes</StyledLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

const StyledLink = styled(Link)`
  cursor: pointer;
`