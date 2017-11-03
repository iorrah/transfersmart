const API = {
  URL: process.env.REACT_APP_API_URL,
  URI: process.env.REACT_APP_API_URI,
  QUERY: process.env.REACT_APP_API_QUERY,
  url() {
    return `${this.URL}/${this.URI}?${this.QUERY}`;
  },
};

export default API;
