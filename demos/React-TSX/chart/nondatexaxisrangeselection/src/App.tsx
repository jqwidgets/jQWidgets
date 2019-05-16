import * as React from 'react';
 


import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'Date' },
                { name: 'Open' },
                { name: 'High' },
                { name: 'Low' },
                { name: 'Close' },
                { name: 'Volume' },
                { name: 'AdjClose' }
            ],
            datatype: 'csv',
            url: 'TSLA_stockprice.csv'
        };
        const toolTipCustomFormatFn = (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any): string => {
            return 'Index: ' + itemIndex + ", Value: " + value;
        };

        this.state = {
            description: 'In this example the range selector works with (non-date) axis',
            padding: { left: 5, top: 5, right: 20, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'Close', lineWidth: 1 }
                    ],
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    type: 'line',
                    valueAxis:
                    {
                        flip: false,
                        title: { text: 'Value<br><br>' }
                    }
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
            title: 'Range selector with regular x-axis',
            xAxis: {
                flip: false,
                maxValue: 550,
                minValue: 175,
                rangeSelector: {
                    backgroundColor: 'white',
                    gridLines: { visible: false },
                    padding: { top: 20, bottom: 0 },
                    serieType: 'area',
                    size: 110                
                },
                valuesOnTicks: true
            }
        };
    }

    public render() {
        return (
            <JqxChart style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                showLegend={false} enableAnimations={true} padding={this.state.padding}
                source={this.state.source} xAxis={this.state.xAxis} enableCrosshairs={true}
                animationDuration={1500} seriesGroups={this.state.seriesGroups} colorScheme={'scheme02'} />
        );
    }
}

export default App;