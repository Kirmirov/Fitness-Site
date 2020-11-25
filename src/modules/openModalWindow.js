import animate from './animatePattern';

const openModalWindow = (formID) => {
    const modalForm = document.getElementById(formID),
        openForm = document.querySelector(`[data-popup="#${formID}"]`),
        closeForm = modalForm.querySelector('.close-form'),
        closeGift = modalForm.querySelector('.close-btn');

    openForm.addEventListener('click', () => {
        modalForm.style.display = 'block';
        animate ({
            duration: 400,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modalForm.style.opacity = progress * 1;
            }
        });
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

export default openModalWindow;