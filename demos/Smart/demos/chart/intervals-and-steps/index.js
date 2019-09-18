const sampleData = [12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 5, 12, 11];

Smart('#chart', class {
    get properties() {
        return {
            animation: 'none',
            caption: 'smartChart unit interval and steps example',
            description: '',
            enableAnimations: false,
            showLegend: true,
            enableCrosshairs: false,
            padding: { left: 10, top: 5, right: 10, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            dataSource: sampleData,
            xAxis:
            {
                unitInterval: 1,
                gridLines: { step: 1 },
                tickMarks: { step: 1 },
                labels: { step: 2 }
            },
            valueAxis:
            {
                title: { text: 'Value<br>' },
                unitInterval: 5,
                gridLines: { step: 1 },
                tickMarks: { step: 1 },
                labels: { step: 1 },
                minValue: 0
            },
            colorScheme: 'scheme05',
            seriesGroups:
                [
                    {
                        type: 'line',
                        series:
                            [
                                { displayText: 'value', opacity: 0.7 }
                            ]
                    }
                ]
        };
    }
});

window.onload = function () {
    const chart = document.getElementById('chart');

    document.getElementById('inputXAxisLabelsStep').addEventListener('change', function (event) {
        const value = parseFloat(event.detail.value);

        chart.xAxis.labels.step = value;
    });

    document.getElementById('inputXAxisGridLinesStep').addEventListener('change', function (event) {
        const value = parseFloat(event.detail.value);

        chart.xAxis.gridLines.step = value;
    });

    document.getElementById('inputXAxisTickMarksStep').addEventListener('change', function (event) {
        const value = parseFloat(event.detail.value);

        chart.xAxis.tickMarks.step = value;
    });

    document.getElementById('inputXAxisUnitInterval').addEventListener('change', function (event) {
        const value = parseFloat(event.detail.value);

        chart.xAxis.unitInterval = value;
    });

    document.getElementById('btnValuesBetweenTicks').addEventListener('change', function (event) {
        chart.xAxis.valuesOnTicks = !event.detail.value;
    });

    document.getElementById('inputValueAxisLabelsStep').addEventListener('change', function (event) {
        const value = parseFloat(event.detail.value);

        chart.valueAxis.labels.step = value;
    });

    document.getElementById('inputValueAxisGridLinesStep').addEventListener('change', function (event) {
        const value = parseFloat(event.detail.value);

        chart.valueAxis.gridLines.step = value;
    });

    document.getElementById('inputValueAxisTickMarksStep').addEventListener('change', function (event) {
        const value = parseFloat(event.detail.value);

        chart.valueAxis.tickMarks.step = value;
    });

    document.getElementById('inputValueAxisUnitInterval').addEventListener('change', function (event) {
        const value = parseFloat(event.detail.value);

        chart.valueAxis.unitInterval = value;
    });

    document.getElementById('btnValueAxisValuesBetweenTicks').addEventListener('change', function (event) {
        chart.valueAxis.valuesOnTicks = !event.detail.value;
    });
};
