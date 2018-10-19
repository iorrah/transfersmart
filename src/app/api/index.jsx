const API = {
  URL: 'http://data.fixer.io',
  URI: 'api/latest',
  QUERY: `access_key=${process.env.REACT_APP_API_KEY}`,

  url() {
    return `${this.URL}/${this.URI}?${this.QUERY}`;
  },
};

export default API;
