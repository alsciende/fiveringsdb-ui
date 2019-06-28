import QueryClause from '@/classes/QueryClause';

const STATE_INITIAL = 1;
const STATE_ARGUMENT = 2;
const STATE_ERROR = 3;

class QueryParser {
  saveClause() {
    this.list.push(this.clause);
  }

  parse(query) {
    this.list = [];
    if (query) {
      this.query = query.trim().replace(/\s+/u, ' ');
      this.clause = new QueryClause();
      this.state = STATE_INITIAL;

      const success = this.findClauses();
      if (success === false) {
        throw new Error(`Parsing failed for [${query}]`);
      }
      if (this.clause.hasArgs()) {
        this.saveClause();
      }
    }
    return this.list;
  }

  findClauses() {
    while (this.query.length) {
      switch (this.state) {
        case STATE_INITIAL:
          this.findNameAndType();
          break;
        case STATE_ARGUMENT:
          /* eslint-disable no-unused-expressions */
          this.findArgument()
          || this.findDisjonction()
          || this.findConjonction()
          || this.findNothing();
          break;
        case STATE_ERROR:
          return false;
        default:
          break;
      }
    }
    return true;
  }

  findNameAndType() {
    // we're looking for a type but our current clause is ready -> close it
    if (this.clause.hasArgs()) {
      this.saveClause();
      this.clause = new QueryClause();
    }

    // looking for a type
    const match = this.findToken('(\\w{1,9})([:<>!])');
    if (match) {
      // we have found a token "{condition}:"
      this.clause.name = match[1].toLowerCase();
      this.clause.type = match[2];
    } else {
      // we didn't find a type token at the start of the query
      // so the type is the implicit one
      this.clause.name = '';
      this.clause.type = ':';
    }

    // we have name and type, let's find the arguments
    this.state = STATE_ARGUMENT;

    return true;
  }

  findArgument() {
    // token 'any text in quotes' or 'allowed text without quotes'
    const match = this.findToken('"([^"]*)"') || this.findToken('([\\w\\d\\-&\']+)');

    if (!match) {
      return false;
    }

    this.clause.addArg(match[1]);

    return true;
  }

  findDisjonction() {
    // token '|'
    const match = this.findToken('\\|');

    if (!match) {
      return false;
    }

    if (this.clause.type === ':' || this.clause.type === '!') {
      // type allows disjonctions
      // nothing to do, the parser will eat the token on next iteration
    } else {
      // error
      this.state = STATE_ERROR;
    }

    return true;
  }

  findConjonction() {
    // token ' '
    const match = this.findToken(' ');

    if (!match) {
      return false;
    }

    this.state = STATE_INITIAL;

    return true;
  }

  findNothing() {
    // error
    this.query = this.query.substr(1);
    this.state = STATE_ERROR;
  }

  findToken(token) {
    const regexp = new RegExp(`^${token}(.*)`, 'u');
    const match = this.query.match(regexp);
    if (match) {
      this.query = match.pop();
      return match;
    }
    return false;
  }
}

export default new QueryParser();
