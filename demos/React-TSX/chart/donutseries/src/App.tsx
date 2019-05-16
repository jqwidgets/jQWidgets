import * as React from 'react';
 

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const dataSourceMobile: any = {
            datafields: [
                { name: 'Browser' },
                { name: 'Share' }
            ],
            datatype: 'csv',
            url: 'mobile_browsers_share_dec2011.txt'
        };
        const dataAdapterMobile: any = new jqx.dataAdapter(dataSourceMobile, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + dataSourceMobile.url + '" : ' + error) } });

        const dataSourceDesktop: any = {
            datafields: [
                { name: 'Browser' },
                { name: 'Share' }
            ],
            datatype: 'csv',
            url: './../sampledata/desktop_browsers_share_dec2011.txt'
        };
        const dataAdapterDesktop: any = new jqx.dataAdapter(dataSourceDesktop, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + dataSourceDesktop.url + '" : ' + error) } });

        this.state = {
            description: '(source: wikipedia.org)',
            legendLayout: { left: 520, top: 170, width: 300, height: 200, flow: 'vertical' },
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    offsetX: 250,
                    series: [
                        {
                            centerOffset: 0,
                            dataField: 'Share',
                            displayText: 'Browser',
                            formatSettings: { sufix: '%', decimalPlaces: 1 },
                            initialAngle: 10,
                            innerRadius: 90,
                            labelRadius: 120,
                            radius: 130
                        }
                    ],
                    source: dataAdapterMobile,
                    type: 'donut',
                    xAxis:
                    {
                        formatSettings: { prefix: 'Mobile ' }
                    }
                },
                {
                    colorScheme: 'scheme02',
                    offsetX: 250,
                    series: [
                        {
                            centerOffset: 0,
                            dataField: 'Share',
                            displayText: 'Browser',
                            formatSettings: { sufix: '%', decimalPlaces: 1 },
                            initialAngle: 10,
                            innerRadius: 30,
                            labelRadius: 120,
                            radius: 70
                        }
                    ],
                    source: dataAdapterDesktop,
                    type: 'donut',
                    xAxis:
                    {
                        formatSettings: { prefix: 'Desktop ' }
                    }
                }
            ],
            source: dataSourceDesktop,
            title: 'Mobile & Desktop browsers share',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} legendLayout={this.state.legendLayout}
                showBorderLine={true} seriesGroups={this.state.seriesGroups} columnSeriesOverlap={false} />
        );
    }
}

export default App; 