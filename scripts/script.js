/*-------------изменение тымы--------------------------------------*/
let buttonDark = document.querySelector(".theme-button-dark");
let buttonLight = document.querySelector(".theme-button-light");
let page = document.querySelector(".page");

buttonDark.onclick = function () {
    buttonLight.classList.remove("active");
    buttonDark.classList.add("active");
    page.classList.add("dark");
}

buttonLight.onclick = function () {
    buttonDark.classList.remove("active");
    buttonLight.classList.add("active");
    page.classList.remove("dark");
}
/*-------------изменение шрифта--------------------------------------*/
let buttonFontSansSerif = document.querySelector(".font-button-sans-serif");
let buttonFontSerif = document.querySelector(".font-button-serif");

buttonFontSansSerif.onclick = function() {
    buttonFontSansSerif.classList.add("active");
    buttonFontSerif.classList.remove("active");
    page.classList.remove("serif");
}

buttonFontSerif.onclick = function() {
    buttonFontSerif.classList.add("active");
    buttonFontSansSerif.classList.remove("active");
    page.classList.add("serif");
}
/*-------------установка обработчика события к кнопкам постов--------------------------------------*/
let blogArticles = document.querySelectorAll(".blog-article");

for (let blogArticle of blogArticles) {
    let buttonMore = blogArticle.querySelector(".more");
    buttonMore.onclick = function() {
        blogArticle.classList.remove("short");
    }
}
/*-----------------изменение формата отображения карточек в разделе Аренда--------------------------------------*/
let buttonCardGrid = document.querySelector(".card-view-button-grid");
let buttonCardList = document.querySelector(".card-view-button-list");
let cards = document.querySelector(".cards");

buttonCardGrid.onclick = function () {
    buttonCardList.classList.remove("active");
    buttonCardGrid.classList.add("active");
    cards.classList.remove("list");
}

buttonCardList.onclick = function() {
    buttonCardGrid.classList.remove("active");
    buttonCardList.classList.add("active");
    cards.classList.add("list");
}
/*--------------------добавление обработчиков для смены выбранного изображения--------------------------------------*/
let activePhoto = document.querySelector(".active-photo");
let imgs = document.querySelectorAll(".preview-list a")

for (let img of imgs) {
    img.onclick = function(evt) {
        evt.preventDefault();
        activePhoto.src = img.href;

        let activeImg = document.querySelector(".preview-list .active-item")
        activeImg.classList.remove("active-item");
        img.classList.add("active-item");
    }
    
}