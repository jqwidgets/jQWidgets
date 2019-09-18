const sampleData = [
    { Position: 0, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 30, Serie5: 10, Serie6: 5 },
    { Position: 1, Serie1: 25, Serie2: 25, Serie3: 5, Serie4: 20, Serie5: 20, Serie6: 10 },
    { Position: 3, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 10, Serie5: 20, Serie6: 15 },
    { Position: 6, Serie1: 35, Serie2: 25, Serie3: 45, Serie4: 5, Serie5: 30, Serie6: 20 },
    { Position: 7, Serie1: 5, Serie2: 20, Serie3: 25, Serie4: 20, Serie5: 40, Serie6: 15 },
    { Position: 9, Serie1: 30, Serie2: 10, Serie3: 30, Serie4: 10, Serie5: 5, Serie6: 20 },
    { Position: 10, Serie1: 60, Serie2: 45, Serie3: 10, Serie4: 20, Serie5: 10, Serie6: 15 }
];

Smart('#chart', class {
    get properties() {
        return {
            animation: 'none',
            caption: 'Columns spacing and padding',
            description: 'Example with two series groups and three series in each group',
            showLegend: true,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            dataSource: sampleData,
            columnSeriesOverlap: true, // change to true if you want the columns in the two series groups to overlap
            xAxis:
            {
                dataField: 'Position',
                tickMarks: {
                    visible: true,
                    interval: 1,
                    color: '#BCBCBC'
                },
                gridLines: {
                    visible: true,
                    interval: 1,
                    color: '#BCBCBC'
                },
                flip: false,
                valuesOnTicks: false
            },
            valueAxis:
            {
                unitInterval: 10,
                title: { text: 'Value' },
                tickMarks: { color: '#BCBCBC' },
                gridLines: { color: '#BCBCBC' },
                labels: {
                    horizontalAlignment: 'right'
                }
            },
            colorScheme: 'scheme04',
            seriesGroups: [
                {
                    type: 'stackedcolumn',
                    columnsGapPercent: 25,
                    seriesGapPercent: 10,
                    columnsMaxWidth: 40,
                    columnsMinWidth: 1,
                    skipOverlappingPoints: false, // change to true if you want to prevent adjacent columns overlap
                    series: [
                        { dataField: 'Serie1', displayText: 'Serie1' },
                        { dataField: 'Serie2', displayText: 'Serie2' },
                        { dataField: 'Serie3', displayText: 'Serie3' }
                    ]
                },
                {
                    type: 'column',
                    greyScale: true,
                    columnsGapPercent: 25,
                    seriesGapPercent: 10,
                    columnsMaxWidth: 40,
                    columnsMinWidth: 1,
                    skipOverlappingPoints: false, // change to true if you want to prevent adjacent columns overlap
                    series: [
                        { dataField: 'Serie4', displayText: 'Serie4' },
                        { dataField: 'Serie5', displayText: 'Serie5' },
                        { dataField: 'Serie6', displayText: 'Serie6' }
                    ]
                }
            ]
        }
    }
});

window.onload = function () {
    const chart = document.getElementById('chart'),
        btnStackedSeriesGroup1 = document.getElementById('btnStackedSeriesGroup1'),
        btnStackedSeriesGroup2 = document.getElementById('btnStackedSeriesGroup2');

    btnStackedSeriesGroup1.addEventListener('change', function () {
        chart.seriesGroups[0].type = btnStackedSeriesGroup1.checked ? 'stackedcolumn' : 'column';
    });
    btnStackedSeriesGroup2.addEventListener('change', function () {
        chart.seriesGroups[1].type = btnStackedSeriesGroup2.checked ? 'stackedcolumn' : 'column';
    });
    // columns spacing
    document.getElementById('sliderColumnsGapPercentGroup1').addEventListener('change', function (event) {
        chart.seriesGroups[0].columnsGapPercent = event.detail.value;
    });
    document.getElementById('sliderColumnsGapPercentGroup2').addEventListener('change', function (event) {
        chart.seriesGroups[1].columnsGapPercent = event.detail.value;
    });
    // series spacing
    document.getElementById('sliderSeriesGapGroup1').addEventListener('change', function (event) {
        chart.seriesGroups[0].seriesGapPercent = event.detail.value;
    });
    document.getElementById('sliderSeriesGapGroup2').addEventListener('change', function (event) {
        chart.seriesGroups[1].seriesGapPercent = event.detail.value;
    });
    // min column width
    document.getElementById('sliderMinWidthGroup1').addEventListener('change', function (event) {
        chart.seriesGroups[0].columnsMinWidth = event.detail.value;
    });
    document.getElementById('sliderMinWidthGroup2').addEventListener('change', function (event) {
        chart.seriesGroups[1].columnsMinWidth = event.detail.value;
    });
    // max column width
    document.getElementById('sliderMaxWidthGroup1').addEventListener('change', function (event) {
        chart.seriesGroups[0].columnsMaxWidth = event.detail.value;
    });
    document.getElementById('sliderMaxWidthGroup2').addEventListener('change', function (event) {
        chart.seriesGroups[1].columnsMaxWidth = event.detail.value;
    });
}
