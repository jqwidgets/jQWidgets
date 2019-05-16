import * as React from 'react';
 


import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';
import JqxGauge, { IGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgauge';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

class App extends React.PureComponent<{}, IGaugeProps> {
    private myGauge = React.createRef<JqxGauge>();

    constructor(props: {}) {
        super(props);

        this.showLabelsCheckboxOnChange = this.showLabelsCheckboxOnChange.bind(this);
        this.showRangesCheckboxOnChange = this.showRangesCheckboxOnChange.bind(this);
        this.showBorderCheckboxOnChange = this.showBorderCheckboxOnChange.bind(this);
        this.insideRadioOnChange = this.insideRadioOnChange.bind(this);
        this.outsideRadioOnChange = this.outsideRadioOnChange.bind(this);

        this.state = {
            border: { visible: true },
            caption: { offset: [0, -25], value: 'jQWidgets', position: 'bottom' },
            labels: { visible: true, position: 'inside' },
            ranges: [
                { startValue: 0, endValue: 90, style: { fill: '#e2e2e2', stroke: '#e2e2e2' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                { startValue: 90, endValue: 140, style: { fill: '#f6de54', stroke: '#f6de54' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                { startValue: 140, endValue: 180, style: { fill: '#db5016', stroke: '#db5016' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
                { startValue: 180, endValue: 220, style: { fill: '#d02841', stroke: '#d02841' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 }
            ],
            showRanges: true,
            style: { stroke: '#ffffff', fill: '#ffffff' },
            ticksMajor: { interval: 10, size: '10%' },
            ticksMinor: { interval: 5, size: '5%' }
        }
    }

    public render() {

        return (
            <div style={{ width: '600px' }}>
                <div style={{ float: 'left' }}>
                    <JqxGauge  ref={this.myGauge}
                        value={0} colorScheme={'scheme04'} animationDuration={1500} border={this.state.border}
                        ranges={this.state.ranges} ticksMinor={this.state.ticksMinor} ticksMajor={this.state.ticksMajor}
                        labels={this.state.labels} caption={this.state.caption} showRanges={this.state.showRanges} />
                </div>

                <JqxExpander theme={'material-purple'} style={{ float: 'right' }}
                    width={200} showArrow={false} toggleMode={'none'}>
                    <div>Options</div>
                    <div>
                        <ul style={{ listStyle: 'none', padding: '0px', margin: '10px' }}>
                            <li style={{ padding: '3px', fontFamily: 'Verdana', fontSize: '12px' }}>
                                <JqxCheckBox theme={'material-purple'} onChange={this.showLabelsCheckboxOnChange}
                                    width={150} checked={this.state.labels!.visible}>
                                    Show Labels
                                </JqxCheckBox>
                                <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px', marginLeft: '20px', fontFamily: 'Verdana', fontSize: '12px' }}>
                                    <li>
                                        <JqxRadioButton theme={'material-purple'} onChange={this.insideRadioOnChange}
                                            width={150} checked={true}>
                                            Inside the Gauge
                                        </JqxRadioButton>
                                    </li>
                                    <li>
                                        <JqxRadioButton theme={'material-purple'} style={{ marginTop: '5px' }} onChange={this.outsideRadioOnChange}
                                            width={150}>
                                            Outside the Gauge
                                        </JqxRadioButton>
                                    </li>
                                </ul>
                            </li>
                            <li style={{ padding: '3px', fontFamily: 'Verdana', fontSize: '12px' }}>
                                <JqxCheckBox theme={'material-purple'} onChange={this.showRangesCheckboxOnChange}
                                    width={150} checked={this.state.showRanges}>
                                    Show Ranges
                                </JqxCheckBox>
                            </li>
                            <li style={{ padding: '3px', fontFamily: 'Verdana', fontSize: '12px' }}>
                                <JqxCheckBox theme={'material-purple'} onChange={this.showBorderCheckboxOnChange}
                                    width={150} checked={this.state.border!.visible}>
                                    Show Border
                                </JqxCheckBox>
                            </li>
                        </ul>
                    </div>
                </JqxExpander>
            </div>
        );
    }

    private showLabelsCheckboxOnChange(event: any): void {
        const newLabels = this.state.labels;
        newLabels!.visible = event.args.checked;
        this.setState({
            labels: newLabels
        }, () => {
            this.myGauge.current!.forceUpdate();
        });
    };

    private showRangesCheckboxOnChange(event: any): void {
        this.setState({
            showRanges: event.args.checked
        }, () => {
            this.myGauge.current!.forceUpdate();
        });
    };

    private showBorderCheckboxOnChange(event: any): void {
        this.setState({
            border: { visible: event.args.checked }
        }, () => {
            this.myGauge.current!.forceUpdate()

        });
    };

    private insideRadioOnChange(event: any): void {
        if (event.args.checked) {
            const newLabels = this.state.labels;
            newLabels!.position = 'inside';

            this.setState({
                labels: newLabels
            }, () => {
                this.myGauge.current!.forceUpdate();
            });
        }
    };

    private outsideRadioOnChange(event: any): void {
        if (event.args.checked) {
            const newLabels = this.state.labels;
            newLabels!.position = 'outside';

            this.setState({
                labels: newLabels
            }, () => {
                this.myGauge.current!.forceUpdate();
            });
        }
    };
}

export default App;