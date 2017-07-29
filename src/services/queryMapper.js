class QueryMapper {
  constructor() {
    this.default = {
      builder: 'card', // which QueryBuilder will we add the DQL to
      alias: 0, // position of the alias in the QueryBuilder
    };

    this.map = {
      '': {
        name: 'name_canonical',
        type: 'string',
        description: 'Card Title',
      },
      id: {
        name: 'id',
        type: 'id',
        description: 'Card Id',
      },
      x: {
        name: 'text_canonical',
        type: 'string',
        description: 'Card Text',
      },
      p: {
        name: 'packs',
        type: 'join',
        description: 'Pack',
      },
      y: {
        name: 'cycles',
        type: 'join',
        description: 'Cycle',
      },
      c: {
        name: 'clan',
        type: 'id',
        description: 'Card Clan',
      },
      t: {
        name: 'type',
        type: 'id',
        description: 'Card Type',
      },
      d: {
        name: 'side',
        type: 'id',
        description: 'Card Deck',
      },
      k: {
        name: 'traits',
        type: 'join',
        description: 'Traits',
      },
      i: {
        name: 'influence_cost',
        type: 'integer',
        description: 'Influence Cost',
      },
      f: {
        name: 'cost',
        type: 'integer',
        description: 'Fate Cost',
      },
      u: {
        name: 'unicity',
        type: 'boolean',
        description: 'Unique',
      },
      g: {
        name: 'glory',
        type: 'integer',
        description: 'Glory',
      },
      mil: {
        name: 'military',
        type: 'integer',
        description: 'Military Skill',
      },
      pol: {
        name: 'political',
        type: 'integer',
        description: 'Political Skill',
      },
      str: {
        name: 'strength',
        type: 'integer',
        description: 'Province Strength',
      },
    };
  }
  getField(clause) {
    if (this.map[clause.name] === null) {
      return false;
    }

    let data = this.map[clause.name];
    if (typeof data === 'function') {
      data = data(clause);
    }

    return Object.assign({}, this.default, data);
  }
}

export default new QueryMapper();
