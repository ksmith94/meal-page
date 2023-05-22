import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import recipes from "../DemoData/Recipes";

interface AddRecipeProps {
  show: boolean,
  onClose: () => void,
  day: string
}

function AddRecipe(props: AddRecipeProps) {
  const [open, setOpen] = useState(false);

  if (!props.show) {
    return null;
  }

  const handleModalClose = () => {
    props.onClose();
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <Modal className="modal-container" onClick={handleModalClose}>
      <Content className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Header className="modal-header">
          <h3>Add a recipe for {props.day}</h3>
          <button onClick={handleModalClose}><FontAwesomeIcon icon={faXmark} /></button>
        </Header>
        <Body className="modal-body">
          <div>
            <ShowRecipesButton onClick={handleOpen}>Recipes</ShowRecipesButton>
              {open ? (
                <RecipeList>
                  {recipes.map((recipe, i) => (
                    <li key={i}>
                      <button>{recipe.title}</button>
                    </li>
                  ))}
                </RecipeList>
              ) : (
                null
              )}
          </div>
        </Body>
        <Footer className="modal-footer">
          <button>Submit</button>
        </Footer>
      </Content>
    </Modal>
  )
}

export default AddRecipe;

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  width: 500px;
  background-color: #fff;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Footer = styled.div`
  padding: 10px;
`

const Body = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`

const RecipeList = styled.ul`
  list-style: none;
`

const ShowRecipesButton = styled.button`
  border: none;
`