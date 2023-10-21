// Create New Article with Class
function createArticle(className) {
    const article = document.createElement('article');
    article.classList.add(className);
    /*
    if (className === 'left__item__article') 
    {
        article.style.marginTop = '-100px';
    }
    */
    return article;
}

// Add Article
function addArticle(className) {
    const mainContainer = document.querySelector('main');
    const article = createArticle(className);
    mainContainer.appendChild(article);
}

// Variable To Save Current Class
let currentClass = 'left-item__article';

// Scroll Event Listener to Add New Article
window.addEventListener('scroll', () => {
    const mainContainer = document.querySelector('main');
    const lastArticle = mainContainer.lastElementChild;

    if (lastArticle && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        if (currentClass === 'left-item__article') {
            addArticle('right-item__article');
            currentClass = 'right-item__article';
        } else {
            addArticle('left-item__article');
            currentClass = 'left-item__article';
        }
    }
});

// Initial Loading of Articles
for (let i = 0; i < 2; i++) {
    addArticle(currentClass);
    currentClass = currentClass === 'left-item__article' ? 'right-item__article' : 'left-item__article';
}

// Burger Menu Events 
const sidePanelButton = document.querySelector('.burger-menu__button');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');
const menuImage = document.querySelector('#menuImage');
sidePanelButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    body.classList.toggle('menu-open');

    menuImage.classList.toggle('active');
});