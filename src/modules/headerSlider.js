import animate from './animatePattern';

const headerSlider = () => {
    const sliderWrap = document.querySelector('.main-slider'),
        sliderList = sliderWrap.querySelectorAll('.slide');

    let slideCount = 0;
    const changeSlide = () => { 
        const vanish = () => {
            return new Promise ((resolve, reject) => {
                animate ({
                    duration: 1900,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        [...sliderList][slideCount].style.opacity = 1 - progress;
                    }
                });
                if([...sliderList][slideCount].style.opacity == 0) resolve();
            });
        };
        const appearance = () => {
            return new Promise ((resolve, reject) => {
                animate ({
                    duration: 2000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        [...sliderList][slideCount].style.opacity = progress * 1;
                    }
                });
                if([...sliderList][slideCount].style.opacity == 1) resolve();
            });
        };

        vanish()
        .then(() => {
            [...sliderList][slideCount].style.display = 'none';
            slideCount++;
            if(slideCount >= sliderList.length) slideCount = 0;
            [...sliderList][slideCount].style.display = 'flex';
        })
        .then(appearance);
    };
    setInterval(changeSlide, 2000);
};

export default headerSlider;