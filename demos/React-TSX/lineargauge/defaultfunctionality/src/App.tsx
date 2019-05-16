import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox, { ICheckBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';
import JqxLinearGauge, { ILinearGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlineargauge';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

export interface IState extends ILinearGaugeProps {
    verticalChecked: ICheckBoxProps['checked'];
    showTicksChecked: ICheckBoxProps['checked'];
    showLabelsChecked: ICheckBoxProps['checked'];
    showRangesChecked: ICheckBoxProps['checked'];
    showBackgroundChecked: ICheckBoxProps['checked'];
}

class App extends React.PureComponent<{}, IState> {

    private myLinearGauge = React.createRef<JqxLinearGauge>();
    private bothLabelsRadioButton = React.createRef<JqxRadioButton>();
    private bothTicksRadioButton = React.createRef<JqxRadioButton>();

    constructor(props: {}) {
        super(props);
        this.isVerticalCheckboxOnChange = this.isVerticalCheckboxOnChange.bind(this);
        this.showTicksCheckboxOnChange = this.showTicksCheckboxOnChange.bind(this);
        this.showLabelsCheckboxOnChange = this.showLabelsCheckboxOnChange.bind(this);
        this.showRangesCheckboxOnChange = this.showRangesCheckboxOnChange.bind(this);
        this.showBackgroundCheckboxOnChange = this.showBackgroundCheckboxOnChange.bind(this);
        this.labelsNearRadioOnChecked = this.labelsNearRadioOnChecked.bind(this);
        this.labelsFarRadioOnChecked = this.labelsFarRadioOnChecked.bind(this);
        this.labelsBothRadioOnChecked = this.labelsBothRadioOnChecked.bind(this);
        this.ticksNearRadioOnChecked = this.ticksNearRadioOnChecked.bind(this);
        this.ticksFarRadioOnChecked = this.ticksFarRadioOnChecked.bind(this);
        this.ticksBothRadioOnChecked = this.ticksBothRadioOnChecked.bind(this);
        this.showAnimationButtonOnClick = this.showAnimationButtonOnClick.bind(this);

        this.state = {
            background: { visible: true },
            height: '300px',
            labels: { interval: 20 },
            orientation: 'vertical',
            pointer: { size: '6%' },
            ranges: [
                { startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157' } },
                { startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200' } },
                { startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800' } }
            ],
            showBackgroundChecked: true,
            showLabelsChecked: true,
            showRanges: true,
            showRangesChecked: true,
            showTicksChecked: true,
            ticksMajor: { visible: true, interval: 10, size: '10%' },
            ticksMinor: { visible: true, size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } },
            verticalChecked: true,
            width: '100px'
        }
    }

    public componentDidMount() {     
        this.myLinearGauge.current!.setOptions({ value: 50 });
        this.bothLabelsRadioButton.current!.setOptions({ checked: true });
        this.bothTicksRadioButton.current!.setOptions({ checked: true });
    }

    public render() {

        return (
            <div>
                <JqxLinearGauge ref={this.myLinearGauge} style={{ marginLeft: '20px', float: 'left' }}
                    width={this.state.width} height={this.state.height} orientation={this.state.orientation}
                    ticksMajor={this.state.ticksMajor} ticksMinor={this.state.ticksMinor} max={60} background={this.state.background}
                    labels={this.state.labels} showRanges={this.state.showRanges} pointer={this.state.pointer}
                    ticksPosition={this.state.ticksPosition} colorScheme={'scheme05'} ranges={this.state.ranges} />

                <div style={{ marginLeft: '330px' }}>
                    <JqxExpander theme={'material-purple'} width={280} height={320} toggleMode={'none'} showArrow={false}>
                        <div className="demo-options-header">Options</div>
                        <div>
                            <JqxCheckBox theme={'material-purple'} style={{ marginTop: '15px' }} onChange={this.isVerticalCheckboxOnChange} checked={this.state.verticalChecked}>Is Vertical</JqxCheckBox>
                            <br />
                            <div>
                                <table style={{ float: 'left', marginLeft: '10px' }}>
                                    <tbody>
                                        <tr>
                                            <td>Labels position:</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <JqxRadioButton theme={'material-purple'} onChecked={this.labelsNearRadioOnChecked} groupName={'labels-position'}>Near</JqxRadioButton>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <JqxRadioButton theme={'material-purple'} onChecked={this.labelsFarRadioOnChecked} groupName={'labels-position'}>Far</JqxRadioButton>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <JqxRadioButton theme={'material-purple'} ref={this.bothLabelsRadioButton} onChecked={this.labelsBothRadioOnChecked} groupName={'labels-position'}>Both</JqxRadioButton>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table style={{ float: 'right', marginRight: '10px' }}>
                                    <tbody>
                                        <tr>
                                            <td>Ticks position:</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <JqxRadioButton theme={'material-purple'} onChecked={this.ticksNearRadioOnChecked} groupName={'ticks-position'}>Near</JqxRadioButton>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <JqxRadioButton theme={'material-purple'} onChecked={this.ticksFarRadioOnChecked} groupName={'ticks-position'}>Far</JqxRadioButton>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <JqxRadioButton theme={'material-purple'} ref={this.bothTicksRadioButton} onChecked={this.ticksBothRadioOnChecked} groupName={'ticks-position'}>Both</JqxRadioButton>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style={{ clear: 'both' }} />
                            </div>
                            <br />
                            <JqxCheckBox theme={'material-purple'} onChange={this.showTicksCheckboxOnChange} checked={this.state.showTicksChecked}>Show Ticks</JqxCheckBox>
                            <JqxCheckBox theme={'material-purple'} onChange={this.showLabelsCheckboxOnChange} checked={this.state.showLabelsChecked}>Show Labels</JqxCheckBox>
                            <JqxCheckBox theme={'material-purple'} onChange={this.showRangesCheckboxOnChange} checked={this.state.showRangesChecked}>Show Ranges</JqxCheckBox>
                            <JqxCheckBox theme={'material-purple'} onChange={this.showBackgroundCheckboxOnChange} checked={this.state.showBackgroundChecked}>Show Background</JqxCheckBox>
                            <br />
                            <JqxButton theme={'material-purple'} style={{ marginLeft: '90px', textAlign: 'center' }} onClick={this.showAnimationButtonOnClick} width={100} height={20}>Reset Value</JqxButton>
                        </div>
                    </JqxExpander>
                </div>
            </div>
        );
    }

    private isVerticalCheckboxOnChange(event: any): void {
        if (event.args.checked) {
            this.setState({
                height: '300px',
                orientation: 'vertical',
                verticalChecked: true,
                width: '100px'
            });
        } else {
            this.setState({
                height: '100px',
                orientation: 'horizontal',
                verticalChecked: false,
                width: '300px'
            });
        }
    };

    private showTicksCheckboxOnChange(event: any): void {
        if (event.args.checked) {
            this.setState({
                showTicksChecked: true,
                ticksMajor: { visible: true, size: '10%', interval: 10 },
                ticksMinor: { visible: true, size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } }
            });
        } else {
            this.setState({
                showTicksChecked: false,
                ticksMajor: { visible: false },
                ticksMinor: { visible: false }
            });
        }
    };

    private showLabelsCheckboxOnChange(event: any): void {
        if (event.args.checked) {
            this.setState({
                labels: { visible: true, interval: 20 },
                showLabelsChecked: true
            });
        } else {
            this.setState({
                labels: { visible: false },
                showLabelsChecked: false
            });
        }
    };

    private showRangesCheckboxOnChange(event: any): void {
        if (event.args.checked) {
            this.setState({
                showRanges: true,
                showRangesChecked: true
            });
        } else {
            this.setState({
                showRanges: false,
                showRangesChecked: false
            });
        }
    };

    private showBackgroundCheckboxOnChange(event: any): void {
        if (event.args.checked) {
            this.setState({
                background: { visible: true },
                showBackgroundChecked: true
            });
        } else {
            this.setState({              
                background: { visible: false },
                showBackgroundChecked: false
            });
        }
    };

    private labelsNearRadioOnChecked(): void {
        this.setState({
            labels: { interval: 20, position: 'near' }
        });
    };

    private labelsFarRadioOnChecked(): void {
         this.setState({
            labels: { interval: 20, position: 'far' }
         });
    };

    private labelsBothRadioOnChecked(): void {
         this.setState({
            labels: { interval: 20, position: 'both' }
         });
    };

    private ticksNearRadioOnChecked(): void {
        this.setState({
            ticksPosition: 'near'
        });
    };

    private ticksFarRadioOnChecked(): void {
        this.setState({
            ticksPosition: 'far'
        });
    };

    private ticksBothRadioOnChecked(): void {
        this.setState({
            ticksPosition: 'both'
        });
    };

    private showAnimationButtonOnClick(): void {
        this.myLinearGauge.current!.setOptions({ animationDuration: 0 });
        this.myLinearGauge.current!.setOptions({ value: -60 });
        this.myLinearGauge.current!.setOptions({ animationDuration: 1000 });
        this.myLinearGauge.current!.setOptions({ value: 50 });
    };
}

export default App;