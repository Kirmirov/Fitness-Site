import smoothScroll from './smoothScroll';

const addScrollTo = (elemSelector) => {
    const anchor = document.querySelector(elemSelector);
    anchor.addEventListener('click', evt => smoothScroll(evt, anchor));
};

export default addScrollTo;