const sampleData = [
    { Day: 'Monday', Keith: 30, Erica: 15, George: 25, Monica: 20, Maria: 15, Average: 20 },
    { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30, Monica: 25, Maria: 20, Average: 38 },
    { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25, Monica: 10, Maria: 20, Average: 33 },
    { Day: 'Thursday', Keith: 35, Erica: 25, George: 45, Monica: 30, Maria: 30, Average: 31 },
    { Day: 'Friday', Keith: 20, Erica: 20, George: 25, Monica: 45, Maria: 30, Average: 52 },
    { Day: 'Saturday', Keith: 30, Erica: 20, George: 30, Monica: 60, Maria: 40, Average: 75 },
    { Day: 'Sunday', Keith: 60, Erica: 45, George: 90, Monica: 70, Maria: 50, Average: 73 }
];

Smart('#chart1', class {
    get properties() {
        return {
            caption: 'Fitness & exercise weekly scorecard',
            description: 'Time spent in vigorous exercise',
            borderLineWidth: 0,
            showLegend: true,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            dataSource: sampleData,
            xAxis:
            {
                dataField: 'Day',
                gridLines: {
                    visible: true
                }
            },
            valueAxis:
            {
                unitInterval: 10,
                minValue: 0,
                maxValue: 100,
                displayValueAxis: true,
                description: 'Time in minutes',
                axisSize: 'auto',
                tickMarksColor: '#888888'
            },
            colorScheme: 'scheme01',
            seriesGroups:
                [
                    {
                        type: 'column',
                        columnsGapPercent: 50,
                        seriesGapPercent: 0,
                        series: [
                            { dataField: 'Keith', displayText: 'Keith' },
                            { dataField: 'Erica', displayText: 'Erica' },
                            { dataField: 'George', displayText: 'George' },
                            { dataField: 'Monica', displayText: 'Monica' },
                            { dataField: 'Maria', displayText: 'Maria' }
                        ]
                    },
                    {
                        type: 'spline',
                        series: [
                            { dataField: 'Average', displayText: 'Class average' }
                        ]
                    }
                ]
        }
    }
});

Smart('#chart2', class {
    get properties() {
        return {
            caption: 'Sunday fitness & exercise',
            description: '',
            borderLineWidth: 0,
            showLegend: true,
            showBorderLine: true,
            legendPosition: { left: 520, top: 140, width: 100, height: 100 },
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            dataSource: [{ Name: 'Keith', Exercise: 60 }, { Name: 'Erica', Exercise: 45 }, { Name: 'George', Exercise: 90 }, { Name: 'Monica', Exercise: 70 }, { Name: 'Maria', Exercise: 50 }],
            colorScheme: 'scheme01',
            seriesGroups:
                [
                    {
                        type: 'pie',
                        showLabels: true,
                        series:
                            [
                                {
                                    dataField: 'Exercise',
                                    displayText: 'Name',
                                    labelRadius: 70,
                                    initialAngle: 15,
                                    radius: 90,
                                    centerOffset: 0,
                                    formatSettings: { decimalPlaces: 1 },
                                    useGradientColors: false
                                }
                            ]
                    }
                ]
        }
    }
});

window.onload = function () {
    const chart1 = document.getElementById('chart1'),
        chart2 = document.getElementById('chart2'),
        colorSchemes = document.getElementById('colorSchemes'),
        useCustomScheme = document.getElementById('useCustomScheme'),
        customColors = ['#1A6642', '#46C26F', '#F9B956', '#F38443', '#DE513D'];
    let defaultScheme;

    chart1.addColorScheme('customScheme', customColors);
    chart2.addColorScheme('customScheme', customColors);

    customColors.forEach(function (color, index) {
        document.getElementById('customScheme' + (index + 1)).style.backgroundColor = color;
    });

    colorSchemes.addEventListener('change', function (event) {
        defaultScheme = event.detail.value;
        colorSchemes.placeholder = event.detail.label;

        if (!useCustomScheme.checked) {
            chart1.colorScheme = defaultScheme;
            chart2.colorScheme = defaultScheme;
        }
    });

    colorSchemes.placeholder = '<div class="circle" style="background-color: #307DD7;"></div><div class="circle" style="background-color: #AA4643;"></div><div class="circle" style="background-color: #89A54E;"></div><div class="circle" style="background-color: #71588F;"></div><div class="circle" style="background-color: #4198AF;"></div>';

    document.getElementById('useCustomScheme').addEventListener('change', function (event) {
        if (event.detail.value) {
            chart1.colorScheme = 'customScheme';
            chart2.colorScheme = 'customScheme';
        }
        else {
            chart1.colorScheme = defaultScheme;
            chart2.colorScheme = defaultScheme;
        }
    });

    document.getElementById('btnLight').addEventListener('change', function (event) {
        if (event.detail.value) {
            chart1.theme = 'light';
            chart2.theme = 'light';
            document.body.style.backgroundColor = null;
        }
    });

    document.getElementById('btnDark').addEventListener('change', function (event) {
        if (event.detail.value) {
            chart1.theme = 'dark';
            chart2.theme = 'dark';
            document.body.style.backgroundColor = '#2E2E2E';
        }
    });
}
