import smoothScroll from './smoothScroll';

const menuScroll = (menuSelector) => {
    const topMenu = document.querySelector(menuSelector);
    topMenu.addEventListener('click', evt => {
        let target = evt.target;
        if(target.matches('a')){
            smoothScroll(evt, target);
        } 
    });
};

export default menuScroll;