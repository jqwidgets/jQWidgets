/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createChartPolarSeries(selector, sliderStartAngleSelector, dropDownSeriesSelector, sliderRadiusSelector, dropDownColorsSelector)
{
    // prepare the data
    let source =
        {
            datatype: "tab",
            datafields: [
                { name: 'Year' },
                { name: 'HPI' },
                { name: 'BuildCost' },
                { name: 'Population' },
                { name: 'Rate' }
            ],
            url: '../../sampledata/homeprices.txt'
        };
    let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });

    // initialization options - validated in typescript
    // jqwidgets.ChartOptions has generated TS definition
    let options: jqwidgets.ChartOptions =
        {
            title: "U.S. Real Home Price vs Building Cost Indeces (1950-2010)",
            description: "Source: http://www.econ.yale.edu/~shiller/data.htm",
            enableAnimations: true,
            showLegend: true,
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            //Check JSON
            //titlePadding: { left: 0, top: 0, right: 0, bottom: 5 },
            source: dataAdapter,
            xAxis:
            {
                dataField: 'Year',
                unitInterval: 10,
                maxValue: 2010,
                valuesOnTicks: true,
                labels: { autoRotate: true } //Check JSON
            },
            colorScheme: 'scheme01',
            seriesGroups:
            [
                {
                    polar: true,
                    radius: 120,
                    type: 'splinearea',
                    valueAxis:
                    {
                        labels: {
                            formatSettings: { decimalPlaces: 0 },
                            autoRotate: true
                        }
                    },
                    series: [
                        { dataField: 'HPI', displayText: 'Real Home Price Index', opacity: 0.7, radius: 2, lineWidth: 2 },
                        { dataField: 'BuildCost', displayText: 'Building Cost Index', opacity: 0.7, radius: 2, lineWidth: 2 }
                    ]
                }
            ]
        };

    // creates an instance
    let myChart: jqwidgets.jqxChart = jqwidgets.createInstance(selector, 'jqxChart', options);


    // start angle slider
    let sliderStartAngleOptions: jqwidgets.SliderOptions = { width: 240, min: 0, max: 360, step: 1, ticksFrequency: 20, mode: 'fixed' };
    let sliderStartAngle: jqwidgets.jqxSlider = jqwidgets.createInstance(sliderStartAngleSelector, 'jqxSlider', sliderStartAngleOptions);
    sliderStartAngle.addEventHandler('change', function (event)
    {
        let value = event.args.value;
        myChart.seriesGroups[0].startAngle = value;
        myChart.seriesGroups[0].endAngle = value + 360;
        myChart.update();
    });

    // radius slider
    let sliderRadiusOptions: jqwidgets.SliderOptions = { width: 240, min: 80, max: 140, value: 120, step: 1, ticksFrequency: 20, mode: 'fixed' };
    let sliderRadius: jqwidgets.jqxSlider = jqwidgets.createInstance(sliderRadiusSelector, 'jqxSlider', sliderRadiusOptions);
    sliderRadius.addEventHandler('change', function (event)
    {
        let value = event.args.value;
        myChart.seriesGroups[0].radius = value;
        myChart.update();
    });

    // color scheme drop down
    let colorsSchemesList = ["scheme01", "scheme02", "scheme03", "scheme04", "scheme05", "scheme06", "scheme07", "scheme08"];
    let dropDownColorsOptions: jqwidgets.DropDownListOptions = { source: colorsSchemesList, selectedIndex: 2, width: '200', height: '25', dropDownHeight: 100 };
    let dropDownColors: jqwidgets.jqxDropDownList = jqwidgets.createInstance(dropDownColorsSelector, 'jqxDropDownList', dropDownColorsOptions);
    dropDownColors.addEventHandler('change', function (event)
    {
        let value = event.args.item.value;
        myChart.colorScheme = value;
        myChart.update();
    });

    // series type drop down
    let seriesList = ["splinearea", "spline", "column", "scatter", "stackedcolumn", "stackedsplinearea", "stackedspline"];
    let dropDownSeriesOptions: jqwidgets.DropDownListOptions = { source: seriesList, selectedIndex: 0, width: '200', height: '25', dropDownHeight: 100 };
    let dropDownSeries: jqwidgets.jqxDropDownList = jqwidgets.createInstance(dropDownSeriesSelector, 'jqxDropDownList', dropDownSeriesOptions);
    dropDownSeries.addEventHandler('change', function (event)
    {
        let args = event.args;
        if (args)
        {
            let value = args.item.value;
            myChart.seriesGroups[0].type = value;
            myChart.update();
        }
    });
}