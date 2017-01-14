/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createChart(selector) {
    // prepare the data
    var source = {
        datatype: "csv",
        datafields: [
            { name: 'Date' },
            { name: 'S&P 500' },
            { name: 'NASDAQ' }
        ],
        url: '../../sampledata/nasdaq_vs_sp500.txt'
    };
    var dataAdapter = new $.jqx.dataAdapter(source, {
        async: false,
        autoBind: true,
        loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); }
    });
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // initialization options - validated in typescript
    // jqwidgets.ChartOptions has generated TS definition
    var options = {
        title: "U.S. Stock Market Index Performance",
        description: "NASDAQ Composite compared to S&P 500",
        enableAnimations: true,
        showLegend: true,
        padding: { left: 10, top: 5, right: 10, bottom: 5 },
        titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
        source: dataAdapter,
        xAxis: {
            dataField: 'Date',
            formatFunction: function (value) {
                return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
            },
            type: 'date',
            baseUnit: 'month',
            valuesOnTicks: true,
            minValue: '01-01-2014',
            maxValue: '01-01-2015',
            tickMarks: {
                visible: true,
                interval: 1,
                color: '#BCBCBC'
            },
            unitInterval: 1,
            gridLines: {
                visible: true,
                interval: 3,
                color: '#BCBCBC'
            },
            labels: {
                angle: -45,
                rotationPoint: 'topright',
                offset: { x: 0, y: -25 }
            }
        },
        valueAxis: {
            visible: true,
            title: { text: 'Daily Closing Price<br>' },
            tickMarks: { color: '#BCBCBC' }
        },
        colorScheme: 'scheme04',
        seriesGroups: [
            {
                type: 'line',
                series: [
                    { dataField: 'S&P 500', displayText: 'S&P 500' },
                    { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                ]
            }
        ]
    };
    // creates an instance
    var myChart = jqwidgets.createInstance(selector, 'jqxChart', options);
}
//# sourceMappingURL=typescript-chart.js.map