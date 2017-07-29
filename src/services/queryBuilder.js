import queryMapper from './queryMapper';

class QueryBuilder {
  build(queryInput) {
    this.filters = [];
    queryInput.clauses.forEach((clause) => { this.process(clause); });
    return this.filters;
  }
  process(clause) {
    const field = queryMapper.getField(clause);
    if (field === false) {
      return;
    }
    const filter = {};
    switch (field.type) {
      case 'string':
        filter[field.name] = { likenocase: clause.args };
        break;
      case 'integer':
        filter[field.name] = { '==': clause.args };
        break;
      case 'boolean':
        filter[field.name] = { is: !!clause.getArg() };
        break;
      case 'id':
        filter[field.name] = { isnocase: clause.args };
        break;
      case 'join':
        filter[field.name] = { has: clause.args };
        break;
      default:
        break;
    }
    this.filters.push(filter);
  }
}

export default new QueryBuilder();
