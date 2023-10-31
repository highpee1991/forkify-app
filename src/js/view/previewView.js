import View from './view';
import icons from '../../img/icons.svg';

class previewView extends View {
  _parentEl = '';

  _generateMarkUp() {
    const id = window.location.hash.slice(1);
    return `
          <li class="preview">
            <a class="preview__link ${
              this._data.id === id ? 'preview__link--active' : ''
            }" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.imageUrl}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publilsher}</p>
              </div>
            </a>
          </li>
    `;
  }
}
export default new previewView();
