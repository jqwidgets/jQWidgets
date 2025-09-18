import * as React from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const source: any = React.useMemo(() => ({
        datafields: [
            { name: 'month' },
            { name: 'min' },
            { name: 'max' }
        ],
        datatype: 'json',
        url: 'weather_geneva.txt'
    }), []);

    const dataAdapter = React.useMemo(() =>
        new jqx.dataAdapter(source, {
            async: false,
            autoBind: true,
            loadError: (xhr: any, status: any, error: any) => {
                alert('Error loading "' + source.url + '" : ' + error);
            }
        }), [source]
    );

    const description = 'Climatological Information about Geneva';
    const padding = { left: 5, top: 5, right: 5, bottom: 5 };
    const title = 'Weather in Geneva, Switzerland';
    const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    const seriesGroups = [
        {
            series: [
                { dataField: 'max', displayText: 'Max Temperature' },
                { dataField: 'min', displayText: 'Min Temperature' }
            ],
            type: 'column'
        }
    ];
    const valueAxis = {
        labels: {
            formatSettings: {
                decimalPlaces: 1,
                negativeWithBrackets: false
            },
            horizontalAlignment: 'right'
        },
        title: {
            text: 'Temperature [C]<br>',
            visible: true
        },
        unitInterval: 5
    };
    const xAxis = {
        dataField: 'month',
        displayText: 'Month',
        gridLines: { interval: 3 },
        unitInterval: 1
    };

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={title}
            description={description}
            showLegend={true}
            enableAnimations={true}
            padding={padding}
            titlePadding={titlePadding}
            source={dataAdapter}
            xAxis={xAxis}
            valueAxis={valueAxis}
            seriesGroups={seriesGroups}
            colorScheme={'scheme05'}
        />
    );
};

export default App;