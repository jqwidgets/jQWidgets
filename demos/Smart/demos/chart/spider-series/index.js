const sampleData = [
    {
        type: 'Organic Search',
        month1: 1725090,
        month2: 3136190
    },
    {
        type: 'Paid Search',
        month1: 925090,
        month2: 2136190
    },
    {
        type: 'Direct',
        month1: 425090,
        month2: 936190
    },
    {
        type: 'Referral',
        month1: 1250900,
        month2: 2536190
    },
    {
        type: 'Twitter',
        month1: 350900,
        month2: 681900
    },
    {
        type: 'Facebook',
        month1: 381900,
        month2: 831500
    }
];

Smart('#chart', class {
    get properties() {
        return {
            caption: 'Website audience acquision by source',
            description: 'Month over month comparison',
            animation: 'none',
            showLegend: true,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
            dataSource: sampleData,
            colorScheme: 'scheme05',
            xAxis:
            {
                dataField: 'type',
                displayText: 'Traffic source',
                valuesOnTicks: true,
                labels: { autoRotate: false }
            },
            valueAxis:
            {
                unitInterval: 1000000,
                labels: {
                    formatSettings: { decimalPlaces: 0 },
                    formatFunction: function (value, itemIndex, series, group) {
                        return Math.round(value / 1000) + ' K';
                    }
                }
            },
            seriesGroups:
                [
                    {
                        spider: true,
                        startAngle: 0,
                        endAngle: 360,
                        radius: 120,
                        type: 'spline',
                        series: [
                            { dataField: 'month1', displayText: 'January 2018', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
                            { dataField: 'month2', displayText: 'February 2018', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'square' }
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
        chart.seriesGroups[0].endAngle = value + 360;
        chart.update();
    });

    document.getElementById('sliderRadius').addEventListener('change', function (event) {
        const value = parseFloat(event.detail.value);

        chart.seriesGroups[0].radius = value;
        chart.update();
    });

    document.getElementById('dropDownColors').addEventListener('change', function () {
        chart.colorScheme = this.selectedValues[0];
    });

    document.getElementById('dropDownSeries').addEventListener('change', function () {
        chart.seriesGroups[0].type = this.selectedValues[0];
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
