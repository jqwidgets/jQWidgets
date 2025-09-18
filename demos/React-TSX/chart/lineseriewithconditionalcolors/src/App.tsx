import * as React from 'react';
import { useMemo } from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const source = useMemo(() => ({
        datafields: [
            { name: 'Quarter' },
            { name: 'Change' }
        ],
        datatype: 'csv',
        url: 'us_gdp_2008-2013.csv'
    }), []);

    const dataAdapter = useMemo(() => (
        new jqx.dataAdapter(source, {
            async: false,
            autoBind: true,
            loadError: (xhr: any, status: any, error: any) => {
                alert('Error loading "' + source.url + '" : ' + error);
            }
        })
    ), [source]);

    const seriesGroups = useMemo(() => [
        {
            series: [
                {
                    colorFunction: (value: any) => {
                        return (value < 0) ? '#FF0000' : '#00FF00';
                    },
                    dataField: 'Change',
                    displayText: 'Change'
                }
            ],
            type: 'line',
            valueAxis: {
                formatFunction: (value: any) => value + '%',
                title: {
                    text: 'Percentage Change'
                }
            }
        }
    ], []);

    const xAxis = useMemo(() => ({
        dataField: 'Quarter',
        formatFunction: (value: any) => value,
        textRotationAngle: -75,
        unitInterval: 1,
        valuesOnTicks: false
    }), []);

    const padding = { left: 5, top: 5, right: 10, bottom: 5 };
    const titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title='U.S. GDP Percentage Change'
            description='(source: Bureau of Economic Analysis)'
            showLegend={false}
            enableAnimations={true}
            padding={padding}
            borderLineWidth={1}
            titlePadding={titlePadding}
            source={dataAdapter}
            xAxis={xAxis}
            showBorderLine={true}
            seriesGroups={seriesGroups}
            colorScheme='scheme05'
        />
    );
};

export default App;