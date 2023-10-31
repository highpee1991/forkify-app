import View from './view';
import icons from '../../img/icons.svg';

class resultView extends View {
  _parentEl = document.querySelector('.results');
  _error = 'No recipe found for your querry please try again later';
  _message = '';

  _generateMarkUp() {
    return this._data.map(this._loopSearchResult).join('');
  }

  _loopSearchResult(res) {
    const id = window.location.hash.slice(1);
    return `
          <li class="preview">
            <a class="preview__link ${
              res.id === id ? 'preview__link--active' : ''
            }" href="#${res.id}">
              <figure class="preview__fig">
                <img src="${res.imageUrl}" alt="${res.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${res.title}</h4>
                <p class="preview__publisher">${res.publilsher}</p>
              </div>
            </a>
          </li>
    `;
  }
}
export default new resultView();
