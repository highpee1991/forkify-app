import View from './view';
import icons from '../../img/icons.svg';

class paginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandleClick(handle) {
    this._parentEl.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const dataGoto = Number(btn.dataset.goto);
      handle(dataGoto);
    });
  }

  _generateMarkUp() {
    const curPage = this._data.page;
    const numPerPage = Math.ceil(
      this._data.result.length / this._data.resultPerPage
    );

    // page1: and there are other pages
    if (curPage === 1 && numPerPage > 1) {
      return `
          <button data-goto="${
            curPage + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    // last page
    if (curPage === numPerPage && numPerPage > 1) {
      return `
            <button data-goto="${
              curPage - 1
            }" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>
      `;
    }

    //other pages
    if (curPage < numPerPage) {
      return `
          <button data-goto="${
            curPage - 1
          }" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>

             <button data-goto="${
               curPage + 1
             }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    // page1: and there are no other pages
    return '';
  }
}
export default new paginationView();
