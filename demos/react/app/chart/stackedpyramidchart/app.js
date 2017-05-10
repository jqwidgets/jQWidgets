import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let sampleData = [
            { Index: '1', SerieA: -30, SerieB: -10, SerieC: -25 },
            { Index: '2', SerieA: -25, SerieB: -25, SerieC: 10 },
            { Index: '3', SerieA: 30, SerieB: 0, SerieC: 25 },
            { Index: '4', SerieA: 35, SerieB: 25, SerieC: 45 },
            { Index: '5', SerieA: 0, SerieB: 20, SerieC: 25 }
        ];

        let padding = { left: 15, top: 15, right: 15, bottom: 15 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                flip: true,
                dataField: 'Index',
                tickMarks: {
                    visible: true,
                    interval: 1
                },
                gridLines: {
                    visible: true,
                    interval: 1
                }
            };

        let valueAxis =
            {
                flip: true,
                labels: { horizontalAlignment: 'right' }
            };

        let seriesGroups =
            [
                {
                    orientation: 'horizontal',
                    type: 'stackedcolumn',
                    columnsGapPercent: 50,
                    seriesGapPercent: 0,
                    columnsTopWidthPercent: 0,
                    columnsBottomWidthPercent: 100,
                    series: [
                        { dataField: 'SerieA', displayText: 'Serie A' },
                        { dataField: 'SerieB', displayText: 'Serie B' },
                        { dataField: 'SerieC', displayText: 'Serie C' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Stacked Pyramid chart'} description={''}
                showLegend={true} enableAnimations={false} padding={padding}
                titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                valueAxis={valueAxis} colorScheme={'scheme06'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
