import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helper';

export const state = {
  recipe: {},
};

export const loadRecipe = async id => {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    const { recipe } = data.data;
    state.recipe = {
      cookingTime: recipe.cooking_time,
      id: recipe.id,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      publilsher: recipe.publisher,
      servings: recipe.servings,
      sourceURL: recipe.source_url,
      title: recipe.title,
    };
    // console.log(state.recipe);
  } catch (error) {
    alert(error);
    console.log(error);
  }
};
