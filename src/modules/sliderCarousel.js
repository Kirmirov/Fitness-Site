class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        slidersToShow = 3,
        responsive = []
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidersToShow = slidersToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / slidersToShow)
        };
        this.responsive = responsive;
    }

    init() {
        this.addGloClass();
        this.addStyle();

        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        if (this.responsive) {
            this.responseInit();
        }

    }

    addGloClass() {
        this.main.classList.add('single-slider');
        this.wrap.classList.add('single-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('single-slider__item');
        }
    }

    addStyle() {
        let style = document.getElementById('sliderCarousel-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        style.textContent = `
            .single-slider {
                overflow: hidden !important;
                position: relative !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
            }
            .single-slider__wrap {
                padding-left: 0 !important;
                padding-right: 0 !important;
                transition: transform 0.5s !important;
                will-change: transfrom !important;
            }
            .single-slider__item {
                align-items: center !important;
                justify-content: center !important;
                margin-right: 0 !important;
                margin-left: 0 !important;
                flex: 0 0 ${this.options.widthSlide}% !important;
            }
        `;
        document.head.append(style);
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.slides.length - this.slidersToShow;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }

    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.slides.length - this.slidersToShow) {
            ++this.options.position;
            if (this.options.position > this.slides.length - this.slidersToShow) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'single-slider__prev';
        this.next.className = 'single-slider__next';

        this.main.insertAdjacentElement('afterbegin',this.next);
        this.main.insertAdjacentElement('afterbegin',this.prev);

        const style = document.createElement('style');
        style.textContent = `
            .single-slider__prev,
            .single-slider__next {
                position: absolute;
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }
            .single-slider__next {
                background: url(../images/arrow-right.png) no-repeat center/10px 18px;
                background-color: #ffd11a;
                border: none;
                position: absolute;
                top: calc(25%);
                z-index: 1;
                right: 0;
            }
            .single-slider__prev {
                position: absolute;
                background: url(../images/arrow-left.png) no-repeat center/10px 18px;
                background-color: #ffd11a;
                border: none;
                top: calc(25%);
                z-index: 1;
                left: 0;
            }
            `;
        document.head.append(style);
    }

    responseInit() {
        const slidersToShowDefault = this.slidersToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidersToShow = this.responsive[i].slidersToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidersToShow);
                        this.addStyle();
                    }
                }
            } else {
                this.slidersToShow = slidersToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidersToShow);
                this.addStyle();
            }
        };

        checkResponse();

        window.addEventListener('resize', checkResponse);
    }
};

const carousel = new SliderCarousel({
    main: '.services-wrapper',
    wrap: '.services-slider',
    slidersToShow: 5,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slidersToShow: 3
    },
    {
        breakpoint: 768,
        slidersToShow: 2
    },
    {
        breakpoint: 576,
        slidersToShow: 1
    }
    ]
});

export default carousel;