window.onload = function () {
    const basePath = '../../images/',
        carousel = document.getElementById('carousel');

    carousel.dataSource = generateDataSource(7);

    function generateDataSource(items) {
        let dataSource = [];

        for (let i = 0; i < items; i++) {
            const item = { image: `${basePath}carousel-square-${i + 1}.jpg` };
            dataSource.push(item);
        }

        return dataSource;
    }
}