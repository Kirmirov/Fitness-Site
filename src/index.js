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

//headerChoice dropdown menu
gymChoice();

//interaction with header's modal form
openModalWindow('free_visit_form');
openModalWindow('callback_form');
openModalWindow('gift');

//header slider auto

headerSlider();

//animation pattern