import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const sampleData: any[] = [
        { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
        { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
        { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
        { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
        { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
        { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
        { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
    ];

    const description = 'Time spent in vigorous exercise';
    const padding = { left: 5, top: 5, right: 5, bottom: 5 };
    const seriesGroups = [
        {
            columnsGapPercent: 50,
            series: [
                { dataField: 'Keith', displayText: 'Keith' },
                { dataField: 'Erica', displayText: 'Erica' },
                { dataField: 'George', displayText: 'George' }
            ],
            seriesGapPercent: 0,
            type: 'column',
            valueAxis: {
                axisSize: 'auto',
                maxValue: 100,
                minValue: 0,
                tickMarks: {
                    color: '#888888'
                },
                title: {
                    text: 'Time in minutes'
                },
                unitInterval: 10,
                visible: true
            }
        }
    ];
    const title = 'Fitness & exercise weekly scorecard';
    const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    const xAxis = {
        dataField: 'Day',
        gridLines: {
            visible: false
        }
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
            source={sampleData}
            xAxis={xAxis}
            seriesGroups={seriesGroups}
            colorScheme={'scheme01'}
        />
    );
};

export default App;