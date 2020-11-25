import animate from './animatePattern';

const gymChoice = () => {
    const clubsList = document.querySelector('.clubs-list'),
            list = clubsList.querySelector('ul');

    clubsList.addEventListener('click', () => {
        list.style.display = (getComputedStyle(list).display === 'block') ? 'none' : 'block';
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
};

export default gymChoice;