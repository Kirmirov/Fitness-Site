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

//headerChoice dropdown menu
gymChoice();

//interaction with header's modal form
openModalWindow('free_visit_form');
openModalWindow('callback_form');
openModalWindow('gift');

//header slider auto

const headerSlider = () => {
    const sliderWrap = document.querySelector('.main-slider'),
        sliderList = sliderWrap.querySelectorAll('.slide');
        console.log(sliderList);
    
    const list = [...sliderList];
        console.log(list);
    // let slideCount = 0;
    // const changeSlide = () => {
    //     if(slideCount < sliderList.length) slideCount = 0;
    //         animate ({
    //             duration: 1000,
    //             timing(timeFraction) {
    //                 return timeFraction;
    //             },
    //             draw(progress) {
    //                 [...sliderList][slideCount].style.opacity = 1 - progress;
    //                 [...sliderList][slideCount+1].style.opacity = progress * 1;
    //             }
    //         });
    //     slideCount++;
    // };
    // setInterval(changeSlide, 2000);
};

headerSlider();

//animation pattern