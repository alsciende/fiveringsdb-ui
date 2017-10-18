import queryMapper from './queryMapper';

class QueryBuilder {
  build(queryInput) {
    this.filters = [];
    queryInput.clauses.forEach((clause) => {
      this.process(clause);
    });
    return this.filters;
  }

  process(clause) {
    const field = queryMapper.getField(clause);
    if (field === false) {
      return;
    }
    const filter = {};
    filter[field.name] = QueryBuilder[`${field.type}Condition`](clause.type, clause.args);
    this.filters.push(filter);
  }

  static stringCondition(type, args) {
    switch (type) {
      case ':':
        return { likenocase: args };
      case '!':
        return { '!likenocase': args };
      default:
        throw new Error(`Unsupported clause type: ${type}`);
    }
  }

  static integerCondition(type, args) {
    switch (type) {
      case ':':
        return { '==': args };
      case '!':
        return { '!==': args };
      case '>':
        return { gt: args };
      case '<':
        return { lt: args };
      default:
        throw new Error(`Unsupported clause type: ${type}`);
    }
  }

  static booleanCondition(type, args) {
    switch (type) {
      case ':':
        return { is: args[0] !== '0' };
      case '!':
        return { is: args[0] !== '1' };
      default:
        throw new Error(`Unsupported clause type: ${type}`);
    }
  }

  static idCondition(type, args) {
    switch (type) {
      case ':':
        return { isnocase: args };
      case '!':
        return { '!isnocase': args };
      default:
        throw new Error(`Unsupported clause type: ${type}`);
    }
  }

  static joinCondition(type, args) {
    switch (type) {
      case ':':
        return { has: args };
      case '!':
        return { '!has': args };
      default:
        throw new Error(`Unsupported clause type: ${type}`);
    }
  }
}

export default new QueryBuilder();
