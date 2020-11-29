const gallerySlider = () => {
    const sliderWrap = document.querySelector('.gallery-slider'),
        slideList = sliderWrap.querySelectorAll('.slide');
//create slider structure//
    //added stiles for slides
    slideList.forEach((slide, index) => {
        slide.style.width = (index === 0) ? '' : '0';
        slide.style.height = (index === 0) ? '' : '0';
        slide.style.opacity = (index === 0) ? '1' : '0';
        slide.style.transition = 'opacity 0.3s ease-in-out';
    });
    //create new container for dots
    const dotBox = document.createElement('ul');
    dotBox.classList.add('dot-box');
    //put dots it ot container 
    slideList.forEach((e) => {
        dotBox.insertAdjacentHTML('beforeend', 
        `<li class="dot"></li>`);
    });
    //create buttons
    const nextBTN = document.createElement('button');
    nextBTN.classList.add('slider-btn-next');
    const prevBTN = document.createElement('button');
    prevBTN.classList.add('slider-btn-prev');
    //added elemenyts to slaider's wrapp
    sliderWrap.append(dotBox);
    sliderWrap.append(nextBTN);
    sliderWrap.append(prevBTN);
    //get DOM collections of dots
    const dotList = sliderWrap.querySelectorAll('.dot');
    //set styles for new elements
    sliderWrap.style.position = 'relative';
    dotBox.style.cssText = `
        display: flex;
        bottom: 30px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    `;
    dotList.forEach((dot, index) => {
        dot.style.cssText = `
        width: 25px;
        height: 5px;
        cursor: pointer;
        background-color: white;
        border-radius: 5px;
        margin-right: 8px;
        `;
        dot.style.backgroundColor = index === 0 ? '#ffd11a' : '#ffffff';
    });

    nextBTN.style.cssText = `
        position: absolute;
        cursor: pointer;
        top: 45%;
        right: 0;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
        background: url(images/arrow-right.png) no-repeat center #ffd11a;
    `;

    prevBTN.style.cssText = `
        position: absolute;
        cursor: pointer;
        top: 45%;
        left: 0;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
        background: url(images/arrow-left.png) no-repeat center #ffd11a;
    `;
    //slider
    let currentSlide = 0;
    
    const prevDot = (dot, index) => {
        dot[index].style.backgroundColor = '#ffffff';
    };

    const nextDot = (dot, index) => {
        dot[index].style.backgroundColor = '#ffd11a';
    };

    const prevSlide = (slide, index) => {
        slide[index].style.width = '0';
        slide[index].style.height = '0';
        slide[index].style.opacity = '0';
    };

    const nextSlide = (slide, index) => {
        slide[index].style.width = '100%';
        slide[index].style.height = '100%';
        slide[index].style.opacity = '1';
    };

    sliderWrap.addEventListener('click', evt => {
        let target = evt.target;

        if(!target.matches('.slider-btn-next, .slider-btn-prev, .dot')) return;

        prevSlide(slideList, currentSlide);
        prevDot(dotList, currentSlide);

        if(target.matches('.slider-btn-next')) currentSlide++;
        else if (target.matches('.slider-btn-prev')) currentSlide--;
        else if (target.matches('.dot')){
            dotList.forEach((dot, index) => {
                if(dot === target) currentSlide = index;
            });
        }

        if (currentSlide >= slideList.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slideList.length - 1;

        nextSlide(slideList, currentSlide);
        nextDot(dotList, currentSlide);
    });
};

export default gallerySlider;