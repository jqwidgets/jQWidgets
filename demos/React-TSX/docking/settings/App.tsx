import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDocking, { IDockingProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdocking';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, IDockingProps> {

    private myDocking = React.createRef<JqxDocking>();
    private collapseButtonsCheckbox = React.createRef<JqxCheckBox>();
    private closeButtonsCheckbox = React.createRef<JqxCheckBox>();
    private mySlider = React.createRef<JqxSlider>();

    constructor(props: {}) {
        super(props);
        this.collapseButtonsCheckboxOnChange = this.collapseButtonsCheckboxOnChange.bind(this);
        this.closeButtonsCheckboxOnChange = this.closeButtonsCheckboxOnChange.bind(this);
        this.disabledCheckboxOnChange = this.disabledCheckboxOnChange.bind(this);
        this.moveButtonOnClick = this.moveButtonOnClick.bind(this);
        this.collapseButtonOnClick = this.collapseButtonOnClick.bind(this);
        this.expandButtonOnClick = this.expandButtonOnClick.bind(this);
        this.mySliderOnChange = this.mySliderOnChange.bind(this);

        this.state = {
            windowsOffset: 5
        }
    }

    public componentDidMount() {
        this.myDocking.current!.setWindowPosition('window0', 100, 100);
        this.myDocking.current!.pinWindow('window1');
        this.myDocking.current!.hideAllCloseButtons();
        this.myDocking.current!.showAllCollapseButtons();
        this.mySlider.current!.setOptions({ value: 5 });
    }

    public render() {
        return (
            <div>
                <div style={{ float: 'left' }}>
                    <JqxDocking theme={'material-purple'} ref={this.myDocking}
                        width={370} orientation={'horizontal'} mode={'default'}
                        windowsMode={{ 'window0': 'floating' }} windowsOffset={this.state.windowsOffset}>
                        <div id="panel0">
                            <div id="window0" style={{ height: '70px', width: '220px' }}>
                                <div>AngularDock2</div>
                                <div>You cannot drop this object.</div>
                            </div>
                            <div id="window1" style={{ height: '70px', width: '100px' }}>
                                <div>AngularDock1</div>
                                <div>You cannot drag this object.</div>
                            </div>
                        </div>
                        <div id="panel1">
                            <div id="window2" style={{ height: '70px', width: '100px' }}>
                                <div>AngularDock3</div>
                                <div>You can drag and drop this object.</div>
                            </div>
                            <div id="window3" style={{ height: '70px', width: '100px' }}>
                                <div>AngularDock4</div>
                                <div>You can drag and drop this object.</div>
                            </div>
                        </div>
                    </JqxDocking>
                </div>

                <div style={{ float: 'left', marginTop: '30px' }}>
                    <span style={{ marginLeft: '20px', marginTop: '20px', marginBottom: '30px' }}>Settings</span>
                    <table style={{ marginLeft: '20px', marginTop: '20px', marginBottom: '30px' }}>
                        <tbody>
                            <tr>
                                <td>
                                    <JqxCheckBox theme={'material-purple'} ref={this.collapseButtonsCheckbox} onChange={this.collapseButtonsCheckboxOnChange}
                                        width={200} checked={true}>
                                        Collapse Buttons
                                    </JqxCheckBox>
                                </td>
                                <td>
                                    <JqxButton theme={'material-purple'} onClick={this.moveButtonOnClick}>Move AngularDock4 To Left Zone</JqxButton>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <JqxCheckBox theme={'material-purple'} ref={this.closeButtonsCheckbox} onChange={this.closeButtonsCheckboxOnChange}
                                        width={200}>
                                        Close Buttons
                                    </JqxCheckBox>
                                </td>
                                <td>
                                    <JqxButton theme={'material-purple'} onClick={this.collapseButtonOnClick}>Collapse AngularDock1</JqxButton>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <JqxCheckBox theme={'material-purple'} onChange={this.disabledCheckboxOnChange} width={200}>Disabled</JqxCheckBox>
                                </td>
                                <td>
                                    <JqxButton theme={'material-purple'} onClick={this.expandButtonOnClick}>Expand AngularDock1</JqxButton>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '100px' }}>
                                    <span style={{ fontFamily: 'Verdana', fontSize: '13px' }}>Windows Margin</span>
                                    <JqxSlider theme={'material-purple'} ref={this.mySlider} onChange={this.mySliderOnChange}
                                        width={200} max={9} mode={'fixed'} ticksFrequency={1} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    private collapseButtonsCheckboxOnChange(): void {
        const checked = this.collapseButtonsCheckbox.current!.getOptions('checked');
        if (checked) {
            this.myDocking.current!.showAllCollapseButtons();
        } else {
            this.myDocking.current!.hideAllCollapseButtons();
        }
    };

    private closeButtonsCheckboxOnChange(): void {
        const checked = this.closeButtonsCheckbox.current!.getOptions('checked');
        if (checked) {
            this.myDocking.current!.showAllCloseButtons();
        } else {
            this.myDocking.current!.hideAllCloseButtons();
        }
    };

    private disabledCheckboxOnChange(): void {
        const disabled = this.myDocking.current!.getOptions('disabled')
        if (disabled) {
            this.myDocking.current!.enable();
        } else {
            this.myDocking.current!.disable();
        }
    };

    private moveButtonOnClick(): void {
        this.myDocking.current!.move('window3', 0, 1);
    };

    private collapseButtonOnClick(): void {
        this.myDocking.current!.collapseWindow('window1');
    };

    private expandButtonOnClick(): void {
        this.myDocking.current!.expandWindow('window1');
    };

    private mySliderOnChange(event: any): void {
        this.setState({
            windowsOffset: event.args.value
        });
    };
}

export default App;