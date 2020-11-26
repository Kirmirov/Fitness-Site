import maskPhone from './maskPhone';

const formValidation = (formID) => {
    const form = document.getElementById(formID);
    [...form].forEach((elem) => {
        if(elem.tagName === 'INPUT'){
            switch(elem.name){
                case 'name': elem.addEventListener('input',
                    () => elem.value = elem.value.replace(/[^\p{Script=Cyrillic}\s]/gu,''));
                    break;
                case 'phone': maskPhone(elem);
                    break;
            }
        }
    });
};

export default formValidation;