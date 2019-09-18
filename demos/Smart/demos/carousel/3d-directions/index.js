window.onload = function () {
    const basePath = '../../images/',
        carousels = document.getElementsByTagName('smart-carousel');

    function generateDataSource(items) {
        let dataSource = [];

        for (let i = 0; i < items; i++) {
            const item = { image: `${basePath}carousel-square-${i + 1}.jpg` };
            dataSource.push(item);
        }

        return dataSource;
    }

    for (let i = 0; i < carousels.length; i++) {
        carousels[i].dataSource = generateDataSource(6);
    }
}