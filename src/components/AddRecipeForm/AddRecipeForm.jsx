import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Form } from 'formik';
import { SearchBlackBtn } from 'components/Buttons/Buttons';

import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields'
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe'

const AddRecipeForm = () => {
  let initialValues = {
    srcImg: '',
    itemTitleRecipe: '',
    aboutRecipe: '',
    category: [
      { value: 'purple', label: 'Purple' },
      { value: 'red', label: 'Red' },
      { value: 'orange', label: 'Orange' },
      { value: 'yellow', label: 'Yello' },
      { value: 'green', label: 'Green' },
    ],
    cookingTimeRecipe: [
      { value: '5', label: '5 min' },
      { value: '10', label: '10 min' },
      { value: '15', label: '15 min' },
      { value: '20', label: '20 min' },
      { value: '25', label: '25 min' },
      { value: '30', label: '30 min' },
      { value: '35', label: '35 min' },
      { value: '40', label: '40 min' },
      { value: '45', label: '45 min' },
      { value: '50', label: '50 min' },
      { value: '55', label: '55 min' },
      { value: '60', label: '60 min' },
      { value: '65', label: '65 min' },
      { value: '70', label: '70 min' },
      { value: '75', label: '75 min' },
      { value: '80', label: '80 min' },
      { value: '85', label: '85 min' },
      { value: '90', label: '90 min' },
      { value: '95', label: '95 min' },
      { value: '100', label: '100 min' },
      { value: '105', label: '105 min' },
      { value: '110', label: '110 min' },
      { value: '115', label: '115 min' },
      { value: '120', label: '120 min' },
    ],
  }

  const handleOnSubmit = async (values) => {
      console.log(values);
  }
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        <Form autoComplete="off">
          <RecipeDescriptionFields dataRecipe={initialValues}/>
          <RecipeIngredientsFields dataIngredient={initialValues} />
          <RecipePreparationFields/>
          <SearchBlackBtn type="submit">Add</SearchBlackBtn>
        </Form>    
      </Formik>
      <PopularRecipe/>
    </>
  )
}

export default AddRecipeForm;
