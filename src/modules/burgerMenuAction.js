const burgerMenuAction = () => {
    const menu = document.querySelector('.popup-menu'),
        openBTN = document.querySelector('.menu-button>img');

    openBTN.addEventListener('click', () =>{
        menu.style.display = 'flex';
    });

    menu.addEventListener('click', evt =>{
        let target = evt.target;
        if(target.matches('.close-menu-btn>img')) menu.style.display = 'none';
        if(target.matches('.scroll>a')) menu.style.display = 'none';
    });
};

export default burgerMenuAction;