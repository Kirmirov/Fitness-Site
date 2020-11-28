import animate from './animatePattern';

const gymChoice = () => {
    const clubsList = document.querySelector('.clubs-list'),
            list = clubsList.querySelector('ul');

    clubsList.addEventListener('click', () => {
        list.style.display = 'block';
        if(getComputedStyle(list).display === 'block') return;
        animate ({
            duration: 400,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                list.style.opacity = progress * 1;
            }
        });
    });
    
    document.addEventListener('click', evt => {
        if(evt.target.closest('.club-select') === null) list.style.display = 'none';
    });
};

export default gymChoice;