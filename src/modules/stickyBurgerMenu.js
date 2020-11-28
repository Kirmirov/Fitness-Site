const stickyBurgerMenu = () => {
    const burgerMenu = document.querySelector('.top-menu'),
            elementOnTop = document.querySelector('.head'),
            maxClientWidth = 769;

    window.addEventListener('scroll', () => {
        if(document.body.clientWidth < maxClientWidth){
            burgerMenu.style.position = (pageYOffset > elementOnTop.clientHeight) ? 'fixed' : 'initial';
        }
    });

    window.addEventListener('resize', () => {
        if(document.body.clientWidth > maxClientWidth && getComputedStyle(burgerMenu).position === 'fixed'){
            burgerMenu.style.position = 'initial';
        }
    });
};

export default stickyBurgerMenu;