const sampleData = [
    { City: 'London', SalesCountJan: 210, SalesRevenueJan: 123 },
    { City: 'Madrid', SalesCountJan: 190, SalesRevenueJan: 114 },
    { City: 'Munich', SalesCountJan: 201, SalesRevenueJan: 112 },
    { City: 'Amsterdam', SalesCountJan: 110, SalesRevenueJan: 98 },
    { City: 'Paris', SalesCountJan: 105, SalesRevenueJan: 93 },
    { City: 'Prague', SalesCountJan: 54, SalesRevenueJan: 100 }
];

Smart('#chart', class {
    get properties() {
        return {
            caption: "Sales volume and revenue by city",
            description: "(revenue in thousands)",
            animation: 'none',
            showLegend: true,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
            colorScheme: 'scheme01',
            dataSource: sampleData,
            xAxis:
            {
                dataField: 'City',
                valuesOnTicks: true,
                labels: { autoRotate: true }
            },
            valueAxis:
            {
                labels: {
                    formatSettings: { decimalPlaces: 0 },
                    autoRotate: true
                }
            },
            seriesGroups:
                [
                    {
                        polar: true,
                        endAngle: 270,
                        radius: 120,
                        type: 'line',
                        series: [
                            { dataField: 'SalesCountJan', displayText: 'Sales count', opacity: 0.7, lineWidth: 1, radius: 2, symbolType: 'circle' },
                            { dataField: 'SalesRevenueJan', displayText: 'Revenue', opacity: 0.7, lineWidth: 1, radius: 2, symbolType: 'square' }
                        ]
                    }
                ]
        };
    }
});

window.onload = function () {
    const chart = document.getElementById('chart');

    document.getElementById('sliderStartAngle').addEventListener('change', function (event) {
        const value = parseFloat(event.detail.value);

        chart.seriesGroups[0].startAngle = value;
        chart.update();
    });

    document.getElementById('sliderEndAngle').addEventListener('change', function (event) {
        const value = parseFloat(event.detail.value);

        chart.seriesGroups[0].endAngle = value;
        chart.update();
    });

    document.getElementById('sliderRotate').addEventListener('change', function (event) {
        const value = parseFloat(event.detail.value);
        let startAngle = chart.seriesGroups[0].startAngle,
            endAngle = chart.seriesGroups[0].endAngle;

        if (isNaN(endAngle)) {
            endAngle = 360;
        }

        if (isNaN(startAngle)) {
            startAngle = 0;
        }

        const diff = endAngle - startAngle;

        chart.seriesGroups[0].startAngle = value;
        chart.seriesGroups[0].endAngle = value + diff;
        chart.update();
    });

    document.getElementById('sliderRadius').addEventListener('change', function (event) {
        const value = parseFloat(event.detail.value);

        chart.seriesGroups[0].radius = value;
        chart.update();
    });

    document.getElementById('checkBoxAutoRotateLabels').addEventListener('change', function (event) {
        chart.xAxis.labels.autoRotate = event.detail.value;
        chart.valueAxis.labels.autoRotate = event.detail.value;
    });

    document.getElementById('checkBoxTicksBetween').addEventListener('change', function (event) {
        chart.xAxis.valuesOnTicks = !event.detail.value;
    });
};
