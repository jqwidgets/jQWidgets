import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const sampleData: any[] = [
            { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
            { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
            { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
            { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
            { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
            { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
            { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
        ];

        this.state = {
            description: '',
            padding: { left: 5, top: 5, right: 20, bottom: 5 },
            seriesGroups: [
                {
                    orientation: 'horizontal',
                    series: [
                        { dataField: 'Keith', displayText: 'Keith' },
                        { dataField: 'Erica', displayText: 'Erica' },
                        { dataField: 'George', displayText: 'George' }
                    ],
                    seriesGapPercent: 15,
                    type: 'column',
                    valueAxis: {
                        maxValue: 100,
                        minValue: 0,
                        position: 'right',
                        unitInterval: 10
                    }
                }
            ],
            source: sampleData,
            title: 'Axis text rotation example',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Day',
                labels: {
                    angle: 55,
                    horizontalAlignment: 'right',
                    offset: { x: 0, y: -5 },
                    rotationPoint: 'topright',
                    verticalAlignment: 'middle'
                },
                position: 'top'
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                enableAnimations={true} padding={this.state.padding} showToolTips={true}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                seriesGroups={this.state.seriesGroups} colorScheme={'scheme04'} />
        );
    }
}

export default App;