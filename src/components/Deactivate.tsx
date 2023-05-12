import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

function Deactivate() {
  return (
    <Wrapper>
      <Header>
        <Exclamation icon={faCircleExclamation} />
        <DeactivateHeader>Deactivate Account</DeactivateHeader>
      </Header>
      <Warning>Once you have deactivated your account, you will not be able to access any saved data, and there will be no way to retrieve it. Are you sure you want to continue?</Warning>
      <ButtonContainer>
        <Cancel>Cancel</Cancel>
        <DeactivateButton>Deactivate</DeactivateButton>
      </ButtonContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 400px;
  margin: 32px auto;
  border-top: 4px solid hsl(358, 70%, 41%);
  padding: 8px;
  border-radius: 0 0 4px 4px;
  background: hsl(217, 10%, 90%);
`

const Header = styled.header`
  display: flex;
  align-items: center;
`

const Exclamation = styled(FontAwesomeIcon)`
  padding-right: 12px;
  color: hsl(358, 63%, 49%);
  height: 1.2rem;
  width: 1.2rem;
`

const DeactivateHeader = styled.h3`
  font-family: sans-serif;
  color: hsl(217, 10%, 20%);
`

const Warning = styled.p`
  width: 70%;
  margin: 8px auto;
  font-family: sans-serif;
  color: hsl(217, 10%, 20%);
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`

const Cancel = styled.button`
  margin: 0 12px;
  border: none;
  background: inherit;
  color: hsl(217, 10%, 30%);
  border-radius: 2px;
  font-family: sans-serif;

  &:focus {
    border: 1px solid hsl(217, 55%, 55%);
    color: hsl(217, 10%, 20%);
    font-weight: 600;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid hsl(217, 55%, 55%);
    color: hsl(217, 10%, 20%);
    font-weight: 600;
  }
`

const DeactivateButton = styled.button`
  border: none;
  background: hsl(358, 70%, 90%);
  color: hsl(358, 70%, 49%);
  font-family: sans-serif;
  border-radius: 2px;

  &:hover {
    cursor: pointer;
    border: 1px solid hsl(358, 70%, 41%);
    font-weight: 600;
  }
`

export default Deactivate;