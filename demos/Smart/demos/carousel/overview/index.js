window.onload = function () {
    const basePath = '../../images/',
        carousel = document.querySelector('smart-carousel');

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
}