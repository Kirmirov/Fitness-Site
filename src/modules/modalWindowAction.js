import animate from './animatePattern';

const modalWindowAction = formID => {
    const modalForm = document.getElementById(formID),
        openForm = document.querySelector(`[data-popup="#${formID}"]`),
        closeForm = modalForm.querySelector('.close-form'),
        formContent = modalForm.querySelector('.form-content'),
        closeGift = modalForm.querySelector('.close-btn');

    openForm.addEventListener('click', () => {
        modalForm.style.display = 'block';
        animate ({
            duration: 400,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                formContent.style.opacity = progress * 1;
            }
        });
        if(closeGift){
            const giftLabel = document.querySelector('.fixed-gift');
            giftLabel.style.display = 'none';
        }
    });

    closeForm.addEventListener('click', () => {
        modalForm.style.display = 'none';
    });

    modalForm.addEventListener('click', evt => {
        let target = evt.target;
        target = target.closest('.form-content');
        if(!target) modalForm.style.display = 'none';
    });

    if(closeGift){
        closeGift.addEventListener('click', () => {
            modalForm.style.display = 'none';
        });
    } 
};

export default modalWindowAction;