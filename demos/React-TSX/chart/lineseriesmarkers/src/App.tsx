import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const sampleData = [
        { Day: 'Monday', Running: 30, Swimming: 10, Cycling: 25, Goal: 40 },
        { Day: 'Tuesday', Running: 25, Swimming: 15, Cycling: 10, Goal: 50 },
        { Day: 'Wednesday', Running: 30, Swimming: 10, Cycling: 25, Goal: 60 },
        { Day: 'Thursday', Running: 40, Swimming: 20, Cycling: 25, Goal: 40 },
        { Day: 'Friday', Running: 45, Swimming: 20, Cycling: 25, Goal: 50 },
        { Day: 'Saturday', Running: 30, Swimming: 20, Cycling: 30, Goal: 60 },
        { Day: 'Sunday', Running: 20, Swimming: 30, Cycling: 10, Goal: 90 }
    ];

    const chartProps: IChartProps = {
        description: 'Time spent in vigorous exercise by activity',
        padding: { left: 10, top: 10, right: 15, bottom: 10 },
        seriesGroups: [
            {
                series: [
                    {
                        dataField: 'Swimming',
                        labels: {
                            backgroundColor: '#FEFEFE',
                            backgroundOpacity: 0.2,
                            borderColor: '#7FC4EF',
                            borderOpacity: 0.7,
                            padding: { left: 5, right: 5, top: 0, bottom: 0 },
                            visible: true
                        },
                        symbolType: 'square'
                    },
                    {
                        dataField: 'Running',
                        labels: {
                            backgroundColor: '#FEFEFE',
                            backgroundOpacity: 0.2,
                            borderColor: '#7FC4EF',
                            borderOpacity: 0.7,
                            padding: { left: 5, right: 5, top: 0, bottom: 0 },
                            visible: true
                        },
                        symbolType: 'square'
                    }
                ],
                type: 'line'
            }
        ],
        source: sampleData,
        title: 'Fitness & exercise weekly scorecard',
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            labels: { horizontalAlignment: 'right' },
            maxValue: 50,
            minValue: 0,
            title: { text: 'Time in minutes<br><br>' },
            unitInterval: 10
        },
        xAxis: {
            dataField: 'Day',
            gridLines: { visible: true, interval: 1 },
            padding: { bottom: 10 },
            tickMarks: { visible: true, interval: 1 },
            unitInterval: 1,
            valuesOnTicks: false
        }
    };

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            showLegend={true}
            enableAnimations={true}
            padding={chartProps.padding}
            titlePadding={chartProps.titlePadding}
            source={chartProps.source}
            xAxis={chartProps.xAxis}
            valueAxis={chartProps.valueAxis}
            seriesGroups={chartProps.seriesGroups}
            colorScheme={'scheme05'}
        />
    );
};

export default App;