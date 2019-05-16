import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const days: any[] = [
            { Day: 'Monday' },
            { Day: 'Tuesday' },
            { Day: 'Wednesday' },
            { Day: 'Thursday' },
            { Day: 'Friday' },
            { Day: 'Saturday' },
            { Day: 'Sunday' }
        ];

        const Keith: any[] = [
            { Minutes: 30 },
            { Minutes: 25 },
            { Minutes: 30 },
            { Minutes: 35 },
            { Minutes: 20 },
            { Minutes: 30 },
            { Minutes: 60 }
        ];

        const Erica: any[] = [
            { Minutes: 15 },
            { Minutes: 25 },
            { Minutes: 20 },
            { Minutes: 25 },
            { Minutes: 20 },
            { Minutes: 20 },
            { Minutes: 45 }
        ];

        const George: any[] = [
            { Minutes: 25 },
            { Minutes: 30 },
            { Minutes: 25 },
            { Minutes: 45 },
            { Minutes: 25 },
            { Minutes: 30 },
            { Minutes: 90 }
        ];

        this.state = {
            description: 'Sample line serie with missing and invalid values',
            padding: { left: 5, top: 5, right: 40, bottom: 5 },
            seriesGroups: [
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
            ],
            source: days,
            title: 'Line serie with missing points',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {              
                title: { text: 'Time in minutes' },
                visible: true
            },
            xAxis: {
                dataField: 'Day',
                gridLines: { visible: true }
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme02'} />
        );
    }
}

export default App; 