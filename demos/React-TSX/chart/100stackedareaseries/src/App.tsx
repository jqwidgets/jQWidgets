import * as React from 'react';
 

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const source = {          
            datafields: [
                { name: 'Date' },
                { name: 'Referral' },
                { name: 'SearchPaid' },
                { name: 'SearchNonPaid' }
            ],
            datatype: 'tab',
            url: 'website_analytics.txt'
        };

        this.state = {
            description: 'Unique monthly site visitors (percentage stacked)',
            seriesGroups: [
                {                
                    series: [
                        { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' },
                        { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
                        { dataField: 'Referral', displayText: 'Referral Traffic' }
                    ],
                    type: 'stackedarea100'
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'Web Traffic Analysis',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: { horizontalAlignment: 'right' },
                title: { text: 'Daily visitors' }
            },
            xAxis: {                
                baseUnit: 'day',
                dataField: 'Date',
                gridLines: { visible: false },
                labels: {
                    formatFunction: (value: any) => {
                        return value.getDate();
                    }
                },
                toolTipFormatFunction: (value: any) => {
                    return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                },
                type: 'date',
                valuesOnTicks: true
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description} titlePadding={this.state.titlePadding}
                source={this.state.source} xAxis={this.state.xAxis} valueAxis={this.state.valueAxis}
                colorScheme={'scheme06'} seriesGroups={this.state.seriesGroups} />
        );
    }
}

export default App; 