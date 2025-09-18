import * as React from 'react';
import { useMemo } from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

function App() {
    const chartProps = useMemo<IChartProps>(() => {
        const source = {
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

        return {
            description: 'Source: http://www.econ.yale.edu/~shiller/data.htm',
            padding: { left: 15, top: 5, right: 20, bottom: 5 },
            seriesGroups: [
                {
                    alignEndPointsWithIntervals: false,
                    series: [
                        { dataField: 'HPI', displayText: 'Real Home Price Index', opacity: 0.7 },
                        { dataField: 'BuildCost', displayText: 'Building Cost Index', opacity: 0.9 }
                    ],
                    type: 'splinearea',
                    valueAxis: {
                        labels: {
                            formatSettings: { decimalPlaces: 0 },
                            horizontalAlignment: 'right'
                        },
                        title: { text: 'Index Value' },
                        unitInterval: 20,
                        visible: true
                    }
                },
                {
                    alignEndPointsWithIntervals: false,
                    series: [
                        { dataField: 'Rate', displayText: 'Interest Rate', opacity: 1.0, lineWidth: 4, dashStyle: '4,4' }
                    ],
                    type: 'spline',
                    valueAxis: {
                        gridLines: {
                            interval: 0.01,
                            visible: false
                        },
                        labels: { formatSettings: { decimalPlaces: 2 } },
                        maxValue: 0.2,
                        position: 'right',
                        tickMarks: {
                            interval: 0.005,
                            visible: true
                        },
                        title: { text: 'Interest Rate' },
                        unitInterval: 0.01
                    }
                }
            ],
            source: new jqx.dataAdapter(source, {
                async: false,
                autoBind: true,
                loadError: (xhr: any, status: any, error: any) => {
                    alert('Error loading "' + source.url + '" : ' + error);
                }
            }),
            title: 'U.S. History Home Prices (1950-2010)',
            titlePadding: { left: 10, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Year',
                maxValue: 2010,
                minValue: 1950,
                unitInterval: 5,
                valuesOnTicks: true
            }
        };
    }, []);

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            showLegend={true}
            enableAnimations={true}
            padding={chartProps.padding}
            source={chartProps.source}
            xAxis={chartProps.xAxis}
            titlePadding={chartProps.titlePadding}
            colorScheme="scheme05"
            seriesGroups={chartProps.seriesGroups}
        />
    );
}

export default App;