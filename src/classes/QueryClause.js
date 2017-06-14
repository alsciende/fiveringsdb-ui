class QueryClause {
  constructor(name = '', type = ':', args = []) {
    this.name = name;
    this.type = type;
    this.args = args;
  }
  hasArgs() {
    return this.args.length > 0;
  }
  addArg(arg) {
    this.args.push(arg);
  }
  getArg(i = 0) {
    if (this.args.length > i) {
      return this.args[i];
    }
    return null;
  }
}

export default QueryClause;
