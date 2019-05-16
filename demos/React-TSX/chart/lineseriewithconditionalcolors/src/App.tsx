import * as React from 'react';
 

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'Quarter' },
                { name: 'Change' }
            ],
            datatype: 'csv',
            url: 'us_gdp_2008-2013.csv'
        };

        this.state = {
            description: '(source: Bureau of Economic Analysis)',
            padding: { left: 5, top: 5, right: 10, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        {
                            // Modify this function to return desired colors.
                            // jqxChart will call the function for each data point.
                            // Sequential points that have the same color will be
                            // grouped automatically in a line segment
                            colorFunction: (value: any) => {
                                return (value < 0) ? '#FF0000' : '#00FF00';
                            },
                            dataField: 'Change',
                            displayText: 'Change'
                        }
                    ],
                    type: 'line',
                    valueAxis:
                    {
                        formatFunction: (value: any) => {
                            return value + '%';
                        },
                        title: {
                            text: 'Percentage Change'
                        }
                    }                   
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'U.S. GDP Percentage Change',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Quarter',
                formatFunction: (value: any) => {
                    return value;
                },
                textRotationAngle: -75,
                unitInterval: 1,
                valuesOnTicks: false
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={false} enableAnimations={true} padding={this.state.padding} borderLineWidth={1}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                showBorderLine={true} seriesGroups={this.state.seriesGroups} colorScheme={'scheme05'} />
        );
    }
}

export default App; 