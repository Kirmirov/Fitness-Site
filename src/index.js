import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);
import 'es6-promise';
import 'fetch-polyfill';
import 'formdata-polyfill';
import "regenerator-runtime/runtime";
import 'core-js';
import 'url-polyfill';
import 'element-remove';
import 'dom-node-polyfills';
import "scroll-behavior-polyfill";
import 'whatwg-fetch';

import gymChoice from './modules/gymChoice';
import modalWindowAction from './modules/modalWindowAction';
import headerSlider from './modules/headerSlider';
import addScrollTo from './modules/addScrollTo';
import menuScroll from './modules/menuScroll';
import formValidation from './modules/formValidation';
import cardCalc from './modules/cardCalc';
import scrollInvise from './modules/scrollInvise';
import gallerySlider from './modules/gallerySlider';
import stickyBurgerMenu from './modules/stickyBurgerMenu';
import burgerMenuAction from './modules/burgerMenuAction';

//headerChoice dropdown menu
gymChoice();

//interaction with header's modal form
modalWindowAction('free_visit_form');
modalWindowAction('callback_form');
if(document.getElementById('gift') !== null) modalWindowAction('gift');


//header slider auto
headerSlider();

// validations for forms
formValidation('form1');
formValidation('form2');
formValidation('banner-form');
formValidation('card_order');
formValidation('footer_form');

//scroll up
addScrollTo('a[href*="up"]');

//menu scroll
menuScroll('.top-menu');

//card calculator
if(document.querySelector('.card-calc') !== null) cardCalc('.card-calc');

//scroll invise
scrollInvise('a[href*="up"]');

//slider section gallery
gallerySlider();

//sticky burger-menu when scroll
stickyBurgerMenu();

//open, close and scroll burger menu
burgerMenuAction();

// const sendSimpleForm = (formSelector) => {
//     const erroMessage = 'Что то пошло не так...',
//         successMesage = 'Спасибо! Мы скоро свяжемся с Вами!';
    
//     const form = document.getElementById(formSelector);
//     const statusMessage = document.createElement('div');
//     statusMessage.style.cssText = 'font-size: 2rem;';
//     statusMessage.style.color = '#fff';
//     form.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//         form.appendChild(statusMessage);
//         getFormValue(form)
//         .then(body => postData(body))
//         .then((response) => {
//             if(response.status !== 200) throw new Error('status is not 200')
//             statusMessage.textContent = successMesage;
//             form.reset();
//             setTimeout(() => {
//                 statusMessage.textContent = '';
//             }, 5000);
//         })
//         .catch(() => {
//             statusMessage.textContent = erroMessage;
//             form.reset();
//             setTimeout(() => {
//                 statusMessage.textContent = '';
//             }, 5000);
//         });
//     });


//     const getFormValue = form => {
//         return new Promise ((resolve, reject) => {
//             const formData = new FormData(form);
//             let body = {};
//             for (let val of formData.entries()){
//                 body[val[0]] = val[1];
//             }
//             if(body.length !== 0) resolve(body);
//             else reject('Form is empty');
//         });
//     };
//     const postData = (body) => {
//         return fetch('./server.php', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(body)
//         });
//     };
// };

// sendSimpleForm('form1');

