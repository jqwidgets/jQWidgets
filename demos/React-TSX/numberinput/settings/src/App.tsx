import * as React from 'react';
 


import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

export interface IState extends IDropDownListProps {
    symbolTypes: IDropDownListProps['source'];
    decimalDigitsNumbers: IDropDownListProps['source'];
    digitsNumbers: IDropDownListProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    private myNumberInput = React.createRef<JqxNumberInput>();

    constructor(props: {}) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.checkedLeftButton = this.checkedLeftButton.bind(this);
        this.checkedRightButton = this.checkedRightButton.bind(this);
        this.symbolTypeSelect = this.symbolTypeSelect.bind(this);
        this.decimalDigitsSelect = this.decimalDigitsSelect.bind(this);
        this.digitsSelect = this.digitsSelect.bind(this);

        this.state = {
            decimalDigitsNumbers: ['0', '1', '2', '3', '4'],
            digitsNumbers: ['1', '2', '3', '4', '5', '6', '7', '8'],
            symbolTypes: ['$', '%', 'None']
        }
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
                <div style={{ marginTop: '3px' }}>
                    <JqxNumberInput theme={'material-purple'} ref={this.myNumberInput}
                        width={250} height={25} min={0} symbol={'$'} spinButtons={true} />
                </div>
                <div>
                    <div style={{ float: 'left' }}>
                        <div style={{ width: '170px', marginTop: '20px' }}>
                            <JqxCheckBox theme={'material-purple'} onChange={this.onChange} checked={true}>
                                Show Spin Buttons
                            </JqxCheckBox>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            Symbol Position
                        </div>
                        <div style={{ marginTop: '5px' }}>
                            <JqxRadioButton theme={'material-purple'} onChecked={this.checkedLeftButton} checked={true}>
                                Left
                            </JqxRadioButton>
                        </div>
                        <div style={{ marginTop: '5px' }}>
                            <JqxRadioButton theme={'material-purple'} onChecked={this.checkedRightButton}>
                                Right
                            </JqxRadioButton>
                        </div>
                    </div>
                    <div style={{ marginLeft: '30px', float: 'left' }}>
                        <div style={{ marginTop: '20px', marginBottom: '10px' }}>
                            Symbol
                        </div>
                        <JqxDropDownList theme={'material-purple'} onSelect={this.symbolTypeSelect}
                            width={60} height={20} source={this.state.symbolTypes}
                            selectedIndex={0} autoDropDownHeight={true} />
                        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                            Decimal Digits
                        </div>
                        <JqxDropDownList theme={'material-purple'} onSelect={this.decimalDigitsSelect}
                            width={60} height={20} source={this.state.decimalDigitsNumbers}
                            selectedIndex={2} autoDropDownHeight={true} />

                        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                            Digits
                        </div>
                        <JqxDropDownList theme={'material-purple'} onSelect={this.digitsSelect}
                            width={60} height={20} source={this.state.digitsNumbers}
                            selectedIndex={7} autoDropDownHeight={true} />
                    </div>
                </div>
            </div>
        );
    }

    private onChange(event: any) {
        const checked = event.args.checked;
        this.myNumberInput.current!.setOptions({ spinButtons: checked });
    };

    private checkedLeftButton(event: any) {
        this.myNumberInput.current!.setOptions({ symbolPosition: 'left' });
    };

    private checkedRightButton(event: any) {
        this.myNumberInput.current!.setOptions({ symbolPosition: 'right' });
    };

    private symbolTypeSelect(event: any) {
        const index = event.args.index;
        if (index === 2) {
            this.myNumberInput.current!.setOptions({ symbol: '' });
        }
        else {
            const symbol = this.state.symbolTypes![index];
            this.myNumberInput.current!.setOptions({ symbol });
        }
    };

    private decimalDigitsSelect(event: any) {
        const index = event.args.index;
        this.myNumberInput.current!.setOptions({ decimalDigits: this.state.decimalDigitsNumbers![index] });
    };

    private digitsSelect(event: any) {
        const index = event.args.index;
        this.myNumberInput.current!.setOptions({ digits: this.state.digitsNumbers![index] });
    };    
}

export default App;