import * as React from 'react';
 

import JqxButtonGroup, { IButtonGroupProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttongroup';
import JqxRadioButton, { IRadioButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

export interface IState extends IRadioButtonProps {
    defaultChecked: IRadioButtonProps["checked"];
    radioChecked: IRadioButtonProps["checked"];
    checkBoxChecked: IRadioButtonProps["checked"];
    mode: IButtonGroupProps["mode"];
}

class App extends React.PureComponent<{}, IState> {

    private myButtonGroup = React.createRef<JqxButtonGroup>();
    private myLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.defaultModeButtonChecked = this.defaultModeButtonChecked.bind(this);
        this.radioModeButtonChecked = this.radioModeButtonChecked.bind(this);
        this.checkBoxModeButtonChecked = this.checkBoxModeButtonChecked.bind(this);
        this.groupOnBtnClick = this.groupOnBtnClick.bind(this);

        this.state = {
            checkBoxChecked: false,
            defaultChecked: true,
            mode: 'default',
            radioChecked: false
        }
    };

    public render() {
        return (
            <div>
                <JqxButtonGroup theme={'material-purple'} ref={this.myButtonGroup} onButtonclick={this.groupOnBtnClick} mode={this.state.mode}>
                    <button style={{ padding: '4px 16px' }} id='Left' value='Left' />
                    <button style={{ padding: '4px 16px' }} id='Center' value='Center' />
                    <button style={{ padding: '4px 16px' }} id='Right' value='Right' />
                </JqxButtonGroup>
                <div style={{ marginTop: '10px' }}>
                    <h4>Modes</h4>
                    <JqxRadioButton theme={'material-purple'} onChecked={this.defaultModeButtonChecked} checked={this.state.defaultChecked}>Default</JqxRadioButton>
                    <JqxRadioButton theme={'material-purple'} onChecked={this.radioModeButtonChecked}>RadioButtons</JqxRadioButton>
                    <JqxRadioButton theme={'material-purple'} onChecked={this.checkBoxModeButtonChecked}> CheckBoxes</JqxRadioButton>
                </div>
                <div ref={this.myLog} style={{ marginTop: '10px' }} />
            </div>
        );
    }

    private defaultModeButtonChecked() {
        this.setState({
            checkBoxChecked: false,
            defaultChecked: true,
            mode: 'default',
            radioChecked: false
        });
    }

    private radioModeButtonChecked() {
        this.setState({
            checkBoxChecked: false,
            defaultChecked: false,
            mode: 'radio',
            radioChecked: true
        });
    }

    private checkBoxModeButtonChecked() {
        this.setState({
            checkBoxChecked: true,
            defaultChecked: false,
            mode: 'checkbox',
            radioChecked: true
        });
    }

    private groupOnBtnClick(event: any) {
        const clickedButton = event.args.button;
        this.myLog.current!.innerHTML = `Clicked: ${clickedButton[0].id}`;
    }
}

export default App;