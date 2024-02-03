'use strict';

const titles = document.querySelectorAll('.experience-variants a');
// Attach the event listener to each link
titles.forEach(title => {
    title.addEventListener('click', titleClickHandler);
  });

function titleClickHandler (e) {
    e.preventDefault();
const clickedElement = this;



/*[DONE] remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.experience-variants a.active');

for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
}

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.main-experience-column-second.active');

 for(let activeArticle of activeArticles){
     activeArticle.classList.remove('active');
 }
     /* add class 'active' to the clicked link */
      // Add class 'active' to the clicked link
    clickedElement.classList.add('active');


  /* get 'href' attribute from the clicked link */
 const articleSelector = clickedElement.getAttribute('href');


  /* find the correct article using the selector (value of 'href' attribute) */
  
  const targetArticle = document.querySelector(articleSelector);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}
/*BURGER*/
const body = document.querySelector('body');
const menu = document.querySelector('.header_menu');
const burger = document.querySelector('.header_burger');

burger.addEventListener('click', ()=>{
menu.classList.toggle('active');
burger.classList.toggle('active');
body.classList.toggle('lock');
})

/*SLIDER*/

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nexBtn')];
const preBtn = [...document.querySelectorAll('.preBtn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', (e) => {
        e.preventDefault();
        item.scrollLeft += containerWidth;
    })


    preBtn[i].addEventListener('click',(e) => {
        e.preventDefault();
        item.scrollLeft -= containerWidth;
    })
})