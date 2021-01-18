import './styles.css';

import refs from './js/refs.js';
import fetchArticles from './js/fetch-articles.js'; 
import updateArticlesMarkup from './js/update-articles-markup.js';



refs.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = form.elements.query.value;
    console.log(inputValue); 
    

    refs.articlesContainer.innerHTML = '';

    fetchArticles(inputValue).then(updateArticlesMarkup);

});



