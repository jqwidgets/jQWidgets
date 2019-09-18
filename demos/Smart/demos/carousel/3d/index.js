window.onload = function () {
    const basePath = '../../images/',
        carouselSquare = document.getElementById('carouselSquare'),
        carouselCircle = document.getElementById('carouselCircle');

    carouselSquare.dataSource = generateDataSource(7);
    carouselCircle.dataSource = generateDataSource(7);

    function generateDataSource(items) {
        let dataSource = Array(items).fill({});

        dataSource.forEach((element, index) => dataSource[index] = { image: `${basePath}carousel-square-${index + 1}.jpg` });
        return dataSource;
    }
}