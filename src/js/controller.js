import { async } from 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';

// import icons from '../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import resultView from './view/resultView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

if (module.hot) {
  module.hot.accept();
}

const controlRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();
    // load data
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // render recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResult = async () => {
  try {
    resultView.renderSpinner();
    console.log('resultView', resultView);

    // get search key
    const query = searchView.getQuery();
    // break if key is not found
    if (!query) return;

    // load result
    await model.loadSearchResult(query);

    // display result
    console.log(model.state.search.result);
    resultView.render(model.state.search.result);
  } catch (error) {
    console.log(error);
  }
};

const init = () => {
  recipeView.addRender(controlRecipe);
  searchView.addSearchResult(controlSearchResult);
};
init();
