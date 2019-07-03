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
      text: {
        name: 'text_canonical',
        type: 'string',
        description: 'Card Text',
      },
      x: {
        name: 'text_canonical',
        type: 'string',
        description: 'Card Text',
      },
      pack: {
        name: 'packs',
        type: 'join',
        description: 'Pack',
      },
      p: {
        name: 'packs',
        type: 'join',
        description: 'Pack',
      },
      cycle: {
        name: 'cycles',
        type: 'join',
        description: 'Cycle',
      },
      y: {
        name: 'cycles',
        type: 'join',
        description: 'Cycle',
      },
      clan: {
        name: 'clan',
        type: 'id',
        description: 'Card Clan',
      },
      c: {
        name: 'clan',
        type: 'id',
        description: 'Card Clan',
      },
      type: {
        name: 'type',
        type: 'id',
        description: 'Card Type',
      },
      t: {
        name: 'type',
        type: 'id',
        description: 'Card Type',
      },
      side: {
        name: 'side',
        type: 'id',
        description: 'Card Deck',
      },
      d: {
        name: 'side',
        type: 'id',
        description: 'Card Deck',
      },
      trait: {
        name: 'traits',
        type: 'join',
        description: 'Traits',
      },
      k: {
        name: 'traits',
        type: 'join',
        description: 'Traits',
      },
      influence: {
        name: 'influence_cost',
        type: 'integer',
        description: 'Influence Cost',
      },
      i: {
        name: 'influence_cost',
        type: 'integer',
        description: 'Influence Cost',
      },
      cost: {
        name: 'cost',
        type: 'integer',
        description: 'Fate Cost',
      },
      f: {
        name: 'cost',
        type: 'integer',
        description: 'Fate Cost',
      },
      unicity: {
        name: 'unicity',
        type: 'boolean',
        description: 'Unique',
      },
      u: {
        name: 'unicity',
        type: 'boolean',
        description: 'Unique',
      },
      glory: {
        name: 'glory',
        type: 'integer',
        description: 'Glory',
      },
      g: {
        name: 'glory',
        type: 'integer',
        description: 'Glory',
      },
      element: {
        name: 'element',
        type: 'id',
        description: 'Element',
      },
      e: {
        name: 'element',
        type: 'id',
        description: 'Element',
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
      art: {
        name: 'illustrators',
        type: 'join',
        description: 'Illustrator Name',
      },
    };
  }

  getField(clause) {
    if (clause.name in this.map) {
      let data = this.map[clause.name];
      if (typeof data === 'function') {
        data = data(clause);
      }

      return Object.assign({}, this.default, data);
    }

    return false;
  }

  formatAsHtml() {
    const lines = [];
    Object.keys(this.map).forEach((clause) => {
      if (clause !== '') {
        lines.push(`<li><tt>${clause}</tt> &ndash; ${this.map[clause].description}</li>`);
      }
    });
    return `<ul>${lines.join('')}</ul>`;
  }
}

export default new QueryMapper();
