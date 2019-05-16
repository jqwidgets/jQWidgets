import * as React from 'react';
 


import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'Browser' },
                { name: 'Share' }
            ],
            datatype: 'csv',
            url: 'mobile_browsers_share_dec2011.txt'
        };

        this.state = {
            description: '(source: wikipedia.org)',
            legendLayout: { left: 700, top: 160, width: 300, height: 200, flow: 'vertical' },
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        {
                            centerOffset: 0,
                            dataField: 'Share',
                            displayText: 'Browser',
                            formatFunction: (value: any) => {
                                if (isNaN(value)) {
                                    return value;
                                }
                                return parseFloat(value) + '%';
                            },
                            initialAngle: 15,
                            labelRadius: 170,
                            radius: 145
                        }
                    ],
                    showLabels: true,
                    type: 'pie'                  
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'Mobile browsers share',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} showBorderLine={true}
                seriesGroups={this.state.seriesGroups} colorScheme={'scheme03'} legendLayout={this.state.legendLayout} />
        );
    }
}

export default App;