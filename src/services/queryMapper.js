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
