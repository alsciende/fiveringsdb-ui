export default {
  apiBaseUrl: process.env.API_URL,
  getCardImageURL(card) {
    return `${process.env.IMG_URL + card.code}.png`;
  },
};
