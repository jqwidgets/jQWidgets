import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.dropDownColors.on('change', (event) => {
            let value = event.args.item.value;
            this.refs.myChart.colorScheme(value);
            this.refs.myChart.update();
        });
        this.refs.btnPauseResume.on('click', (event) => {
            if (timer) {
                clearInterval(timer);
                this.refs.btnPauseResume.val('Resume');
                timer = undefined;
            }
            else {
                timer = setInterval(timerFunction, this.refreshTimeout());
                this.refs.btnPauseResume.val('Pause');
            }
        });

        let data = this.refs.myChart.source();
        let timerFunction = ()  => {
            data.splice(0, 1);
            data.push({
                key: data[data.length - 1].key + 1,
                value1: (Math.random() * 200) % 200 + 200,
                value2: (Math.random() * 200) % 200 + 500,
                value3: (Math.random() * 200) % 200,
            });
            this.refs.myChart.update();
        };
        let timer = setInterval(timerFunction, this.refreshTimeout());
    }
    refreshTimeout() {
        let timeout = 100;
        let response = new $.jqx.response();
        if (response && response.device) {
            if (response.device.type == 'Tablet') {
                timeout = 150;
            }
            else if (response.device.width < 800 ||
                response.device.height < 500 ||
                response.device.type == 'Phone' ||
                (response.browser.svg == false && response.browser.canvas == false)
            ) {
                timeout = 1000;
            }
        }
        return timeout;
    }
    render() {      
        let data = [];
        let max = 200;
        for (let i = 0; i < 20; i++) {
            data.push({
                key: i,
                value1: (Math.random() * 200) % 200 + 200,
                value2: (Math.random() * 200) % 200 + 500,
                value3: (Math.random() * 200) % 200,
            });
        }

        let padding = { left: 10, top: 10, right: 10, bottom: 10 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'key',
                unitInterval: 1,
                valuesOnTicks: true,
                gridLines: { visible: false }
            };

        let valueAxis =
            {
                minValue: 0,
                maxValue: 750,
                title: { text: 'Index Value<br>' },
            };

        let seriesGroups =
            [
                {
                    type: 'line',
                    useGradientColors: false,
                    series: [
                        { dataField: 'value1', displayText: 'value1', lineWidth: 2, symbolType: 'circle' }
                    ]
                },
                {
                    type: 'spline',
                    useGradientColors: false,
                    columnsGapPercent: 50,
                    alignEndPointsWithIntervals: true,
                    series: [
                        { dataField: 'value2', displayText: 'value2' }
                    ]
                },
                {
                    type: 'column',
                    useGradientColors: false,
                    columnsGapPercent: 50,
                    alignEndPointsWithIntervals: true,
                    series: [
                        { dataField: 'value3', displayText: 'value3' }
                    ]
                }
            ];

        let colorsSchemesList = ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'];
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Live updates performance'} description={'Data changes every ' + this.refreshTimeout() + ' milliseconds'}
                    showLegend={true} enableAnimations={false} padding={padding}
                    titlePadding={titlePadding} source={data} xAxis={xAxis}
                    valueAxis={valueAxis} colorScheme={'scheme01'} seriesGroups={seriesGroups}
                />
                <table style={{ width: 680 }}>
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: 50 }}>
                                <p>Pause / Resume updates:</p>
                                <JqxButton ref='btnPauseResume' value='Pause' width={160} />
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
