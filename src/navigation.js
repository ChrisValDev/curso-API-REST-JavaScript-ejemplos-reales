window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({ location });
    
    // Metodo .startsWidth funciona para identificar si un string comienza con los caracteres de otra cadena. Devuelve true o false.
    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage();
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }
}

function trendsPage() {
    console.log('Trends!!');
}
function searchPage() {
    console.log('Search!!');
}
function movieDetailsPage() {
    console.log('Movie!!');
}
function categoriesPage() {
    console.log('Category!!');
}
function homePage() {
    console.log('Home!!');
    getTrendingMoviesPreview();
    getCategoriesPreview();
}