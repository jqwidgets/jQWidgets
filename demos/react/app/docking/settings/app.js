import React from 'react';
import ReactDOM from 'react-dom';

import JqxDocking from '../../../jqwidgets-react/react_jqxdocking.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myDocking.setWindowPosition('window0', 100, 100);
        this.refs.myDocking.pinWindow('window1');
        this.refs.myDocking.hideAllCloseButtons();
        this.refs.myDocking.showAllCollapseButtons();

        this.refs.disabledCheckbox.on('change', () => {
            let disabled = this.refs.myDocking.disabled();
            if (disabled) {
                this.refs.myDocking.enable();
            } else {
                this.refs.myDocking.disable();
            }
        });
        this.refs.closeButtonsCheckbox.on('change', () => {
            let checked = this.refs.closeButtonsCheckbox.checked();
            if (checked) {
                this.refs.myDocking.showAllCloseButtons();
            } else {
                this.refs.myDocking.hideAllCloseButtons();
            }
        });
        this.refs.collapseButtonsCheckbox.on('change', () => {
            let checked = this.refs.collapseButtonsCheckbox.checked();
            if (checked) {
                this.refs.myDocking.showAllCollapseButtons();
            } else {
                this.refs.myDocking.hideAllCollapseButtons();
            }
        });

        this.refs.movebutton.on('click', () => {
            this.refs.myDocking.move('window3', 0, 1);
        });
        this.refs.collapsebutton.on('click', () => {
            this.refs.myDocking.collapseWindow('window1');
        });
        this.refs.expandbutton.on('click', () => {
            this.refs.myDocking.expandWindow('window1');
        });

        this.refs.mySlider.on('change', (event) => {
            this.refs.myDocking.windowsOffset(event.args.value);
        });
    }
    render() {
        return (
            <div>
                <JqxDocking ref='myDocking' style={{ float: 'left' }}
                    width={450} orientation={'horizontal'} mode={'default'}
                    windowsMode={{ window0: 'floating' }}
                >
                    <div id='panel0'>
                        <div id='window0' style={{ height: 70, width: 220 }}>
                            <div>
                                jqxDock2</div>
                            <div>
                                You cannot drop this object.</div>
                        </div>
                        <div id='window1' style={{ height: 70, width: 100 }}>
                            <div>
                                jqxDock1</div>
                            <div>
                                You cannot drag this object.</div>
                        </div>
                    </div>
                    <div id='panel1'>
                        <div id='window2' style={{ height: 70, width: 100 }}>
                            <div>
                                jqxDock3</div>
                            <div>
                                You can drag and drop this object.</div>
                        </div>
                        <div id='window3' style={{ height: 70, width: 100 }}>
                            <div>
                                jqxDock4</div>
                            <div>
                                You can drag and drop this object.</div>
                        </div>
                    </div>
                </JqxDocking>
                <div style={{ float: 'left', marginTop: 30 }}>
                    <span style={{ marginLeft: 20, marginTop: 20, marginBottom: 30 }}>Settings</span>
                    <table style={{ marginLeft: 20, marginTop: 20, marginBottom: 30 }}>
                        <tr>
                            <td>
                                <JqxCheckBox ref='collapseButtonsCheckbox' value='Collapse Buttons'
                                    width={200} checked={true}
                                />

                            </td>
                            <td>
                                <JqxButton ref='movebutton' value='Move jqxDock4 To Left Zone' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <JqxCheckBox ref='closeButtonsCheckbox' value='Close Buttons' width={200} />
                            </td>
                            <td>
                                <JqxButton ref='collapsebutton' value='Collapse jqxDock1' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <JqxCheckBox ref='disabledCheckbox' value='Disabled' width={200} />
                            </td>
                            <td>
                                <JqxButton ref='expandbutton' value='Expand jqxDock1' />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: 100 }}>
                                <span style={{ fontFamily: 'Verdana', fontSize: 13 }}>Windows Margin</span>
                                <JqxSlider ref='mySlider'
                                    width={200} max={9} value={5} mode={'fixed'} ticksFrequency={1}
                                />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
