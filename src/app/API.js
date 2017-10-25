const API = {
  URL: process.env.REACT_APP_API_URL,
  URI: process.env.REACT_APP_API_URI,
  url() {
    return `${this.URL}/${this.URI}`;
  },
};

export default API;
