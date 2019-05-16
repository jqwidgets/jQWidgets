import * as React from 'react';
 

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'Year' },
                { name: 'Northeast' },
                { name: 'South' },
                { name: 'Midwest' },
                { name: 'West' },
                { name: 'UnitedStates' }
            ],
            datatype: 'tsv',
            url: 'us_homeownership_rate.csv'
        };

        const bands = () => {
            const recessions = [
                    { from: 1969.91, to: 1970.83 },
                    { from: 1973.83, to: 1975.25 },
                    { from: 1980, to: 1980.58 },
                    { from: 1981.58, to: 1982.83 },
                    { from: 1990.58, to: 1991.25 },
                    { from: 2001.25, to: 2001.83 },
                    { from: 2007.91, to: 2009.5 }
                ];

            const bandsArr = [];

            for (const recession of recessions) {
                bandsArr.push({ minValue: recession.from, maxValue: recession.to, fillColor: 'red', opacity: 0.2 });
            }

            return bandsArr;
        }
        this.state = {
            description: '(sources: US Census bureau, Wikipedia)',
            padding: { left: 5, top: 5, right: 10, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'Northeast', displayText: 'NorthEast' },
                        { dataField: 'South' },
                        { dataField: 'Midwest', displayText: 'MidWest' },
                        { dataField: 'West' },
                        { dataField: 'UnitedStates', displayText: 'United States' },
                    ],
                    type: 'line'
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'US Home ownership rate & recessions(1965 - 2019)',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                flip: false,
                labels: {
                    formatSettings: { sufix: '%' }
                },
                title: { text: 'Homeownership rate<br>' }
            },
            xAxis: {
                bands: bands(), // attach the color bands to the xAxis
                dataField: 'Year',
                flip: false,
                labels: { angle: -90 },
                tickMarks: {
                    color: '#BCBCBC',
                    interval: 1,
                    visible: true

                },
                unitInterval: 1
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme03'} />
        );
    }
}

export default App; 