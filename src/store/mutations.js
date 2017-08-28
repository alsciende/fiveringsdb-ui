export const openCardModale = (state, card) => {
  state.cardModale = card;
};

export const closeCardModale = (state) => {
  state.cardModale = null;
};

export const changePreferredPack = (state, packId) => {
  state.preferredPack = packId;
};
