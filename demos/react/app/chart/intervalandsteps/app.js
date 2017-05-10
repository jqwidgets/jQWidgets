import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.inputxAxisUnitInterval.on('valueChanged', (event) => {
            let value = event.args.value;
            this.refs.myChart.xAxis().unitInterval = parseInt(value);
            this.refs.myChart.refresh();
        });

        this.refs.inputxAxisLabelsStep.on('valueChanged', (event) => {
            let value = event.args.value;
            this.refs.myChart.xAxis().labels.step = parseInt(value);
            this.refs.myChart.refresh();
        });

        this.refs.inputxAxisTickMarksStep.on('valueChanged', (event) => {
            let value = event.args.value;
            this.refs.myChart.xAxis().tickMarks.step = parseInt(value);
            this.refs.myChart.refresh();
        });

        this.refs.inputxAxisGridLinesStep.on('valueChanged', (event) => {
            let value = event.args.value;
            this.refs.myChart.xAxis().gridLines.step = parseInt(value);
            this.refs.myChart.refresh();
        });

        this.refs.inputvalueAxisUnitInterval.on('valueChanged', (event) => {
            let value = event.args.value;
            this.refs.myChart.valueAxis().unitInterval = parseInt(value);
            this.refs.myChart.refresh();
        });

        this.refs.inputvalueAxisLabelsStep.on('valueChanged', (event) => {
            let value = event.args.value;
            this.refs.myChart.valueAxis().labels.step = parseInt(value);
            this.refs.myChart.refresh();
        });

        this.refs.inputvalueAxisTickMarksStep.on('valueChanged', (event) => {
            let value = event.args.value;
            this.refs.myChart.valueAxis().tickMarks.step = parseInt(value);
            this.refs.myChart.refresh();
        });

        this.refs.inputvalueAxisGridLinesStep.on('valueChanged', (event) => {
            let value = event.args.value;
            this.refs.myChart.valueAxis().gridLines.step = parseInt(value);
            this.refs.myChart.refresh();
        });

        this.refs.btnValuesBetweenTicks.on('change', (event) => {
            this.refs.myChart.xAxis().valuesOnTicks = !event.args.checked;
            this.refs.myChart.refresh();
        });

        this.refs.btnvalueAxisValuesBetweenTicks.on('change', (event) => {
            this.refs.myChart.valueAxis().valuesOnTicks = !event.args.checked;
            this.refs.myChart.refresh();
        });
    }
    render() {
        let data = [12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 5, 12, 11];

        let padding = { left: 10, top: 5, right: 10, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                unitInterval: 1,
                gridLines: { step: 1 },
                tickMarks: { step: 1 },
                labels: { step: 2 }
            };

        let valueAxis =
            {
                title: { text: 'Value<br>' },
                unitInterval: 5,
                gridLines: { step: 1 },
                tickMarks: { step: 1 },
                labels: { step: 1 },
                minValue: 0
            };

        let seriesGroups =
            [
                {
                    type: 'line',
                    series:
                    [
                        { displayText: 'value', opacity: 0.7 }
                    ]
                }
            ];
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'jqxChart unit interval and steps example'} description={''}
                    showLegend={true} enableAnimations={false} padding={padding} enableCrosshairs={false}
                    titlePadding={titlePadding} source={data} xAxis={xAxis}
                    valueAxis={valueAxis} colorScheme={'scheme05'} seriesGroups={seriesGroups}
                />
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr style={{ height: 50 }}><td colSpan='2'><b>xAxis() settings:</b></td></tr>
                                        <tr>
                                            <td>Labels step</td>
                                            <td>
                                                <JqxNumberInput ref='inputxAxisLabelsStep'
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={2}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Grid lines step</td>
                                            <td>
                                                <JqxNumberInput ref='inputxAxisGridLinesStep'
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={1}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tick marks step</td>
                                            <td>
                                                <JqxNumberInput ref='inputxAxisTickMarksStep'
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={1}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Unit interval</td>
                                            <td>
                                                <JqxNumberInput ref='inputxAxisUnitInterval'
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={1}
                                                />    
                                            </td>
                                        </tr>
                                        <tr style={{ height: 40 }}>
                                            <td colSpan='2'>
                                                <JqxCheckBox ref='btnValuesBetweenTicks' value='Values between ticks'
                                                    width={200} height={25}
                                                    hasThreeStates={false} checked={false}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <table style={{ paddingLeft: 100 }}>
                                    <tbody>
                                        <tr style={{ height: 50 }}><td colSpan='2'><b>valueAxis() settings:</b></td></tr>
                                        <tr>
                                            <td>Labels step</td>
                                            <td>
                                                <JqxNumberInput ref='inputvalueAxisLabelsStep'
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={1}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Grid lines step</td>
                                            <td>
                                                <JqxNumberInput ref='inputvalueAxisGridLinesStep'
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={1}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tick marks step</td>
                                            <td>
                                                <JqxNumberInput ref='inputvalueAxisTickMarksStep'
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={1}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Unit interval</td>
                                            <td>
                                                <JqxNumberInput ref='inputvalueAxisUnitInterval'
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={5}
                                                />
                                            </td>
                                        </tr>
                                        <tr style={{ height: 40 }}>
                                            <td colSpan='2'>
                                                <JqxCheckBox ref='btnvalueAxisValuesBetweenTicks' value='Values between ticks'
                                                    width={200} height={25}
                                                    hasThreeStates={false} checked={false}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
