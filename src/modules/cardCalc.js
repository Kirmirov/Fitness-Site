import animate from './animatePattern';

const cardCalc = caclSelector => {
    const cardOrder = document.querySelector(caclSelector),
            promoField = cardOrder.querySelector('input[name=promo-name]');

    const mozGym = {
        1: '1990',
        6: '9900',
        9: '13900',
        12: '19900'
    },
    schelGym = {
        1:'2990',
        6: '14990',
        9: '21990',
        12: '24990'
    },
    promoWord = 'ТЕЛО2020',
    discount = 30;

    let timeOfCard = 1,
        gym = mozGym,
        promo = false;

    const calculate = () => {
        const priceValue = document.getElementById('price-total');
        let total = promo ? gym[timeOfCard] - ((gym[timeOfCard] * discount) / 100) : gym[timeOfCard];
        animate ({
            duration: 400,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                priceValue.textContent = Math.floor(progress * total);
            }
        });
    };
    calculate();
    cardOrder.addEventListener('click', evt => {
        let target = evt.target;
        if(target.matches('input[name=card-type]')){
            timeOfCard = target.value;
            calculate();
        } 
        if(target.matches('input[name=club-name]')){
            gym = target.value === 'schelkovo' ? schelGym : mozGym;
            calculate();
        }
    });
    promoField.addEventListener('input', () => {
        if(promoField.value.match(promoWord)) {
            promo = true;
            calculate();
        }
    });
};

export default cardCalc;