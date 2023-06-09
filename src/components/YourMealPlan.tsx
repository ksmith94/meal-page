import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function YourMealPlan(): JSX.Element {
  return (
    <Wrapper>
      <p>Meal Plan Successfully Created!</p>
      <Link to='/'>Go to home page</Link>
    </Wrapper>
  )
}

export default YourMealPlan;

const Wrapper = styled.div`
  margin-top: 112px;
`