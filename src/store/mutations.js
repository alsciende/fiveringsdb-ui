export const openCardModale = (state, card) => {
  state.cardModale = card;
};

export const closeCardModale = (state) => {
  state.cardModale = null;
};

export const changeDocumentTitle = (state, title) => {
  state.documentTitle = title;
};
