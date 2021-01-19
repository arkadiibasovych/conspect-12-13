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
    refs.showMoreButton.classList.add('is-hidden');
    refs.clearButton.classList.add('is-hidden');
    refs.spinner.classList.remove('is-hidden');

    newsService.fetchArticles().then(articles => {
        updateArticlesMarkup(articles);
        refs.showMoreButton.classList.remove('is-hidden');
        refs.clearButton.classList.remove('is-hidden');
    } ).finally(() => {refs.spinner.classList.add('is-hidden');
});

});

refs.showMoreButton.addEventListener('click', () => {
    refs.showMoreButton.classList.add('is-hidden');
    refs.spinner.classList.remove('is-hidden');
    newsService.fetchArticles().then(articles => {
        updateArticlesMarkup(articles);

        const documentHeight = document.documentElement.offsetHeight;

        window.scrollTo({
            top: documentHeight,
           
        })
        
    }).finally(() => {
        refs.spinner.classList.add('is-hidden');
        refs.showMoreButton.classList.remove('is-hidden')}
    );
})

refs.clearButton.addEventListener('click', () => {
    refs.articlesContainer.innerHTML = '';
    refs.showMoreButton.classList.add('is-hidden');
    refs.clearButton.classList.add('is-hidden');
});

