import animate from './animatePattern';

const headerSlider = () => {
    const sliderWrap = document.querySelector('.main-slider'),
        slideList = sliderWrap.querySelectorAll('.slide');
    
        const vanish = () => {
            return new Promise ((resolve, reject) => {
                animate ({
                    duration: 2900,
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
        const changeSlide = () => {
            slideList[slideCount].style.display = 'none';
            slideCount++;
            if(slideCount >= slideList.length) slideCount = 0;
            slideList[slideCount].style.display = 'flex';
        };


    let slideCount = 0;
    const autoPlay = () => { 
        vanish()
        .then(changeSlide)
        .then(appearance);
    };
    setInterval(autoPlay, 3000);
};

export default headerSlider;