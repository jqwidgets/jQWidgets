import * as React from 'react';
 


import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const source: any =
        {
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
            description: 'Unique daily visitors (stacked)',
            padding: { left: 10, top: 5, right: 10, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'SearchNonPaid', displayText: 'Desktop Search' },
                        { dataField: 'SearchPaid', displayText: 'Mobile Search' },
                        { dataField: 'Referral', displayText: 'Social media' }
                    ],
                    type: 'stackedarea'             
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'Website traffic analysis',
            titlePadding: { left: 10, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                maxValue: 4500,
                minValue: 0,
                title: { text: 'Daily visitors by source<br>' },
                unitInterval: 500
            },
            xAxis: {
                baseUnit: 'day',
                dataField: 'Date',
                labels: {
                    formatFunction: (value: any): string => {
                        return value.getDate();
                    }
                },
                toolTipFormatFunction: (value: any): string => {
                    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme03'} />
        );
    }
}

export default App;