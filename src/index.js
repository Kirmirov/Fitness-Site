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
import openModalWindow from './modules/openModalWindow';
import headerSlider from './modules/headerSlider';
import addScrollTo from './modules/addScrollTo';
import menuScroll from './modules/menuScroll';
import formValidation from './modules/formValidation';
import cardCalc from './modules/cardCalc';
//headerChoice dropdown menu
gymChoice();

//interaction with header's modal form
openModalWindow('free_visit_form');
openModalWindow('callback_form');
if(document.getElementById('gift') !== null) openModalWindow('gift');


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
if(document.getElementById('.card-calc') !== null) cardCalc('.card-calc');
