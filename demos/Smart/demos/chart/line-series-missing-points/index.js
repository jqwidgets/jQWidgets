const sampleData = [29, undefined, 10, 15, 10, undefined, NaN, 30, 25, undefined, 33, 19, 11];

Smart('#chart', class {
    get properties() {
        return {
            animation: 'none',
            caption: 'Line serie with missing points',
            description: 'Sample line serie with missing and invalid values',
            showLegend: true,
            padding: { left: 5, top: 5, right: 15, bottom: 5 },
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            dataSource: sampleData,
            xAxis:
            {
                text: 'x',
                valuesOnTicks: false
            },
            colorScheme: 'scheme31',
            seriesGroups:
                [
                    {
                        type: 'line',
                        toolTipFormatFunction: function (value, itemIndex) {
                            return '<div style="text-align:left"><b>Index:</b> ' +
                                itemIndex + '<br /><b>Value:</b> ' +
                                value + '<br /></div>';
                        },
                        valueAxis:
                        {
                            title: { text: 'Value<br>' }
                        },
                        series:
                            [
                                { emptyPointsDisplay: 'skip', displayText: 'Value', lineWidth: 2, symbolSize: 8, symbolType: 'circle' }
                            ]
                    }
                ]
        };
    }
});

window.onload = function () {
    const chart = document.getElementById('chart');

    document.getElementById('dropDownMissingPointsMode').addEventListener('change', function (event) {
        chart.seriesGroups[0].series[0].emptyPointsDisplay = event.detail.value;
        chart.update();
    });
};
