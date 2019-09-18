
// prepare chart data as an array
//var sampleData = [
//        { Day: 'Monday', Running: 30, Swimming: 10, Cycling: 25, Goal: 40 },
//        { Day: 'Tuesday', Running: 25, Swimming: 15, Cycling: 10, Goal: 50 },
//        { Day: 'Wednesday', Running: 30, Swimming: 10, Cycling: 25, Goal: 60 },
//        { Day: 'Thursday', Running: 40, Swimming: 20, Cycling: 25, Goal: 40 },
//        { Day: 'Friday', Running: 45, Swimming: 20, Cycling: 25, Goal: 50 },
//        { Day: 'Saturday', Running: 30, Swimming: 20, Cycling: 30, Goal: 60 },
//        { Day: 'Sunday', Running: 20, Swimming: 30, Cycling: 10, Goal: 90 }
//];

//Smart('#chart', class {
//    get properties() {
//        return {
//            renderEngine: 'SVG',
//            caption: "Fitness & exercise weekly scorecard",
//            description: "Time spent in vigorous exercise by activity",
//            enableAnimations: true,
//            showLegend: true,
//            padding: { left: 10, top: 10, right: 15, bottom: 10 },
//            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
//            source: new Smart.DataAdapter(
//		{
//		    dataSource: sampleData,
//		    dataFields:
//			[
//				'Day: string',
//				'Running: number',
//				'Swimming: number',
//				'Cycling: number',
//				'Goal: number' 
//			]
//		}),

//            //source: sampleData,
//            colorScheme: 'scheme13',
//            xAxis: {
//                dataField: 'Day',
//                unitInterval: 2,
//                tickMarks: { visible: true, interval: 1 },
//                gridLinesInterval: { visible: true, interval: 1 },
//                valuesOnTicks: false,
//                padding: { bottom: 10 }
//            },
//            valueAxis: {
//                unitInterval: 10,
//                minValue: 0,
//                maxValue: 50,
//                title: { text: 'Time in minutes<br><br>' },
//                labels: { horizontalAlignment: 'right' }
//            },
//            seriesGroups:
//                [
//                    {
//                        type: 'line',
//                        series:
//                        [
//                            {
//                                dataField: 'Swimming',
//                                symbolType: 'square',
//                                labels:
//                                {
//                                    visible: true,
//                                    backgroundColor: '#FEFEFE',
//                                    backgroundOpacity: 0.2,
//                                    borderColor: '#7FC4EF',
//                                    borderOpacity: 0.7,
//                                    padding: { left: 5, right: 5, top: 0, bottom: 0 }
//                                }
//                            },
//                            {
//                                dataField: 'Running',
//                                symbolType: 'square',
//                                labels:
//                                {
//                                    visible: true,
//                                    backgroundColor: '#FEFEFE',
//                                    backgroundOpacity: 0.2,
//                                    borderColor: '#7FC4EF',
//                                    borderOpacity: 0.7,
//                                    padding: { left: 5, right: 5, top: 0, bottom: 0 }
//                                }
//                            }
//                        ]
//                    }
//                ]
//        }
//    }
//});



//Smart('#chart2', class {
//    get properties() {
//        return {
//            caption: "U.S. Historical Home Prices (1950-2017)",
//            description: "Source: http://www.econ.yale.edu/~shiller/data.htm",
//            enableAnimations: true,
//            showLegend: true,
//            padding: { left: 5, top: 5, right: 25, bottom: 5 },
//            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
//            source: dataAdapter,
//            xAxis: {
//                dataField: 'Year',
//                minValue: 1947,
//                maxValue: 2017,
//                unitInterval: 5,
//                tickMarks: {
//                    visible: true,
//                    interval: 1
//                },
//                gridLines: {
//                    visible: true,
//                    interval: 5
//                }
//            },
//            colorScheme: 'scheme04',
//            seriesGroups:
//                [
//                    {
//                        type: 'line',
//                        valueAxis:
//                        {
//                            unitInterval: 10,
//                            padding: { left: 10 },
//                            title: { text: 'U.S. Population (millions)<br>' },
//                            gridLines: { visible: false }
//                        },
//                        series: [
//                                { dataField: 'Population', displayText: 'Population' }
//                        ]
//                    },
//                    {
//                        type: 'spline',
//                        valueAxis:
//                        {
//                            unitInterval: 1,
//                            visible: false
//                        },
//                        series: [
//                                { dataField: 'Rate', displayText: 'Interest Rate' }
//                        ]
//                    },
//                    {
//                        type: 'spline',
//                        valueAxis:
//                        {
//                            unitInterval: 20,
//                            title: { text: 'Index Value<br>' },
//                            labels: {
//                                horizontalAlignment: 'right',
//                                formatSettings: { decimalPlaces: 0 }
//                            }
//                        },
//                        series: [
//                                { dataField: 'HPI', displayText: 'Real Home Price Index' },
//                                { dataField: 'BuildCost', displayText: 'Building Cost Index' }
//                        ]
//                    }
//                ]
//        }
//    }
//});

var source3 = JSON.parse('[{"Country":"Luxembourg","GDP":"81278.63","DebtPercent":"16.2","Debt":"13167.13806","uid":0},{"Country":"Singapore","GDP":"57596.47","DebtPercent":"102.4","Debt":"58978.78528","uid":1},{"Country":"Norway","GDP":"53285.21","DebtPercent":"47.7","Debt":"25417.04517","uid":2},{"Country":"USA","GDP":"45759.46","DebtPercent":"58.9","Debt":"26952.32194","uid":3},{"Country":"Austria","GDP":"39269.33","DebtPercent":"70.4","Debt":"27645.60832","uid":4},{"Country":"Germany","GDP":"34065.12","DebtPercent":"78.8","Debt":"26843.31456","uid":5},{"Country":"Canada","GDP":"38065.13","DebtPercent":"34","Debt":"12942.1442","uid":6}]');

Smart('#chart3', class {
    get properties() {
        return {
            caption: "Economic comparison",
            description: "GDP and Debt in 2010",
            showLegend: true,
            enableAnimations: true,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            source: source3,
            renderEngine: 'HTML5',
            xAxis:
                {
                    dataField: 'Country',
                    gridLines: { visible: true },
                    valuesOnTicks: false
                },
            colorScheme: 'scheme01',
            columnSeriesOverlap: false,
            seriesGroups:
                [
                    {
                        type: 'column',
                        valueAxis:
                        {
                            visible: true,
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
                            visible: true,
                            position: 'right',
                            unitInterval: 10,
                            title: { text: 'Debt (% of GDP)' },
                            gridLines: { visible: false },
                            labels: { horizontalAlignment: 'left' }
                        },
                        series: [
                                { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
                        ]
                    }

                ]
        }
    }
});

window.onload = function () {
    document.getElementsByTagName('smart-button')[0].addEventListener('click', function () {
        document.getElementById('chart3').saveAsJPEG('myChart.jpeg', 'http://www.jqwidgets.com/export_server/export.php');
    });
}