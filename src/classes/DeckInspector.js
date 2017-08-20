import _ from 'underscore';

class DeckInspector {
  constructor(slots, format) {
    this.slots = slots;
    this.format = format;
    this.problem = this.findProblem();
  }

  findCardByType(type) {
    return DeckInspector.findCardByType(this.slots, type);
  }

  findSlotsBy(keyName, key) {
    return DeckInspector.findSlotsBy(this.slots, keyName, key);
  }

  count() {
    return DeckInspector.count(this.slots);
  }

  getProblem() {
    return this.problem;
  }

  findProblem() {
    return this.checkCardCopies()
      || this.checkStrongholdDeck()
      || this.checkRoleDeck()
      || this.checkProvinceDeck()
      || this.checkDynastyDeck()
      || this.checkConflictDeck();
  }

  checkCardCopies() {
    if (_.find(this.slots, (slot) => slot.quantity > slot.card.deck_limit)) {
      return 1;
    }

    return 0;
  }

  checkStrongholdDeck() {
    const strongholdDeck = this.findSlotsBy('type', 'stronghold');
    const strongholdCount = DeckInspector.count(strongholdDeck);

    if (strongholdCount < 1) {
      return 2;
    }

    if (strongholdCount > 1) {
      return 3;
    }

    return 0;
  }

  checkRoleDeck() {
    const roleDeck = this.findSlotsBy('type', 'role');
    const roleCount = DeckInspector.count(roleDeck);

    if (roleCount > 1) {
      return 4;
    }

    return 0;
  }

  checkProvinceDeck() {
    const provinceDeck = this.findSlotsBy('type', 'province');
    const provinceCount = DeckInspector.count(provinceDeck);

    if (provinceCount < 5) {
      return 13;
    }

    if (provinceCount > 5) {
      return 14;
    }

    const provinceElements = _.map(provinceDeck, slot => slot.card.element);
    if (_.uniq(provinceElements).length < 5) {
      let seekerException = false;

      const role = this.findCardByType('role');
      if (role !== null && role.traits.includes('seeker')) {
        if (_.difference(provinceElements, role.traits).length === 3) {
          seekerException = true;
        }
      }

      if (seekerException === false) {
        return 15;
      }
    }

    const stronghold = this.findCardByType('stronghold');
    if (stronghold !== null) {
      const clan = stronghold.clan;

      const offclans = DeckInspector.findSlotsOffClan(provinceDeck, clan);
      if (offclans.length > 0) {
        return 16;
      }
    }

    return 0;
  }

  checkDynastyDeck() {
    const dynastyDeck = this.findSlotsBy('side', 'dynasty');
    const dynastyCount = DeckInspector.count(dynastyDeck);

    const minCount = this.format === 'single-core' ? 30 : 40;
    if (dynastyCount < minCount) {
      return 5;
    }

    const maxCount = this.format === 'single-core' ? 30 : 40;
    if (dynastyCount > maxCount) {
      return 6;
    }

    const stronghold = this.findCardByType('stronghold');
    if (stronghold !== null) {
      const clan = stronghold.clan;

      const offclans = DeckInspector.findSlotsOffClan(dynastyDeck, clan);
      if (offclans.length > 0) {
        return 7;
      }
    }

    return 0;
  }

  checkConflictDeck() {
    const conflictDeck = this.findSlotsBy('side', 'conflict');
    const conflictCount = DeckInspector.count(conflictDeck);

    const minCount = this.format === 'single-core' ? 30 : 40;
    if (conflictCount < minCount) {
      return 8;
    }

    const maxCount = this.format === 'single-core' ? 30 : 40;
    if (conflictCount > maxCount) {
      return 9;
    }

    const characterCount = DeckInspector.count(DeckInspector.findSlotsBy(conflictDeck, 'type', 'character'));
    if (characterCount > 10) {
      return 12;
    }

    const stronghold = this.findCardByType('stronghold');
    if (stronghold !== null) {
      const clan = stronghold.clan;
      let influencePool = stronghold.influence_pool;
      const role = this.findCardByType('role');
      if (role !== null && role.traits.includes('keeper')) {
        influencePool += 3;
      }

      const offclans = DeckInspector.findSlotsOffClan(conflictDeck, clan);
      for (const slot of offclans) {
        if (slot.card.influence_cost === undefined) {
          return 17;
        }
        influencePool -= slot.quantity * slot.card.influence_cost;
      }

      if (influencePool < 0) {
        return 10;
      }

      if (_.uniq(offclans.map(slot => slot.card.clan)).length > 1) {
        return 11;
      }
    }

    return 0;
  }

  static findSlotsOffClan(slots, clan) {
    return slots.filter(slot => slot.card.clan !== clan && slot.card.clan !== 'neutral');
  }

  static findCardByType(slots, type) {
    return slots.map(slot => slot.card).find(card => card.type === type);
  }

  static findSlotsBy(slots, keyName, key) {
    return slots.filter(slot => slot.card[keyName] === key);
  }

  static count(slots) {
    return _.pluck(slots, 'quantity').reduce((a, b) => a + b, 0);
  }
}

export default DeckInspector;
