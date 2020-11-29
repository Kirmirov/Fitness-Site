import animate from './animatePattern';

const headerSlider = () => {
    const sliderWrap = document.querySelector('.main-slider'),
        slideList = sliderWrap.querySelectorAll('.slide');

    let slideCount = 0;
    const changeSlide = () => { 
        const vanish = () => {
            return new Promise ((resolve, reject) => {
                animate ({
                    duration: 2950,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        slideList[slideCount].style.opacity = 1 - progress;
                    }
                });
                if(slideList[slideCount].style.opacity == 0) resolve();
            });
        };
        const appearance = () => {
            return new Promise ((resolve, reject) => {
                animate ({
                    duration: 3000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        slideList[slideCount].style.opacity = progress * 1;
                    }
                });
                if(slideList[slideCount].style.opacity == 1) resolve();
            });
        };

        vanish()
        .then(() => {
            slideList[slideCount].style.display = 'none';
            slideCount++;
            if(slideCount >= slideList.length) slideCount = 0;
            slideList[slideCount].style.display = 'flex';
        })
        .then(appearance);
    };
    changeSlide();
    setInterval(changeSlide, 3000);
};

export default headerSlider;