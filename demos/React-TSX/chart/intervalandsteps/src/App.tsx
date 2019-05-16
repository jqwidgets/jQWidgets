import * as React from 'react';
 

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';

class App extends React.PureComponent<{}, IChartProps> {

    private myChart = React.createRef<JqxChart>();

    constructor(props: {}) {
        super(props);
        this.inputxAxisLabelsStepOnValueChange = this.inputxAxisLabelsStepOnValueChange.bind(this);
        this.inputxAxisGridLinesStepOnValueChange = this.inputxAxisGridLinesStepOnValueChange.bind(this);
        this.inputxAxisTickMarksStepOnValueChange = this.inputxAxisTickMarksStepOnValueChange.bind(this);
        this.inputxAxisUnitIntervalOnValueChange = this.inputxAxisUnitIntervalOnValueChange.bind(this);
        this.inputvalueAxisLabelsStepOnValueChange = this.inputvalueAxisLabelsStepOnValueChange.bind(this);
        this.inputvalueAxisGridLinesStepOnValueChange = this.inputvalueAxisGridLinesStepOnValueChange.bind(this);
        this.inputvalueAxisTickMarksStepOnValueChange = this.inputvalueAxisTickMarksStepOnValueChange.bind(this);
        this.inputvalueAxisUnitIntervalOnValueChange = this.inputvalueAxisUnitIntervalOnValueChange.bind(this);
        this.btnValuesBetweenTicksOnChange = this.btnValuesBetweenTicksOnChange.bind(this);
        this.btnvalueAxisValuesBetweenTicksOnChange = this.btnvalueAxisValuesBetweenTicksOnChange.bind(this);

        const data: any[] = [12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 5, 12, 11];

        this.state = {
            description: '',
            padding: { left: 10, top: 5, right: 10, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { displayText: 'value', opacity: 0.7 }
                    ],
                    type: 'line'
                }
            ],
            source: data,
            title: 'Chart unit interval and steps example',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                gridLines: { step: 1 },
                labels: { step: 1 },
                minValue: 0,
                tickMarks: { step: 1 },
                title: { text: 'Value<br>' },
                unitInterval: 5
            },
            xAxis: {               
                gridLines: { step: 1 },
                labels: { step: 2 },
                tickMarks: { step: 1 },
                unitInterval: 1
            }
        };
    }

    public render() {
        return (
            <div>
                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                    title={this.state.title} description={this.state.description}
                    showLegend={true} enableAnimations={false} padding={this.state.padding}
                    titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis} enableCrosshairs={false}
                    valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} colorScheme={'scheme05'} />

                <table>
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr style={{ height: '50px' }}>
                                            <td colSpan={2}><b>xAxis Settings:</b></td>
                                        </tr>
                                        <tr>
                                            <td>Labels step</td>
                                            <td>
                                                <JqxNumberInput theme={'material-purple'} onValueChanged={this.inputxAxisLabelsStepOnValueChange}
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={2} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Grid lines step</td>
                                            <td>
                                                <JqxNumberInput theme={'material-purple'} onValueChanged={this.inputxAxisGridLinesStepOnValueChange}
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={1} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tick marks step</td>
                                            <td>
                                                <JqxNumberInput theme={'material-purple'} onValueChanged={this.inputxAxisTickMarksStepOnValueChange}
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={1} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Unit interval</td>
                                            <td>
                                                <JqxNumberInput theme={'material-purple'} onValueChanged={this.inputxAxisUnitIntervalOnValueChange}
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={1} />

                                            </td>
                                        </tr>
                                        <tr style={{ height: '40px' }}>
                                            <td colSpan={2}>
                                                <JqxCheckBox theme={'material-purple'} width={200} height={25} onChange={this.btnValuesBetweenTicksOnChange}>
                                                    Value's between ticks
                                                </JqxCheckBox>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <table style={{ paddingLeft: '100px' }}>
                                    <tbody>
                                        <tr style={{ height: '50px' }}><td colSpan={2}><b>valueAxis Settings:</b></td></tr>
                                        <tr>
                                            <td>Labels step</td>
                                            <td>
                                                <JqxNumberInput theme={'material-purple'} onValueChanged={this.inputvalueAxisLabelsStepOnValueChange}
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={1} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Grid lines step</td>
                                            <td>
                                                <JqxNumberInput theme={'material-purple'} onValueChanged={this.inputvalueAxisGridLinesStepOnValueChange}
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={1} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tick marks step</td>
                                            <td>
                                                <JqxNumberInput theme={'material-purple'} onValueChanged={this.inputvalueAxisTickMarksStepOnValueChange}
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={1} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Unit interval</td>
                                            <td>
                                                <JqxNumberInput theme={'material-purple'} onValueChanged={this.inputvalueAxisUnitIntervalOnValueChange}
                                                    width={50} height={25} min={1} max={10}
                                                    inputMode={'simple'} decimalDigits={0}
                                                    digits={2} spinButtons={true} value={5} />

                                            </td>
                                        </tr>
                                        <tr style={{ height: '40px' }}>
                                            <td colSpan={2}>
                                                <JqxCheckBox theme={'material-purple'} width={200} height={25} onChange={this.btnvalueAxisValuesBetweenTicksOnChange}>
                                                    Value's between ticks
                                                </JqxCheckBox>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    private inputxAxisLabelsStepOnValueChange(event: any) {
        const value = event.args.value;
        const newXAxis = this.state.xAxis;
        newXAxis!.labels!.step = parseInt(value, 10);
        this.setState({
            xAxis: newXAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    };

    private inputxAxisGridLinesStepOnValueChange(event: any) {
        const value = event.args.value;
        const newXAxis = this.state.xAxis;
        newXAxis!.gridLines!.step = parseInt(value, 10);
        this.setState({
            xAxis: newXAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    };

    private inputxAxisTickMarksStepOnValueChange(event: any) {
        const value = event.args.value;
        const newXAxis = this.state.xAxis;
        newXAxis!.tickMarks!.step = parseInt(value, 10);
        this.setState({
            xAxis: newXAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    };

    private inputxAxisUnitIntervalOnValueChange(event: any) {
        const value = event.args.value;
        const newXAxis = this.state.xAxis;
        newXAxis!.unitInterval = parseInt(value, 10);
        this.setState({
            xAxis: newXAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    };

    private inputvalueAxisLabelsStepOnValueChange(event: any) {
        const value = event.args.value;
        const newValueAxis = this.state.valueAxis;
        newValueAxis!.labels!.step = parseInt(value, 10);
        this.setState({
            valueAxis: newValueAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    };

    private inputvalueAxisGridLinesStepOnValueChange(event: any) {
        const value = event.args.value;
        const newValueAxis = this.state.valueAxis;
        newValueAxis!.gridLines!.step = parseInt(value, 10);
        this.setState({
            valueAxis: newValueAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    };

    private inputvalueAxisTickMarksStepOnValueChange(event: any) {
        const value = event.args.value;
        const newValueAxis = this.state.valueAxis;
        newValueAxis!.tickMarks!.step = parseInt(value, 10);
        this.setState({
            valueAxis: newValueAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    };

    private inputvalueAxisUnitIntervalOnValueChange(event: any) {
        const value = event.args.value;
        const newValueAxis = this.state.valueAxis;
        newValueAxis!.unitInterval = parseInt(value, 10);
        this.setState({
            valueAxis: newValueAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    };

    private btnValuesBetweenTicksOnChange(event: any) {
        const newXAxis = this.state.xAxis;
        newXAxis!.valuesOnTicks = !event.args.checked;
        this.setState({
            xAxis: newXAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    };

    private btnvalueAxisValuesBetweenTicksOnChange(event: any) {
        const newValueAxis = this.state.valueAxis;
        newValueAxis!.valuesOnTicks = !event.args.checked;
        this.setState({
            valueAxis: newValueAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    };
}

export default App; 