import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const days = [
        { Day: 'Monday' },
        { Day: 'Tuesday' },
        { Day: 'Wednesday' },
        { Day: 'Thursday' },
        { Day: 'Friday' },
        { Day: 'Saturday' },
        { Day: 'Sunday' }
    ];

    const Keith = [
        { Minutes: 30 },
        { Minutes: 25 },
        { Minutes: 30 },
        { Minutes: 35 },
        { Minutes: 20 },
        { Minutes: 30 },
        { Minutes: 60 }
    ];

    const Erica = [
        { Minutes: 15 },
        { Minutes: 25 },
        { Minutes: 20 },
        { Minutes: 25 },
        { Minutes: 20 },
        { Minutes: 20 },
        { Minutes: 45 }
    ];

    const George = [
        { Minutes: 25 },
        { Minutes: 30 },
        { Minutes: 25 },
        { Minutes: 45 },
        { Minutes: 25 },
        { Minutes: 30 },
        { Minutes: 90 }
    ];

    const description = 'Sample line serie with missing and invalid values';
    const padding = { left: 5, top: 5, right: 40, bottom: 5 };
    const seriesGroups = [
        {
            series: [
                { dataField: 'Minutes', displayText: 'Keith' }
            ],
            source: Keith,
            type: 'stackedline',
        },
        {
            series: [
                { dataField: 'Minutes', displayText: 'Erica' }
            ],
            source: Erica,
            type: 'stackedline',
        },
        {
            series: [
                { dataField: 'Minutes', displayText: 'George' }
            ],
            source: George,
            type: 'stackedline',
        }
    ];
    const title = 'Line serie with missing points';
    const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    const valueAxis = {
        title: { text: 'Time in minutes' },
        visible: true
    };
    const xAxis = {
        dataField: 'Day',
        gridLines: { visible: true }
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
            source={days}
            xAxis={xAxis}
            valueAxis={valueAxis}
            seriesGroups={seriesGroups}
            colorScheme={'scheme02'}
        />
    );
};

export default App;