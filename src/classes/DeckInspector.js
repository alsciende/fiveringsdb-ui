class DeckInspector {
  constructor(slots = []) {
    this.slots = slots;
  }

  findCardByType(type) {
    return this.slots.map(slot => slot.card).find(card => card.type === type);
  }

  findSlotsBy(keyName, key) {
    return this.slots.filter(slot => slot.card[keyName] === key);
  }
}

export default DeckInspector;
