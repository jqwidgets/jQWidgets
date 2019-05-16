import * as React from 'react';
 

import JqxBulletChart, { IBulletChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbulletchart';
import JqxCheckBox, { ICheckBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';
import JqxRadioButton, { IRadioButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

export interface IState extends IBulletChartProps {
    source: IDropDownListProps["source"];
    showLabelsChecked: ICheckBoxProps["checked"];
    enableAnimationChecked: ICheckBoxProps["checked"];
    disabledChecked: ICheckBoxProps["checked"];
    rtlChecked: ICheckBoxProps["checked"];
    nearRadioChecked: IRadioButtonProps["checked"];
    farRadioChecked: IRadioButtonProps["checked"];
    bothRadioChecked: IRadioButtonProps["checked"];
    currencyRadioChecked: IRadioButtonProps["checked"];
    percentRadioChecked: IRadioButtonProps["checked"];
    noneRadioChecked: IRadioButtonProps["checked"];
    pointerDropDownSelected: IDropDownListProps["selectedIndex"];
    targetDropDownSelected: IDropDownListProps["selectedIndex"];
}

class App extends React.PureComponent<{}, IState> {

    private myBulletChart = React.createRef<JqxBulletChart>();
    private showLabelsCheckbox = React.createRef<JqxCheckBox>();
    private disabledCheckbox = React.createRef<JqxCheckBox>();
    private rtlCheckbox = React.createRef<JqxCheckBox>();
    private enableAnimationCheckbox = React.createRef<JqxCheckBox>();
    private nearRadio = React.createRef<JqxRadioButton>();
    private farRadio = React.createRef<JqxRadioButton>();
    private bothRadio = React.createRef<JqxRadioButton>();
    private currencyRadio = React.createRef<JqxRadioButton>();
    private percentRadio = React.createRef<JqxRadioButton>();
    private noneRadio = React.createRef<JqxRadioButton>();
    private valueSlider = React.createRef<JqxSlider>();
    private pointerDropDownList = React.createRef<JqxDropDownList>();
    private targetDropDownList = React.createRef<JqxDropDownList>();

    constructor(props: {}) {
        super(props);
        this.showLabelsCheckboxChange = this.showLabelsCheckboxChange.bind(this);
        this.nearRadioChecked = this.nearRadioChecked.bind(this);
        this.farRadioChecked = this.farRadioChecked.bind(this);
        this.bothRadioChecked = this.bothRadioChecked.bind(this);
        this.currencyRadioChecked = this.currencyRadioChecked.bind(this);
        this.percentRadioChecked = this.percentRadioChecked.bind(this);
        this.noneRadioChecked = this.noneRadioChecked.bind(this);
        this.enableAnimationCheckboxChange = this.enableAnimationCheckboxChange.bind(this);
        this.valueSliderChange = this.valueSliderChange.bind(this);
        this.pointerDropDownListChange = this.pointerDropDownListChange.bind(this);
        this.targetDropDownListChange = this.targetDropDownListChange.bind(this);
        this.disabledCheckboxChange = this.disabledCheckboxChange.bind(this);
        this.rtlCheckboxChange = this.rtlCheckboxChange.bind(this);
        
        this.state = {
            animationDuration: 0,
            bothRadioChecked: true,
            currencyRadioChecked: true,
            disabled: false,
            disabledChecked: false,
            enableAnimationChecked: false,
            farRadioChecked: false,
            labelsFormat: 'c',
            nearRadioChecked: false,
            noneRadioChecked: false,
            percentRadioChecked: false,
            pointer: {
                label: 'Revenue 2019 YTD',
                size: '25%',
                value: 270
            },
            pointerDropDownSelected: 4,
            ranges: [
                { color: '#000000', endValue: 200, opacity: 0.5, startValue: 0 },
                { color: '#000000', endValue: 250, opacity: 0.3, startValue: 200 },
                { color: '#000000', endValue: 300, opacity: 0.1, startValue: 250 }
            ],
            rtl: false,
            rtlChecked: false,
            showLabelsChecked: true,
            source: ['Black', 'Red', 'Green', 'Blue', 'From theme'],
            target: {
                label: 'Revenue 2018 YTD',
                size: 4,
                value: 260
            },
            targetDropDownSelected: 4,
            ticks: {
                interval: 50,
                position: 'both',
                size: 10
            }
        }
    };

    public render() {
        return (
            <div>
                <JqxBulletChart ref={this.myBulletChart} style={{ float: 'left', marginLeft: '10px' }}
                    // @ts-ignore
                    width={'100%'} height={80} barSize={'40%'} ranges={this.state.ranges}
                    ticks={this.state.ticks} title={'Revenue 2019 YTD'} description={'(U.S. $ in thousands)'}
                    animationDuration={this.state.animationDuration} pointer={this.state.pointer} target={this.state.target}
                    showTooltip={true} labelsFormat={this.state.labelsFormat} disabled={this.state.disabled} rtl={this.state.rtl}
                />
                <JqxExpander theme={'material-purple'} style={{ float: 'left', marginLeft: '60px' }}
                    width={210} height={550} toggleMode={'none'} showArrow={false}>
                    <div>JqxBulletChart Settings</div>
                    <div>
                        <div style={{ padding: '5px' }}>
                            <JqxCheckBox theme={'material-purple'} ref={this.showLabelsCheckbox} onChange={this.showLabelsCheckboxChange} checked={this.state.showLabelsChecked}>Show Labels</JqxCheckBox>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px', marginLeft: '20px', fontFamily: 'Verdana', fontSize: '12px' }}>
                                <li>
                                    <JqxRadioButton theme={'material-purple'} ref={this.nearRadio} onChecked={this.nearRadioChecked} checked={this.state.nearRadioChecked} groupName={'position'}>Near</JqxRadioButton>
                                </li>
                                <li>
                                    <JqxRadioButton theme={'material-purple'} ref={this.farRadio} onChecked={this.farRadioChecked} checked={this.state.farRadioChecked} groupName={'position'} style={{ marginTop: '5px' }}>Far</JqxRadioButton>
                                </li>
                                <li>
                                    <JqxRadioButton theme={'material-purple'} ref={this.bothRadio} onChecked={this.bothRadioChecked} checked={this.state.bothRadioChecked} groupName={'position'} style={{ marginTop: '5px' }}>Both</JqxRadioButton>
                                </li>
                            </ul>
                            <br />
                            <div>Labels Format:</div>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px', marginLeft: '20px', fontFamily: 'Verdana', fontSize: '12px' }}>
                                <li>
                                    <JqxRadioButton theme={'material-purple'} ref={this.currencyRadio} onChecked={this.currencyRadioChecked} checked={this.state.currencyRadioChecked} groupName={'format'}>Currency</JqxRadioButton>
                                </li>
                                <li>
                                    <JqxRadioButton theme={'material-purple'} ref={this.percentRadio} onChecked={this.percentRadioChecked} checked={this.state.percentRadioChecked} groupName={'format'} style={{ marginTop: '5px' }}>Percent</JqxRadioButton>
                                </li>
                                <li>
                                    <JqxRadioButton theme={'material-purple'} ref={this.noneRadio} onChecked={this.noneRadioChecked} checked={this.state.noneRadioChecked} groupName={'format'} style={{ marginTop: '5px' }}>None</JqxRadioButton>
                                </li>
                            </ul>
                            <br />
                            <JqxCheckBox theme={'material-purple'} ref={this.enableAnimationCheckbox} onChange={this.enableAnimationCheckboxChange} checked={this.state.enableAnimationChecked}>Enable Animation</JqxCheckBox>
                            <br />
                            <div>Pointer Value:</div>
                            <JqxSlider theme={'material-purple'} ref={this.valueSlider} onChange={this.valueSliderChange} style={{ paddingLeft: '5px' }}
                                width={175} min={0} max={300} step={10} showTicks={false}
                                mode={'fixed'} showButtons={false} value={270}
                            />
                            <br />
                            <div>Pointer Color:</div>
                            <JqxDropDownList theme={'material-purple'} ref={this.pointerDropDownList} onChange={this.pointerDropDownListChange}
                                width={'100%'} height={25} selectedIndex={this.state.pointerDropDownSelected}
                                source={this.state.source} autoDropDownHeight={true}
                            />
                            <br />
                            <div>Target Color:</div>
                            <JqxDropDownList theme={'material-purple'} ref={this.targetDropDownList} onChange={this.targetDropDownListChange}
                                width={'100%'} height={25} selectedIndex={this.state.targetDropDownSelected}
                                source={this.state.source} autoDropDownHeight={true}
                            />
                            <br />
                            <JqxCheckBox theme={'material-purple'} ref={this.disabledCheckbox} onChange={this.disabledCheckboxChange} checked={this.state.disabledChecked} style={{ marginBottom: '5px' }}>Disabled</JqxCheckBox>
                            <JqxCheckBox theme={'material-purple'} ref={this.rtlCheckbox} onChange={this.rtlCheckboxChange} checked={this.state.rtlChecked}>Right-to-Left</JqxCheckBox>
                        </div>
                    </div>
                </JqxExpander>
            </div>
        );
    }

    private showLabelsCheckboxChange(event: any): void {
        const checked = event.args.checked;
        if (checked) {
            this.nearRadio.current!.enable();
            this.farRadio.current!.enable();
            this.bothRadio.current!.enable();
            this.currencyRadio.current!.enable();
            this.percentRadio.current!.enable();
            this.noneRadio.current!.enable();
            if (this.nearRadio.current!.props.checked) {
                this.setState({
                    ticks: { position: 'near' }
                });
            }
            else if (this.farRadio.current!.props.checked) {
                this.setState({
                    ticks: { position: 'far' }
                });
            }
            else {
                this.setState({
                    ticks: { position: 'both' }
                });
            }
            this.setState({
                showLabelsChecked: true
            });
        }
        else {
            this.setState({
                showLabelsChecked: false,
                ticks: { position: 'none' }
            });
            this.nearRadio.current!.disable();
            this.farRadio.current!.disable();
            this.bothRadio.current!.disable();
            this.currencyRadio.current!.disable();
            this.percentRadio.current!.disable();
            this.noneRadio.current!.disable();
        }
    };
    private nearRadioChecked(): void {
        if (!this.state.nearRadioChecked) {
            this.setState({
                bothRadioChecked: false,
                farRadioChecked: false,
                nearRadioChecked: true,
                ticks: { position: 'near' }
            });
        }
    };
    private farRadioChecked(): void {
        if (!this.state.farRadioChecked) {
            this.setState({
                bothRadioChecked: false,
                farRadioChecked: true,
                nearRadioChecked: false,
                ticks: { position: 'far' }
            });
        }
    };
    private bothRadioChecked(): void {
        if (!this.state.bothRadioChecked) {
            this.setState({
                bothRadioChecked: true,
                farRadioChecked: false,
                nearRadioChecked: false,
                ticks: { position: 'both' }
            });
        }
    };
    private currencyRadioChecked(): void {
        if (!this.state.currencyRadioChecked) {
            this.setState({
                currencyRadioChecked: true,
                labelsFormat: 'c',
                noneRadioChecked: false,
                percentRadioChecked: false
            });
        }
    };
    private percentRadioChecked(): void {
        if (!this.state.percentRadioChecked) {
            this.setState({
                currencyRadioChecked: false,
                labelsFormat: 'p',
                noneRadioChecked: false,
                percentRadioChecked: true,
            });
        }
    };
    private noneRadioChecked(): void {
        if (!this.state.noneRadioChecked) {
            this.setState({
                currencyRadioChecked: false,
                labelsFormat: 'null',
                noneRadioChecked: true,
                percentRadioChecked: false,
            });
        }
    };
    private enableAnimationCheckboxChange(event: any): void {
        const checked = event.args.checked;
        if (checked) {
            this.setState({
                animationDuration: 400,
                enableAnimationChecked: true
            });
        }
        else {
            this.setState({
                animationDuration: 0,
                enableAnimationChecked: false
            });
        }
    };
    private valueSliderChange(event: any): void {
        const value = event.args.value;
        this.myBulletChart.current!.val(value);
    };
    private pointerDropDownListChange(event: any): void {      
        if (event.args.index !== this.state.pointerDropDownSelected) {
            const choice = event.args.item.label;
            let newColor;
            if (choice !== 'From theme') {
                newColor = choice;
            }
            else {
                newColor = '';
            }

            this.setState({
                pointer: { color: newColor },
                pointerDropDownSelected: event.args.index
            });
        }
    };
    private targetDropDownListChange(event: any): void {    
        if (event.args.index !== this.state.targetDropDownSelected) {
            const choice = event.args.item.label;
            let newColor;
            if (choice !== 'From theme') {
                newColor = choice;
            }
            else {
                newColor = '';
            }
            this.setState({
                target: { color: newColor },
                targetDropDownSelected: event.args.index
            });
        }
    };
    private disabledCheckboxChange(event: any): void {
        const checked = event.args.checked;
        if (checked) {
            this.setState({
                disabled: true,
                disabledChecked: true
            });
        }
        else {
            this.setState({
                disabled: false,
                disabledChecked: false
            });
        }
    };
    private rtlCheckboxChange(event: any): void {
        const checked = event.args.checked;

        if (checked) {
            this.setState({
                rtl: true,
                rtlChecked: true
            });
        }
        else {
            this.setState({
                rtl: false,
                rtlChecked: false
            });
        }      
    };
}

export default App;