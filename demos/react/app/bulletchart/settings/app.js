import React from 'react';
import ReactDOM from 'react-dom';

import JqxBulletChart from '../../../jqwidgets-react/react_jqxbulletchart.js';
import JqxExpander from '../../../jqwidgets-react/react_jqxexpander.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';
import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.showLabelsCheckbox.on('change', (event) => {
            let checked = event.args.checked;
            if (checked) {
                this.refs.nearRadio.enable();
                this.refs.farRadio.enable();
                this.refs.bothRadio.enable();

                if (this.refs.nearRadio.checked() === true) {
                    this.refs.myBulletChart.ticks({ position: 'near' });
                }
                else if (this.refs.farRadio.checked() === true) {
                    this.refs.myBulletChart.ticks({ position: 'far' });
                }
                else {
                    this.refs.myBulletChart.ticks({ position: 'both' });
                }
            }
            else {
                this.refs.myBulletChart.ticks({ position: 'none' });
                this.refs.nearRadio.disable();
                this.refs.farRadio.disable();
                this.refs.bothRadio.disable();
            }
        });

        this.refs.nearRadio.on('checked', (event) => {
            this.refs.myBulletChart.ticks({ position: 'near' });
        });

        this.refs.farRadio.on('checked', (event) => {
            this.refs.myBulletChart.ticks({ position: 'far' });
        });

        this.refs.bothRadio.on('checked', (event) => {
            this.refs.myBulletChart.ticks({ position: 'both' });
        });

        this.refs.currencyRadio.on('checked', (event) => {
            this.refs.myBulletChart.labelsFormat('c');
        });

        this.refs.percentRadio.on('checked', (event) => {
            this.refs.myBulletChart.labelsFormat('p');
        });

        this.refs.noneRadio.on('checked', (event) => {
            this.refs.myBulletChart.labelsFormat(null);
        });

        this.refs.enableAnimationCheckbox.on('change', (event) => {
            let checked = event.args.checked;
            if (checked) {
                this.refs.myBulletChart.animationDuration(400);
            }
            else {
                this.refs.myBulletChart.animationDuration(0);
            }
        });

        this.refs.valueSlider.on('change', (event) => {
            let value = event.args.value;
            this.refs.myBulletChart.val(value);
        });

        this.refs.pointerDropDownList.on('change', (event) => {
            let choice = event.args.item.label;
            let newColor;
            if (choice != 'From theme') {
                newColor = choice;
            }
            else {
                newColor = '';
            }
            this.refs.myBulletChart.pointer({ color: newColor });
        });

        this.refs.targetDropDownList.on('change', (event) => {
            let choice = event.args.item.label;
            let newColor;
            if (choice != 'From theme') {
                newColor = choice;
            }
            else {
                newColor = '';
            }
            this.refs.myBulletChart.target({ color: newColor });
        });

        this.refs.disabledCheckbox.on('change', (event) => {
            let checked = event.args.checked;
            if (checked) {
                this.refs.myBulletChart.disabled(true);
            }
            else {
                this.refs.myBulletChart.disabled(false);
            }
        });

        this.refs.rtlCheckbox.on('change', (event) => {
            let checked = event.args.checked;
            if (checked) {
                this.refs.myBulletChart.rtl(true);
            }
            else {
                this.refs.myBulletChart.rtl(false);
            }
        });
    }
    render() {
        let ranges =
            [
                { startValue: 0, endValue: 200, color: '#000000', opacity: 0.5 },
                { startValue: 200, endValue: 250, color: '#000000', opacity: 0.3 },
                { startValue: 250, endValue: 300, color: '#000000', opacity: 0.1 }
            ];

        let pointer = { value: 270, label: 'Revenue 2014 YTD', size: '25%', color: '' };

        let target = { value: 260, label: 'Revenue 2013 YTD', size: 4, color: '' };

        let ticks = { position: 'both', interval: 50, size: 10 };

        let colorChoices = ['Black', 'Red', 'Green', 'Blue', 'From theme'];

        return (
            <div>
                <JqxBulletChart ref='myBulletChart' style={{ float: 'left', marginLeft: 10 }}
                    width={500} height={80} barSize={'40%'} ranges={ranges} ticks={ticks}
                    title={'Revenue 2014 YTD'} description={'(U.S. $ in thousands)'} animationDuration={0}
                    pointer={pointer} target={target} labelsFormat={'c'} showTooltip={true}
                />
                <JqxExpander style={{ float: 'left', marginLeft: 60 }}
                    width={210} height={550} toggleMode={'none'} showArrow={false}>

                    <div>jqxBulletChart Settings</div>
                    <div>
                        <div style={{ padding: 5 }}>
                            <JqxCheckBox ref='showLabelsCheckbox' checked={true} value='Show Labels' />
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 10, marginLeft: 20, fontFamily: 'Verdana', fontSize: 12 }}>
                                <li>
                                    <JqxRadioButton ref='nearRadio' checked={false} groupName={'position'}>Near</JqxRadioButton>
                                </li>
                                <li>
                                    <JqxRadioButton ref='farRadio' checked={false} groupName={'position'} style={{ marginTop: 5 }}>Far</JqxRadioButton>
                                </li>
                                <li>
                                    <JqxRadioButton ref='bothRadio' checked={true} groupName={'position'} style={{ marginTop: 5 }}>Both</JqxRadioButton>
                                </li>
                            </ul>
                            <br />
                            <div>Labels Format:</div>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 10, marginLeft: 20, fontFamily: 'Verdana', fontSize: 12 }}>
                                <li>
                                    <JqxRadioButton ref='currencyRadio' checked={true} groupName={'format'}>Currency</JqxRadioButton>
                                </li>
                                <li>
                                    <JqxRadioButton ref='percentRadio' checked={false} groupName={'format'} style={{ marginTop: 5 }}>Percent</JqxRadioButton>
                                </li>
                                <li>
                                    <JqxRadioButton ref='noneRadio' checked={false} groupName={'format'} style={{ marginTop: 5 }}>None</JqxRadioButton>
                                </li>
                            </ul>
                            <br />
                            <JqxCheckBox ref='enableAnimationCheckbox' checked={false} value='Enable Animation' />
                            <br />
                            <div>Pointer Value:</div>
                            <JqxSlider ref='valueSlider' style={{ paddingLeft: 5 }}
                                width={175} min={0} max={300} step={10} showTicks={false}
                                mode={'fixed'} showButtons={false} value={270}
                            />
                            <br />
                            <div>Pointer Color:</div>
                            <JqxDropDownList ref='pointerDropDownList'
                                width={'100%'} height={25} selectedIndex={4}
                                source={colorChoices} autoDropDownHeight={true}
                            />
                            <br />
                            <div>Target Color:</div>
                            <JqxDropDownList ref='targetDropDownList'
                                width={'100%'} height={25} selectedIndex={4}
                                source={colorChoices} autoDropDownHeight={true}
                            />
                            <br />
                            <JqxCheckBox ref='disabledCheckbox' checked={false} value='Disabled' style={{ marginBottom: 5 }} />
                            <JqxCheckBox ref='rtlCheckbox' checked={false} value='Right-to-Left' />
                        </div>
                    </div>
                </JqxExpander>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
