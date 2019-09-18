const sampleData = [
    { Year: 2001, Austria: 120.61, Belgium: 116.12, Croatia: 45.11 },
    { Year: 2002, Austria: 118.96, Belgium: 109.37, Croatia: 53.19 },
    { Year: 2003, Austria: 118.06, Belgium: 105.45, Croatia: 54.39 },
    { Year: 2004, Austria: 118.56, Belgium: 99.62, Croatia: 56.83 },
    { Year: 2005, Austria: 125.98, Belgium: 100.75, Croatia: 62.85 },
    { Year: 2006, Austria: 125.66, Belgium: 106, Croatia: 68.59 },
    { Year: 2007, Austria: 122.7, Belgium: 108.79, Croatia: 70.76 },
    { Year: 2008, Austria: 126.3, Belgium: 110.6, Croatia: 73.9 },
    { Year: 2009, Austria: 135.09, Belgium: 116.05, Croatia: 77.38 },
    { Year: 2010, Austria: 135.06, Belgium: 113.68, Croatia: 90.49 },
    { Year: 2011, Austria: 132.09, Belgium: 114, Croatia: 88.71 },
    { Year: 2012, Austria: 135.25, Belgium: 113.23, Croatia: 88.53 },
    { Year: 2013, Austria: 130.43, Belgium: 112.06, Croatia: 89.57 },
    { Year: 2014, Austria: 125.43, Belgium: 154.55, Croatia: 89.46 },
    { Year: 2015, Austria: 123.44, Belgium: 148.03, Croatia: 87.48 },
    { Year: 2016, Austria: 129.89, Belgium: 153.69, Croatia: 84.9 },
    { Year: 2017, Austria: 126.73, Belgium: 135.66, Croatia: 77.02 }
];

Smart('#chart', class {
    get properties() {
        return {
            clip: false,
            caption: 'Domestic credit provided by banking sector',
            description: '(% of GDP)',
            showLegend: true,
            padding: { left: 10, top: 5, right: 10, bottom: 5 },
            titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
            dataSource: sampleData,
            colorScheme: 'scheme29',
            xAxis:
            {
                dataField: 'Year',
                valuesOnTicks: true
            },
            valueAxis:
            {
                visible: true,
                title: { text: '% of GDP' },
                labels: {
                    formatSettings: { sufix: '%' }
                }
            },
            seriesGroups:
                [
                    {
                        type: 'spline',
                        series: [
                            { dataField: 'Austria', opacity: 0.8, symbolType: 'circle', symbolSize: 10 },
                            { dataField: 'Belgium', opacity: 0.7, symbolType: 'square', symbolSize: 10 },
                            { dataField: 'Croatia', opacity: 0.6, symbolType: 'diamond', symbolSize: 10 }
                        ]
                    }
                ]
        }
    }
});

window.onload = function () {
    const chart = document.getElementById('chart'),
        seriesNo = document.getElementById('seriesNo'),
        itemNo = document.getElementById('itemNo');

    document.getElementById('getItemsCount').addEventListener('click', function () {
        const series = parseFloat(seriesNo.value),
            count = chart.getItemsCount(0, series);

        alert(`Series ${series} has ${count} items.`);
    });

    document.getElementById('getItemCoord').addEventListener('click', function () {
        const series = parseFloat(seriesNo.value),
            item = parseFloat(itemNo.value),
            coords = chart.getItemCoord(0, series, item);

        alert(`The coordinates of item ${item} from series ${series} are (${coords.x}, ${coords.y}).`);
    });

    document.getElementById('showSerie').addEventListener('click', function () {
        const series = parseFloat(seriesNo.value);

        chart.showSerie(0, series);
    });

    document.getElementById('hideSerie').addEventListener('click', function () {
        const series = parseFloat(seriesNo.value);

        chart.hideSerie(0, series);
    });

    document.getElementById('showToolTip').addEventListener('click', function () {
        const series = parseFloat(seriesNo.value),
            item = parseFloat(itemNo.value);

        chart.showToolTip(0, series, item);
    });

    document.getElementById('hideToolTip').addEventListener('click', function () {
        chart.hideToolTip();
    });

    document.getElementById('getXAxisRect').addEventListener('click', function () {
        const rect = chart.getXAxisRect(0);

        alert(`The xAxis rect starts at (${rect.x}, ${rect.y}) and has width ${rect.width}px and height ${rect.height}px.`);
    });

    document.getElementById('getXAxisLabels').addEventListener('click', function () {
        const labels = chart.getXAxisLabels(0);

        alert(`The xAxis labels are ${labels.map(label => label.value).join(', ')}.`);
    });

    document.getElementById('getValueAxisRect').addEventListener('click', function () {
        const rect = chart.getValueAxisRect(0);

        alert(`The valueAxis rect starts at (${rect.x}, ${rect.y}) and has width ${rect.width}px and height ${rect.height}px.`);
    });

    document.getElementById('getValueAxisLabels').addEventListener('click', function () {
        const labels = chart.getValueAxisLabels(0);

        alert(`The valueAxis labels are ${labels.map(label => label.value).join(', ')}.`);
    });
};
