import View from './view';
import icons from '../../img/icons.svg';
import previewView from './previewView';

class resultView extends View {
  _parentEl = document.querySelector('.results');
  _error = 'No recipe found for your querry please try again later';
  _message = '';

  _generateMarkUp() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new resultView();
