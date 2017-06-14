class QueryMapper {
  constructor() {
    this.default = {
      builder: 'card', // which QueryBuilder will we add the DQL to
      alias: 0, // position of the alias in the QueryBuilder
    };

    this.map = {
      '': {
        name: 'name',
        type: 'string',
        description: 'Card Title',
      },
      id: {
        name: 'code',
        type: 'code',
        description: 'Card Code',
      },
      x: {
        name: 'text',
        type: 'string',
        description: 'Card Text',
      },
      ms: {
        name: 'military_strength',
        type: 'integer',
        description: 'Military Strength',
      },
      ps: {
        name: 'political_strength',
        type: 'integer',
        description: 'Political Strength',
      },
      mm: {
        name: 'military_strength_mod',
        type: 'integer',
        description: 'Military Strength Modifier',
      },
      pm: {
        name: 'political_strength_mod',
        type: 'integer',
        description: 'Military Strength Modifier',
      },
      p: {
        name: 'packs',
        type: 'join',
        description: 'Pack',
      },
      c: {
        name: 'cycles',
        type: 'join',
        description: 'Cycle',
      },
      t: {
        name: 'type_code',
        type: 'code',
        description: 'Card Type',
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
