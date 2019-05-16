import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const data = this.generateData();

        this.state = {
            description: 'data source: Eurostat',
            padding: { left: 10, top: 5, right: 10, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        {
                            colorFunction: (value: any, itemIndex: any, serie: any, group: any): string => {
                                if (itemIndex === (data.length - 1)) {
                                    return '#3F3A3B'; // total
                                }
                                return (value < 0) ? '#D30E2F' /* red */ : '#24A037' /*green*/;
                            },
                            dataField: 'population',
                            displayText: 'Population change',
                            summary: 'summary'
                        }
                    ],
                    type: 'waterfall'
                }
            ],
            source: data,
            title: 'EU Population between 2003 and 2014',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: {
                    formatFunction: (value: any): string => {
                        return value / 1000000 + ' M';
                    }
                },
                title: { text: 'Population<br>' },
                unitInterval: 1000000
            },
            xAxis: {
                dataField: 'year',
                displayText: 'Year',
                labels: { angle: 0 },
                type: 'basic',
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={false} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme06'} />
        );
    }

    private generateData(): any[] {
        const data: any[] = [
            { year: 2003, population: 490815046 },
            { year: 2004, population: 492709300 },
            { year: 2005, population: 494774599 },
            { year: 2006, population: 496633373 },
            { year: 2007, population: 498408547 },
            { year: 2008, population: 500418320 },
            { year: 2009, population: 502186144 },
            { year: 2010, population: 503379305 },
            { year: 2011, population: 504961522 },
            { year: 2012, population: 504582506 },
            { year: 2013, population: 505674965 },
            { year: 2014, population: 507416607 },
            { year: 'Total', summary: true }
        ];

        for (let i = data.length - 2; i > 0; i--) {
            data[i].population -= data[i - 1].population;
        }

        return data;
    }
}

export default App;