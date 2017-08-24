import _ from 'underscore';

class DeckInspector {
  constructor(slots, format) {
    this.slots = slots;
    this.format = format;
    this.stronghold = this.findCardByType('stronghold');
    this.clan = this.stronghold ? this.stronghold.clan : null;
    this.role = this.findCardByType('role');
  }

  findCardByType(type) {
    return DeckInspector.findCardByType(this.slots, type);
  }

  findSlotsBy(keyName, key) {
    return DeckInspector.findSlotsBy(this.slots, keyName, key);
  }

  getInfluencePool() {
    let influencePool = 0;

    if (this.stronghold) {
      influencePool = this.stronghold.influence_pool;
    }

    if (this.role && this.role.traits.includes('keeper')) {
      influencePool += 3;
    }

    return influencePool;
  }

  getInfluenceSpent() {
    return this.findSlotsBy('side', 'conflict').reduce((influenceSpent, slot) => {
      if (this.clan && slot.card.clan === this.clan) {
        return influenceSpent;
      }

      return influenceSpent + (slot.quantity * slot.card.influence_cost);
    }, 0);
  }

  count() {
    return DeckInspector.count(this.slots);
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
      if (this.role && this.role.traits.includes('seeker')) {
        if (_.difference(provinceElements, this.role.traits).length === 3) {
          seekerException = true;
        }
      }

      if (seekerException === false) {
        return 15;
      }
    }

    if (this.clan) {
      const offclans = DeckInspector.findSlotsOffClan(provinceDeck, this.clan);
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

    const maxCount = this.format === 'single-core' ? 30 : 45;
    if (dynastyCount > maxCount) {
      return 6;
    }

    if (this.clan) {
      const offclans = DeckInspector.findSlotsOffClan(dynastyDeck, this.clan);
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

    const maxCount = this.format === 'single-core' ? 30 : 45;
    if (conflictCount > maxCount) {
      return 9;
    }

    const characterCount = DeckInspector.count(DeckInspector.findSlotsBy(conflictDeck, 'type', 'character'));
    if (characterCount > 10) {
      return 12;
    }

    if (this.clan) {
      let influencePool = this.getInfluencePool();

      const offclans = DeckInspector.findSlotsOffClan(conflictDeck, this.clan);
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

  /**
   * static functions
   */

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
