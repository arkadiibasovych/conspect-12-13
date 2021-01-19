
const apiKey = '85ca983cef8845c4ab4033de661fe4ed';


export default {

    searchQuery: '',
    page: 1,

  fetchArticles() {

    const url = `http://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=8&page=${this.page}`;
    const options = {
      headers: {
        'X-Api-Key': apiKey,
      }
    };
    
    return fetch(url, options)
      .then(res => res.json())
        .then(({ articles }) => {
            this.page += 1;
            return articles;
      })
    },
  
    resetPage() {
        this.page = 1;
    },
    
    get query() {
        return this.searchQuery;
    },

    set query(value) {
        this.searchQuery = value;
    },
};