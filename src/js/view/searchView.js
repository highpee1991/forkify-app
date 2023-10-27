class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clear();
    return query;
  }

  _clear() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addSearchResult(handleSearch) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();
      return handleSearch();
    });
  }
}

export default new SearchView();
