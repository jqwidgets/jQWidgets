import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    private myChart = React.createRef<JqxChart>();

    constructor(props: {}) {
        super(props);

        const sampleData = [
            { Country: 'China', Population: 1347350000, Percent: 19.18 },
            { Country: 'India', Population: 1210193422, Percent: 17.22 },
            { Country: 'USA', Population: 313912000, Percent: 4.47 },
            { Country: 'Indonesia', Population: 237641326, Percent: 3.38 },
            { Country: 'Brazil', Population: 192376496, Percent: 2.74 }
        ];

        this.state = {
            description: 'Statistics for 2018',
            padding: { left: 20, top: 5, right: 20, bottom: 5 },
            seriesGroups: [
                {
                    columnsGapPercent: 50,
                    orientation: 'horizontal',
                    series: [
                        { dataField: 'Population', displayText: 'Population (millions)', toolTipFormatSettings: { thousandsSeparator: ',' } }
                    ],                   
                    type: 'column'                 
                }
            ],
            source: sampleData,
            title: 'Top 5 most populated countries',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                flip: true,
                labels: {
                    formatFunction: (value: number) => {
                        return String(value / 1000000);
                    },
                    visible: true
                }
            },
            xAxis: {
                dataField: 'Country',
                flip: false,
                gridLines: { visible: true }
            }
        };
    }

    public render() {
        return (
            <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                enableAnimations={true} showLegend={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme01'} />
        );
    }   
}

export default App; 