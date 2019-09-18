window.onload = function () {
    const basePath = '../../images/',
        carousel = document.getElementById('carousel'),
        arrows = document.getElementById('arrows'),
        indicators = document.getElementById('indicators'),
        wheel = document.getElementById('wheel'),
        swipe = document.getElementById('swipe'),
        slideShow = document.getElementById('slideShow'),
        loop = document.getElementById('loop'),
        playButton = document.getElementById('playButton'),
        pauseButton = document.getElementById('pauseButton'),
        prevButton = document.getElementById('prevButton'),
        nextButton = document.getElementById('nextButton'),
        slideToButton = document.getElementById('slideToButton'),
        slideToValue = document.getElementById('slideToValue');

    carousel.dataSource = generateDataSource(6);

    function generateDataSource(items) {
        const dataSource = Array(items).fill({});

        dataSource.forEach((element, index) => dataSource[index] = {
            image: `${basePath}carousel-medium-${index + 1}.jpg`,
            label: 'Slide ' + index,
            content: 'Content ' + index
        });
        return dataSource;
    }

    arrows.addEventListener('change', () => carousel.hideArrows = !arrows.checked);
    indicators.addEventListener('change', () => carousel.hideIndicators = !indicators.checked);
    wheel.addEventListener('change', () => carousel.wheel = wheel.checked);
    swipe.addEventListener('change', () => carousel.swipe = swipe.checked);
    slideShow.addEventListener('change', () => carousel.slideShow = slideShow.checked);
    loop.addEventListener('change', () => carousel.loop = loop.checked);
    playButton.addEventListener('click', () => carousel.play());
    pauseButton.addEventListener('click', () => carousel.pause());
    prevButton.addEventListener('click', () => carousel.prev());
    nextButton.addEventListener('click', () => carousel.next());
    slideToButton.addEventListener('click', () => carousel.slideTo(parseInt(slideToValue.value) || 0));
}