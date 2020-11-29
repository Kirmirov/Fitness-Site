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
import sendForm from './modules/sendForm';
import carousel from './modules/sliderCarousel';

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

//send all forms by ajax-json
sendForm('form2');
sendForm('form1');
sendForm('banner-form');
sendForm('card_order');
sendForm('footer_form');

//carousel slider
carousel.init();