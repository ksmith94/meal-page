import React, { useState } from "react";
import styled from "styled-components";
import MyCombobox from "./MyComboBox";

interface AddRecipeProps {
  show: boolean,
  onClose: () => void,
  day: string,
  onRecipeSelect: (recipe: Recipe) => void
}

function AddRecipe(props: AddRecipeProps) {
  // const [open, setOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>()

  if (!props.show) {
    return null;
  }

  const handleModalClose = () => {
    props.onClose();
    // setOpen(false);
  }

  // const handleOpen = () => {
  //   setOpen(!open);
  // }

  const handleSubmit = (recipe: Recipe | undefined) => {
    if (recipe) {
      props.onRecipeSelect(recipe);
      handleModalClose();
    }
  }

  const handleRecipeSelect = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  }

  return (
    <Modal className="modal-container" onClick={handleModalClose}>
      <Content className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Header className="modal-header">
          <Title>Add a recipe for {props.day}</Title>
          {/* <CloseButton onClick={handleModalClose}>
            <FontAwesomeIcon icon={faXmark} />
          </CloseButton> */}
        </Header>
        <Body className="modal-body">
          <MyCombobox onRecipeSelect={handleRecipeSelect}/>
          {/* <div>
            <ShowRecipesButton onClick={handleOpen}>Recipes</ShowRecipesButton>
              {open ? (
                <RecipeList>
                  {recipes.map((recipe, i) => (
                    <li key={i}>
                      <button onClick={() => props.onRecipeSelect(recipe)}>{recipe.title}</button>
                    </li>
                  ))}
                </RecipeList>
              ) : (
                null
              )}
          </div> */}
        </Body>
        <Footer className="modal-footer">
          <FooterButton onClick={handleModalClose}>Cancel</FooterButton>
          <FooterButton onClick={() => handleSubmit(selectedRecipe)}>Submit</FooterButton>
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
  width: fit-content;
  background-color: #fff;
  padding: 32px;
  height: 400px;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
`

const Title = styled.h3`
  flex: 1;
  text-align: center;
  margin: 0;
`

/* const CloseButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
` */

const Footer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`

const FooterButton = styled.button`
  margin-left: 4px;
`

const Body = styled.div`
  width: fit-content;
  margin-top: 0;
  margin-bottom: auto;
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`

// const RecipeList = styled.ul`
//   list-style: none;
// `

// const ShowRecipesButton = styled.button`
//   border: none;
// `