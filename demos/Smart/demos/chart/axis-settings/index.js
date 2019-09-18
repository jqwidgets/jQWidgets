const data = [
    { year: 2004, price: 0.1437 },
    { year: 2005, price: 0.1470 },
    { year: 2006, price: 0.1510 },
    { year: 2007, price: 0.1605 },
    { year: 2008, price: 0.1647 },
    { year: 2009, price: 0.1736 },
    { year: 2010, price: 0.1766 },
    { year: 2011, price: 0.1902 },
    { year: 2012, price: 0.1978 },
    { year: 2017, price: 0.2113 },
    { year: 2018, price: 0.2178 }
];

Smart('#chart', class {
    get properties() {
        return {
            renderEngine: 'HTML5',
            caption: 'Electricity prices in Europe between 2004 and 2018',
            description: 'dataSource: Eurostat',
            showLegend: true,
            padding: { left: 5, top: 5, right: 15, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            dataSource: data,
            xAxis:
                {
                    padding: { top: 0, bottom: 0 },
                    labels: { angle: 0 },
                    dataField: 'year',
                    displayText: 'Year',
                    valuesOnTicks: false,
                    gridLines: { color: '#CDCDCD' },
                    tickMarks: { color: '#CDCDCD' }
                },
            colorScheme: 'scheme32',
            valueAxis:
                        {
                            position: 'right',
                            padding: { left: 0, right: 0 },
                            title: { text: '<br><br>Price EUR / kWh' },
                            labels: {
                                visible: true,
                                angle: 0,
                                formatSettings: { decimalPlaces: 4, sufix: ' €' }
                            },
                            tickMarks: {
                                visible: true,
                                //dashStyle: '2,2',
                                color: '#CDCDCD',
                                size: 5
                            },
                            gridLines: {
                                visible: true,
                                color: '#CDCDCD'
                                //dashStyle: '2,2' 
                            },
                            alternatingBackgroundColor: '#EFEFEF',
                            alternatingBackgroundColor2: '#CECECE',
                            alternatingBackgroundOpacity: 0.2
                        },
            seriesGroups:
            [
                {
                    type: 'stepline',
                    series: [
                        { formatSettings: { decimalPlaces: 4 }, dataField: 'price', displayText: 'Price per kWh', showLabels: true, symbolType: 'circle' }
                    ]
                }
            ]
        }
    }
});

window.onload = function () {
    const chart = document.getElementById('chart');

    document.getElementById('sliderValueAxisLeftPadding').addEventListener('change', function (event) {
        chart.valueAxis.padding.left = parseFloat(event.detail.value);
    });
    document.getElementById('sliderValueAxisRightPadding').addEventListener('change', function (event) {
        chart.valueAxis.padding.right = parseFloat(event.detail.value);
    });
    document.getElementById('sliderValueAxisAngle').addEventListener('change', function (event) {
        chart.valueAxis.labels.angle = parseFloat(event.detail.value);
    });
    document.getElementById('sliderXAxisTopPadding').addEventListener('change', function (event) {
        chart.xAxis.padding.top = parseFloat(event.detail.value);
    });
    document.getElementById('sliderXAxisBottomPadding').addEventListener('change', function (event) {
        chart.xAxis.padding.bottom = parseFloat(event.detail.value);
    });
    document.getElementById('sliderXAxisAngle').addEventListener('change', function (event) {
        chart.xAxis.labels.angle = parseFloat(event.detail.value);
    });
    document.getElementById('btnLeft').addEventListener('change', function (event) {
        if (event.detail.value) {
            chart.valueAxis.position = 'left';
        }
    });
    document.getElementById('btnRight').addEventListener('change', function (event) {
        if (event.detail.value) {
            chart.valueAxis.position = 'right';
        }
    });
    document.getElementById('btnTop').addEventListener('change', function (event) {
        if (event.detail.value) {
            chart.xAxis.position = 'top';
        }
    });
    document.getElementById('btnBottom').addEventListener('change', function (event) {
        if (event.detail.value) {
            chart.xAxis.position = 'bottom';
        }
    });
    document.getElementById('btnValueAxisFlip').addEventListener('change', function (event) {
        chart.valueAxis.flip = event.detail.value;
    });
    document.getElementById('btnXAxisFlip').addEventListener('change', function (event) {
        chart.xAxis.flip = event.detail.value;
    });
}
