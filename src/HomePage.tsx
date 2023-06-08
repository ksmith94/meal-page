import React from 'react';
import styled from 'styled-components';
import WeeklyMealPlan from './components/WeeklyMealPlan';

function Home(): JSX.Element {

  
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
