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

        const legendFormatFunction = (value: string): string => {
            if (value === 'Debt per Capita') {
                return 'Debt per<br>Capita';
            }
            if (value === 'GDP per Capita') {
                return 'GDP per<br>Capita';
            }
            if (value === 'Debt (% of GDP)') {
                return 'Debt<br>(% of GDP)';
            }
            return value;
        };

        this.state = {
            description: 'GDP and Debt in 2018',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    columnsGapPercent: 50,
                    series: [
                        { dataField: 'GDP', displayText: 'GDP per Capita', legendFormatFunction },
                        { dataField: 'Debt', displayText: 'Debt per Capita', legendFormatFunction }
                    ],
                    type: 'column',
                    valueAxis: {
                        title: { text: 'GDP & Debt per Capita($)' },
                        unitInterval: 5000
                    }
                },
                {
                    series: [
                        { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)', legendFormatFunction }
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
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'Economic comparison',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 0 },
            xAxis: {
                dataField: 'Country',
                formatFunction: (value: any, dataIndex: any): string => {
                    if (value === 'USA') {
                        return 'United<br>States';
                    }
                    return value;
                },
                title: { verticalAlignment: 'middle' }
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                seriesGroups={this.state.seriesGroups} colorScheme={'scheme01'} />
        );
    }
}

export default App;