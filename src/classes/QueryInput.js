class QueryInput {
  constructor(clauses = [], view = 'list', sort = 'name', page = 1) {
    this.clauses = clauses;
    this.view = view;
    this.sort = sort;
    this.page = page;
  }
}

export default QueryInput;
