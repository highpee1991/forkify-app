import View from './view';
import icons from '../../img/icons.svg';
import previewView from './previewView';

class bookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _error = 'No bookmark yet, find a recipe to bookmark';
  _message = '';

  addHandleBookMark(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkUp() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new bookmarksView();
