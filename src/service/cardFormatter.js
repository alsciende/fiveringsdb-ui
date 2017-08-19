class CardFormatter {
  replaceIcons(text) {
    return text.replace(/\[([\w-]+)\]/g, '<span class="icon icon-$1"></span>');
  }

  format(text) {
    if (text === undefined) {
      return '';
    }

    return this.replaceIcons(text);
  }
}

export default new CardFormatter();
