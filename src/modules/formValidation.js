import maskPhone from './maskPhone';

const formValidation = (formID) => {
    const form = document.getElementById(formID);
    const phoneValidation = (elem) => {
        maskPhone(elem);
        elem.addEventListener('focusout', () => {
            if (elem.value.length < 18) elem.value = '';
        });
    };
    form.forEach((elem) => {
        if(elem.tagName === 'INPUT'){
            switch(elem.name){
                case 'name': elem.addEventListener('input',
                    () => elem.value = elem.value.replace(/[^\p{Script=Cyrillic}\s]/gu,''));
                    break;
                case 'phone': phoneValidation(elem);
                    break;
            }
        }
    });
};

export default formValidation;