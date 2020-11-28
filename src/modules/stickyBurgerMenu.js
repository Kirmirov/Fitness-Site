const stickyBurgerMenu = () => {
    const burgerMenu = document.querySelector('.top-menu'),
            elementOnTop = document.querySelector('.head'),
            maxClientWidth = 769;

    window.addEventListener('scroll', () => {
        if(document.body.clientWidth > maxClientWidth) return;
        burgerMenu.style.position = (pageYOffset > elementOnTop.clientHeight) ? 'fixed' : 'initial';
    });
};

export default stickyBurgerMenu;