import './styles.css';

import refs from './js/refs.js';
import newsService from './js/news-service'; 
import updateArticlesMarkup from './js/update-articles-markup.js';

refs.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const form = e.currentTarget;
    newsService.query = form.elements.query.value;

    refs.articlesContainer.innerHTML = '';
    form.reset();

    newsService.resetPage();
   

    newsService.fetchArticles().then(articles => {
        updateArticlesMarkup(articles);
        
    } );

});

refs.showMoreButton.addEventListener('click', () => {
    newsService.fetchArticles().then(articles => {
        updateArticlesMarkup(articles);
        
    } );
})

