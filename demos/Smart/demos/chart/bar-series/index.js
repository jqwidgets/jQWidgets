const sampleData = [
    { Continent: 'Asia', 0: 1426.279708, 1: 1338.558742, 2: 263.564697, Countries: ['China', 'India', 'Indonesia'] },
    { Continent: 'N. America', 0: 327.527107, 1: 129.132150, 2: 36.436169, Countries: ['United States', 'Mexico', 'Canada'] },
    { Continent: 'S. America', 0: 210.193253, 1: 49.265468, 2: 44.139544, Countries: ['Brazil', 'Colombia', 'Argentina'] },
    { Continent: 'Africa', 0: 185.313910, 1: 102.675041, 2: 96.325988, Countries: ['Nigeria', 'Ethiopia', 'Egypt'] },
    { Continent: 'Europe', 0: 144.154086, 1: 81.845984, 2: 80.091763, Countries: ['Russia', 'Germany', 'Turkey'] }
];

Smart('#chart', class {
    get properties() {
        return {
            caption: 'Top three populous countries',
            description: 'in each continent',
            showLegend: false,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            dataSource: sampleData,
            xAxis:
            {
                dataField: 'Continent',
                gridLines: {
                    visible: true
                }
            },
            colorScheme: 'scheme32',
            seriesGroups:
                [
                    {
                        type: 'column',
                        orientation: 'horizontal',
                        columnsGapPercent: 50,
                        seriesGapPercent: 20,
                        useGradientColors: false,
                        valueAxis:
                        {
                            unitInterval: 100,
                            minValue: 0,
                            maxValue: 1600,
                            displayValueAxis: true,
                            flip: true,
                            description: 'Population (in millions)',
                            axisSize: 'auto',
                            tickMarksColor: '#888888'
                        },
                        toolTipFormatFunction: function (value, itemIndex, series) {
                            return `#${parseFloat(series.dataField) + 1} in ${sampleData[itemIndex].Continent}: ${sampleData[itemIndex].Countries[series.dataField]}
<br />Population: ${Math.round(value * 10e6)}`;
                        },
                        series: [
                            { dataField: '0', displayText: 'First' },
                            { dataField: '1', displayText: 'Second' },
                            { dataField: '2', displayText: 'Third' }
                        ]
                    }
                ]
        }
    }
});
