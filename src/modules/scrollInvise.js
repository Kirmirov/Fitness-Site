const scrollInvise = scrollSelect => {
    const header = document.querySelector('header'),
        scroll = document.querySelector(scrollSelect);   
        scroll.style.display = 'none';

    window.addEventListener('scroll', () => {
        if(pageYOffset >= header.clientHeight) scroll.style.display = 'block';
        else scroll.style.display = 'none';
    });
};

export default scrollInvise;