import * as React from 'react';
 

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'Country' },
                { name: 'GDP' },
                { name: 'DebtPercent' },
                { name: 'Debt' }
            ],
            datatype: 'csv',
            url: 'gdp_dept_2010.txt'
        };

        this.state = {
            description: 'GDP and Debt in 2010',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'GDP', displayText: 'GDP per Capita' },
                        { dataField: 'Debt', displayText: 'Debt per Capita' }
                    ],
                    type: 'column',
                    valueAxis:
                    {
                        title: { text: 'GDP & Debt per Capita($)<br>' },
                        unitInterval: 5000,
                        visible: true
                    }
                },
                {
                    series: [
                        { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
                    ],
                    type: 'line',
                    valueAxis:
                    {
                        gridLines: { visible: false },
                        labels: { horizontalAlignment: 'left' },
                        position: 'right',
                        title: { text: 'Debt (% of GDP)' },
                        unitInterval: 10,
                        visible: true
                    }
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'Economic comparison',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: {
                    formatSettings: { sufix: '�' },
                    horizontalAlignment: 'right'
                },
                maxValue: 30,
                minValue: -5,
                title: { text: 'Temperature [C]<br>' },
                unitInterval: 5
            },
            xAxis: {
                dataField: 'Country',
                gridLines: { visible: true },
                valuesOnTicks: false
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                columnSeriesOverlap={false} seriesGroups={this.state.seriesGroups} colorScheme={'scheme01'} />
        );
    }
}

export default App; 