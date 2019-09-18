const sampleData = [
    { Day: 'Monday', 'Oklahoma City': 37, Sofia: 8, Bruges: 18 },
    { Day: 'Tuesday', 'Oklahoma City': 29, Sofia: 11, Bruges: 16 },
    { Day: 'Wednesday', 'Oklahoma City': 27, Sofia: 8, Bruges: 29 },
    { Day: 'Thursday', 'Oklahoma City': 37, Sofia: 14, Bruges: 29 },
    { Day: 'Friday', 'Oklahoma City': 37, Sofia: 11, Bruges: 27 },
    { Day: 'Saturday', 'Oklahoma City': 39, Sofia: 6, Bruges: 24 },
    { Day: 'Sunday', 'Oklahoma City': 42, Sofia: 8, Bruges: 21 }
];

Smart('#chart', class {
    get properties() {
        return {
            borderLineColor: '#808080',
            backgroundImage: '../../images/chart-custom-element-background.png',
            caption: 'Wind Speed',
            description: 'around the world',
            showLegend: true,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            dataSource: sampleData,
            xAxis:
            {
                dataField: 'Day',
                gridLines: {
                    visible: true,
                    color: '#404040',
                    step: 1
                },
                tickMarks: {
                    visible: true,
                    color: '#000000',
                    step: 2
                },
                valuesOnTicks: false
            },
            valueAxis:
            {
                description: 'Time in minutes',

                gridLines: {
                    visible: true,
                    color: '#404040',
                    step: 2
                },
                tickMarks: {
                    visible: true,
                    color: '#000000',
                    step: 1
                },
                axisSize: 'auto',
                tickMarksColor: '#888888'
            },
            seriesGroups:
                [
                    {
                        type: 'column',
                        useGradientColors: true,
                        series: [
                            { dataField: 'Sofia', fillColor: '#048BA8' },
                            { dataField: 'Bruges', fillColor: '#16DB93' }
                        ]
                    },
                    {
                        type: 'stackedline',
                        series: [
                            { dataField: 'Oklahoma City', symbolType: 'circle', symbolSize: 10, fillColorSymbol: '#3587CE', fillColor: '#3587CE', lineColor: '#0459A8' }
                        ]
                    }
                ]
        }
    }
});
