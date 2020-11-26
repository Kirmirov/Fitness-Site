//smooth scroll pattern
const smoothScroll = (evt, elem) => {
    evt.preventDefault();
    const blockID = elem.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

export default smoothScroll;