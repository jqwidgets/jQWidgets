import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';


class App extends React.Component {
    componentDidMount() {
        this.refs.dropDownColors.on('change', (event) => {
            let value = event.args.item.value;
            this.refs.myChart.colorScheme(value);
            this.refs.myChart.update();
        });
        this.refs.dropDownSeries.on('change', (event) => {
            let args = event.args;
            if (args) {
                let value = args.item.value;
                this.refs.myChart.seriesGroups()[0].type = value;
                this.refs.myChart.update();
            }
        });

        let data = this.refs.myChart.source();
        let timer = setInterval( () => {
            let max = 800;
            if (data.length >= 60)
                data.splice(0, 1);
            let timestamp = new Date();
            timestamp.setSeconds(timestamp.getSeconds());
            timestamp.setMilliseconds(0);
            data.push({ timestamp: timestamp, value: Math.max(100, (Math.random() * 1000) % max) });
            this.refs.myChart.update();
        }, 1000);
    }
    render() {
        let data = [];
        let max = 800;
        let timestamp = new Date();
        for (let i = 0; i < 60; i++) {
            timestamp.setMilliseconds(0);
            timestamp.setSeconds(timestamp.getSeconds() - 1);
            data.push({ timestamp: new Date(timestamp.valueOf()), value: Math.max(100, (Math.random() * 1000) % max) });
        }
        data = data.reverse();

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'timestamp',
                type: 'date',
                baseUnit: 'second',
                unitInterval: 5,
                formatFunction: (value) =>  {
                    return $.jqx.dataFormat.formatdate(value, 'hh:mm:ss', 'en-us');
                },
                gridLines: { step: 2 },
                valuesOnTicks: true,
                labels: { angle: -45, offset: { x: -17, y: 0 } }
            };

        let seriesGroups =
            [
                {
                    type: 'line',
                    columnsGapPercent: 50,
                    alignEndPointsWithIntervals: true,
                    valueAxis:
                    {
                        minValue: 0,
                        maxValue: 1000,
                        title: { text: 'Index Value' }
                    },
                    series: [
                        { dataField: 'value', displayText: 'value', opacity: 1, lineWidth: 2, symbolType: 'circle', fillColorSymbolSelected: 'white', symbolSize: 4 }
                    ]
                }
            ];

        let colorsSchemesList = ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'];
        let seriesList = ['line', 'area', 'stepline', 'steparea', 'splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline'];
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Live updates demo'} description={''} animationDuration={1000}
                    showLegend={true} enableAnimations={false} padding={padding} 
                    titlePadding={titlePadding} source={data} xAxis={xAxis}
                    colorScheme={'scheme03'} seriesGroups={seriesGroups} enableAxisTextAnimation={true}
                />
                <table style={{ width: 680 }}>
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: 50 }}>
                                <p>Select the series type:</p>
                                <JqxDropDownList ref='dropDownSeries'
                                    width={200} height={25} selectedIndex={0}
                                    dropDownHeight={100} source={seriesList}
                                />
                            </td>
                            <td>
                                <p>Select color scheme:</p>
                                <JqxDropDownList ref='dropDownColors'
                                    width={200} height={25} selectedIndex={0}
                                    dropDownHeight={100} source={colorsSchemesList}
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
