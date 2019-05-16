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
            url: 'desktop_browsers_share_dec2011.txt'
        };

        this.state = {
            description: '(source: wikipedia.org)',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        {
                            centerOffset: 0,
                            dataField: 'Share',
                            displayText: 'Browser',
                            formatSettings: { sufix: '%', decimalPlaces: 1 },
                            initialAngle: 15,
                            innerRadius: 70,
                            labelRadius: 120,
                            radius: 170
                        }
                    ],
                    showLabels: true,
                    type: 'donut'
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'Desktop browsers share',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={false} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source}
                showBorderLine={true} seriesGroups={this.state.seriesGroups} colorScheme={'scheme02'} />
        );
    }
}

export default App; 