import { async } from 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';

// import icons from '../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import resultView from './view/resultView.js';
import paginationView from './view/paginationView.js';
import bookmarksView from './view/bookmarksView.js';

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

    //update result view to mark selected background color
    resultView.update(model.getResultPerPage());

    // update bookmark
    bookmarksView.update(model.state.bookmarks);

    // load data
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // render recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
    console.error(error);
  }
};

const controlSearchResult = async () => {
  try {
    resultView.renderSpinner();

    // get search key
    const query = searchView.getQuery();
    // break if key is not found
    if (!query) return;

    // load result
    await model.loadSearchResult(query);

    // display result
    // all the result
    // resultView.render(model.state.search.result);
    // some result
    resultView.render(model.getResultPerPage());

    // render pagination view
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const paginationHandle = goto => {
  // display new result
  resultView.render(model.getResultPerPage(goto));

  // render new pagination view
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlBookmark = function () {
  // add or remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // update boomark
  recipeView.update(model.state.recipe);

  //render bookmark in bookmark session
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const init = () => {
  recipeView.addRender(controlRecipe);
  recipeView.addHandleUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlBookmark);
  searchView.addSearchResult(controlSearchResult);
  paginationView.addHandleClick(paginationHandle);
  bookmarksView.addHandleBookMark(controlBookmarks);
};
init();
