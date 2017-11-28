class DeckDiff {
  diff(from, to) {
    return Object.assign({}, this.oneWayDiff(to, from, '+'), this.oneWayDiff(from, to, '−'));
  }

  oneWayDiff(to, from, sign) {
    const fromTo = {};

    Object.keys(to).forEach((cardId) => {
      if(cardId in from) {
        const diff = to[cardId] - from[cardId];
        if(diff > 0) {
          fromTo[cardId] = sign + diff;
        }
      } else {
        fromTo[cardId] = sign + to[cardId];
      }
    });

    return fromTo;
  }
}

export default new DeckDiff();
