export default {
  getApiURL(path = '') {
    if (path && path[0] === '/') {
      throw new Error('Leading slash no allowed');
    }
    return `${process.env.API_URL + path}`;
  },
  getApiOrigin() {
    const parser = document.createElement('a');
    parser.href = this.getApiURL();
    return parser.origin;
  },
};
