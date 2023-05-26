import React from 'react';
import styled from 'styled-components';
import WeeklyMealPlan from './components/WeeklyMealPlan';

function Home(): JSX.Element {

  // const query = encodeURIComponent(`*[_type == "recipe"]`);
  // const URL = `https://${process.env.REACT_APP_SANITY_API_KEY}.api.sanity.io/v2021-10-21/data/query/${process.env.REACT_APP_SANITY_DATASET}?query=${query}`;

  // console.log(URL);
  // async function fetchRecipes() {
  //   const res = await fetch(URL);
  //   const json = await res.json();
  //   console.log(json);
  // }

  // fetchRecipes();

  return (
    <Wrapper>
      <WeeklyMealPlan />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 112px;
`

export default Home;
