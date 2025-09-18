import * as React from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const sourceConfig = {
        datafields: [
            { name: 'Year' },
            { name: 'HPI' },
            { name: 'BuildCost' },
            { name: 'Population' },
            { name: 'Rate' }
        ],
        datatype: 'tab',            
        url: 'homeprices.txt'
    };

    const source = React.useMemo(() => (
        new jqx.dataAdapter(
            sourceConfig,
            { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + sourceConfig.url + '" : ' + error); } }
        )
    ), []);

    const description = 'Source: http://www.econ.yale.edu/~shiller/data.htm';
    const padding = { left: 20, top: 5, right: 20, bottom: 5 };
    const seriesGroups = [
        {
            series: [
                { dataField: 'Population', displayText: 'Population' }
            ],
            type: 'line',
            valueAxis: {
                gridLines: { visible: false },
                maxValue: 400,
                title: { text: 'U.S. Population (millions)' },
                unitInterval: 20
            }
        },
        {
            series: [
                { dataField: 'Rate', displayText: 'Interest Rate' }
            ],
            type: 'spline',
            valueAxis: {
                gridLines: { visible: false },
                labels: {
                    horizontalAlignment: 'left'
                },
                maxValue: 0.2,
                position: 'right',
                title: { text: 'Interest rate' },
                unitInterval: 0.01,
                visible: true
            }
        },
        {
            series: [
                { dataField: 'HPI', displayText: 'Real Home Price Index' },
                { dataField: 'BuildCost', displayText: 'Building Cost Index' }
            ],
            type: 'spline',
            valueAxis: {
                gridLines: { visible: false },
                labels: {
                    formatSettings: { decimalPlaces: 0 },
                    horizontalAlignment: 'left'
                },
                maxValue: 200,
                position: 'right',
                title: { text: 'Index Value' },
                unitInterval: 20
            }
        }
    ];
    const title = 'U.S. Historical Home Prices (1950-2011)';
    const titlePadding = { left: 10, top: 0, right: 0, bottom: 10 };
    const xAxis = {
        dataField: 'Year',
        gridLines: {
            dashStyle: '1,3',
            interval: 5,
            visible: true
        },
        maxValue: 2012,
        minValue: 1947,             
        tickMarks: {
            dashStyle: '1,2',
            interval: 1,
            visible: true
        },
        unitInterval: 5
    };

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={title}
            description={description}
            enableAnimations={true}
            showLegend={true}
            padding={padding}
            titlePadding={titlePadding}
            source={source}
            xAxis={xAxis}
            seriesGroups={seriesGroups}
            colorScheme={'scheme04'}
        />
    );
};

export default App;