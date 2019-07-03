import queryParser from './queryParser';

class QueryRouter {
  constructor() {
    this.config = {
      id: 'cards-by-card-id',
      p: 'cards-by-pack-id',
      pack: 'cards-by-pack-id',
      c: 'cards-by-clan-id',
      clan: 'cards-by-clan-id',
      y: 'cards-by-cycle-id',
      cycle: 'cards-by-cycle-id'
    };
    this.reverseMatching = {
      'cards-by-search-query': function matcher(route) {
        return route.query.q;
      },
      'cards-by-card-id': function matcher(route) {
        return `id:${route.params.id}`;
      },
      'cards-by-pack-id': function matcher(route) {
        return `pack:${route.params.id}`;
      },
      'cards-by-clan-id': function matcher(route) {
        return `clan:${route.params.id}`;
      },
      'cards-by-cycle-id': function matcher(route) {
        return `cycle:${route.params.id}`;
      },
      'cards-by-default': '',
    };
  }

  getRoute(query) {
    const clauses = queryParser.parse(query);
    if (clauses.length === 0) {
      return { name: 'cards-by-default' };
    }
    if (clauses.length === 1) {
      const clause = clauses[0];
      const name = this.config[clause.name];
      if (name && clause.args.length === 1) {
        const params = { id: clause.getArg() };
        return { name, params };
      }
    }
    return { name: 'cards-by-search-query', query: { q: query } };
  }

  getQuery(route) {
    const matcher = this.reverseMatching[route.name];
    switch (typeof matcher) {
      case 'string':
        return matcher;
      case 'function':
        return matcher(route);
      default:
        return null;
    }
  }
}

export default new QueryRouter();
