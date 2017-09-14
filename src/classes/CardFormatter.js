class CardFormatter {
  static replaceIcons(text) {
    return text.replace(/\[([\w-]+)\]/g, '<span class="icon icon-$1"></span>');
  }

  static format(text) {
    if (text === undefined) {
      return '';
    }

    return CardFormatter.replaceIcons(text);
  }
}

export default CardFormatter;
