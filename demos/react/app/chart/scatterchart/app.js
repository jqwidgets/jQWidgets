import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.dropDownSerie1Symbol.on('change', (event) => {
            let value = event.args.item.value;
            this.refs.myChart.seriesGroups()[0].series[0].symbolType = value;
            this.refs.myChart.update();
        });
        this.refs.dropDownSerie2Symbol.on('change', (event) => {
            let value = event.args.item.value;
            this.refs.myChart.seriesGroups()[0].series[1].symbolType = value;
            this.refs.myChart.update();
        });
    }
    render() {
        let sampleData = [
            { City: 'New York', SalesQ1: 330500, SalesQ2: 210500, YoYGrowth: 1.05 },
            { City: 'London', SalesQ1: 120000, SalesQ2: 169000, YoYGrowth: 1.15 },
            { City: 'Paris', SalesQ1: 205000, SalesQ2: 275500, YoYGrowth: 1.45 },
            { City: 'Tokyo', SalesQ1: 187000, SalesQ2: 130100, YoYGrowth: 0.45 },
            { City: 'Berlin', SalesQ1: 187000, SalesQ2: 113000, YoYGrowth: 1.65 },
            { City: 'San Francisco', SalesQ1: 142000, SalesQ2: 102000, YoYGrowth: 1.25 },
            { City: 'Chicago', SalesQ1: 171000, SalesQ2: 124000, YoYGrowth: 0.75 }
        ];

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'City',
                valuesOnTicks: false
            };

        let valueAxis =
            {
                minValue: 50000,
                maxValue: 350000,
                unitInterval: 50000,
                title: { text: 'Sales ($)<br>' },
                labels: {
                    formatSettings: { prefix: '$', thousandsSeparator: ',' },
                    horizontalAlignment: 'right'
                }
            };

        let seriesGroups =
            [
                {
                    type: 'scatter',
                    series: [
                        { dataField: 'SalesQ1', symbolSize: 20, symbolType: 'circle', displayText: 'Sales in Q1' },
                        { dataField: 'SalesQ2', symbolSize: 20, symbolType: 'diamond', displayText: 'Sales in Q2' }
                    ]
                }
            ];
        let symbolsList = ['circle', 'diamond', 'square', 'triangle_up', 'triangle_down', 'triangle_left', 'triangle_right'];
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Sales by City in Q1 & Q2'} description={''}
                    showLegend={true} enableAnimations={true} padding={padding}
                    titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                    valueAxis={valueAxis} colorScheme={'scheme01'} seriesGroups={seriesGroups}
                />
                <table style={{ width: 550 }}>
                    <tbody>
                        <tr>
                            <td>
                                <p>Select Serie 1 Symbol:</p>
                                <JqxDropDownList ref='dropDownSerie1Symbol'
                                    width={200} height={25} selectedIndex={2}
                                    dropDownHeight={100} source={symbolsList}
                                />
                            </td>
                            <td>
                                <p>Select Serie 2 Symbol:</p>
                                <JqxDropDownList ref='dropDownSerie2Symbol'
                                    width={200} height={25} selectedIndex={1}
                                    dropDownHeight={100} source={symbolsList}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
