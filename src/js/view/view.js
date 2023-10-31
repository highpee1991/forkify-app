import icons from '../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    this._data = data;
    const markUp = this._generateMarkUp();
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markUp);
  }

  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const newMarkUp = this._generateMarkUp();

    const newDOm = document.createRange().createContextualFragment(newMarkUp);
    const newElement = Array.from(newDOm.querySelectorAll('*'));
    const curElement = Array.from(this._parentEl.querySelectorAll('*'));

    newElement.forEach((newEl, i) => {
      const curE = curElement[i];
      console.log(curE, newEl.isEqualNode(curE));
      // Update chnaged Text
      if (
        !newEl.isEqualNode(curE) &&
        newEl.firstChild.nodeValue.trim() !== ''
      ) {
        curE.textContent = newEl.textContent;
      }

      // update Chnaged Atributes

      if (!newEl.isEqualNode(curE)) {
        console.log(Array.from(newEl.attributes));
        Array.from(newEl.attributes).forEach(attr =>
          curE.setAttribute(attr.name, attr.value)
        );
      }
    });
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
