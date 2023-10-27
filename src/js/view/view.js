import icons from '../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markUp = this._generateMarkUp();
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markUp);
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }

  renderError(message = this._error) {
    const markUp = ` 
          <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markUp);
  }

  renderSuccessMessage(message = this._error) {
    const markUp = ` 
           <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${this.successMessage}</p>
        </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markUp);
  }

  renderSpinner() {
    const markUp = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
  `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markUp);
  }
}
