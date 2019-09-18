const source = JSON.parse('[{"Country":"Luxembourg","GDP":"81278.63","DebtPercent":"16.2","Debt":"13167.13806","uid":0},{"Country":"Singapore","GDP":"57596.47","DebtPercent":"102.4","Debt":"58978.78528","uid":1},{"Country":"Norway","GDP":"53285.21","DebtPercent":"47.7","Debt":"25417.04517","uid":2},{"Country":"USA","GDP":"45759.46","DebtPercent":"58.9","Debt":"26952.32194","uid":3},{"Country":"Austria","GDP":"39269.33","DebtPercent":"70.4","Debt":"27645.60832","uid":4},{"Country":"Germany","GDP":"34065.12","DebtPercent":"78.8","Debt":"26843.31456","uid":5},{"Country":"Canada","GDP":"38065.13","DebtPercent":"34","Debt":"12942.1442","uid":6}]');

Smart('#chart', class {
    get properties() {
        return {
            caption: 'Economic comparison',
            description: 'GDP and Debt in 2010',
            showLegend: true,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            dataSource: source,
            xAxis:
            {
                dataField: 'Country'
            },
            colorScheme: 'scheme32',
            seriesGroups:
                [
                    {
                        colorScheme: 'scheme03',
                        type: 'column',
                        columnsGapPercent: 50,
                        valueAxis:
                        {
                            unitInterval: 5000,
                            title: { text: 'GDP & Debt per Capita($)<br>' }
                        },
                        series: [
                            { dataField: 'GDP', displayText: 'GDP per Capita' },
                            { dataField: 'Debt', displayText: 'Debt per Capita' }
                        ]
                    },
                    {
                        type: 'line',
                        valueAxis:
                        {
                            unitInterval: 10,
                            title: { text: 'Debt (% of GDP)<br>' },
                            position: 'right',
                            gridLines: { visible: false }
                        },
                        series: [
                            { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
                        ]
                    }

                ]
        };
    }
});

window.onload = function () {
    const chart = document.getElementById('chart'),
        landscape = document.getElementById('landscape');

    document.getElementById('saveAsJPEG').addEventListener('click', function () {
        chart.saveAsJPEG('myChart.jpeg');
    });

    document.getElementById('saveAsPNG').addEventListener('click', function () {
        chart.saveAsPNG('myChart.png');
    });

    document.getElementById('saveAsPDF').addEventListener('click', function () {
        chart.saveAsPDF('myChart.pdf', landscape.checked ? 'landscape' : 'portrait');
    });

    document.getElementById('print').addEventListener('click', function () {
        chart.print();
    });
};
