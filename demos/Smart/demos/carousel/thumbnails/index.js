window.onload = function () {
    const basePath = '../../images/',
        carousel = document.getElementById('carousel');

    carousel.dataSource = generateDataSource(7);

    function generateDataSource(items) {
        let dataSource = Array(items).fill({});

        dataSource.forEach((element, index) => dataSource[index] = {
            image: `${basePath}carousel-large-${index + 1}.jpg`,
            thumb: `${basePath}carousel-xs-${index + 1}.jpg`
        });
        return dataSource;
    }
}