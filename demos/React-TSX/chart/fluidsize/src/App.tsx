import * as React from 'react';
 


import './App.css';

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
                    columnsGapPercent: 50,
                    series: [
                        { dataField: 'GDP', displayText: 'GDP per Capita' },
                        { dataField: 'Debt', displayText: 'Debt per Capita' }
                    ],
                    type: 'column',
                    valueAxis:
                    {
                        title: { text: 'GDP & Debt per Capita($)' },
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
                        title: { text: 'Debt (% of GDP)' },
                        unitInterval: 10,
                        visible: false
                    }
                } 
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error) } }),
            title: 'Economic comparison',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Country',
                gridLines: { visible: true }
            }
        };
    }
     
    public render() {
        return (
            <JqxChart style={{ width: '80%', height: '50%' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                seriesGroups={this.state.seriesGroups} colorScheme={'scheme01'} />
        );
    }
}

export default App; 