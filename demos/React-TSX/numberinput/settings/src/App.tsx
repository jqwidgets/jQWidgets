import * as React from 'react';
import { useRef, useCallback } from 'react';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const symbolTypes: IDropDownListProps['source'] = ['$', '%', 'None'];
const decimalDigitsNumbers: IDropDownListProps['source'] = ['0', '1', '2', '3', '4'];
const digitsNumbers: IDropDownListProps['source'] = ['1', '2', '3', '4', '5', '6', '7', '8'];

const App = () => {
    const myNumberInput = useRef<JqxNumberInput>(null);

    const onChange = useCallback((event: any) => {
        const checked = event.args.checked;
        myNumberInput.current?.setOptions({ spinButtons: checked });
    }, []);

    const checkedLeftButton = useCallback(() => {
        myNumberInput.current?.setOptions({ symbolPosition: 'left' });
    }, []);

    const checkedRightButton = useCallback(() => {
        myNumberInput.current?.setOptions({ symbolPosition: 'right' });
    }, []);

    const symbolTypeSelect = useCallback((event: any) => {
        const index = event.args.index;
        if (index === 2) {
            myNumberInput.current?.setOptions({ symbol: '' });
        } else {
            myNumberInput.current?.setOptions({ symbol: symbolTypes![index] });
        }
    }, []);

    const decimalDigitsSelect = useCallback((event: any) => {
        const index = event.args.index;
        myNumberInput.current?.setOptions({ decimalDigits: decimalDigitsNumbers![index] });
    }, []);

    const digitsSelect = useCallback((event: any) => {
        const index = event.args.index;
        myNumberInput.current?.setOptions({ digits: digitsNumbers![index] });
    }, []);

    return (
        <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
            <div style={{ marginTop: '3px' }}>
                <JqxNumberInput
                    theme={'material-purple'}
                    ref={myNumberInput}
                    width={250}
                    height={25}
                    min={0}
                    symbol={'$'}
                    spinButtons={true}
                />
            </div>
            <div>
                <div style={{ float: 'left' }}>
                    <div style={{ width: '170px', marginTop: '20px' }}>
                        <JqxCheckBox
                            theme={'material-purple'}
                            onChange={onChange}
                            checked={true}
                        >
                            Show Spin Buttons
                        </JqxCheckBox>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        Symbol Position
                    </div>
                    <div style={{ marginTop: '5px' }}>
                        <JqxRadioButton
                            theme={'material-purple'}
                            onChecked={checkedLeftButton}
                            checked={true}
                        >
                            Left
                        </JqxRadioButton>
                    </div>
                    <div style={{ marginTop: '5px' }}>
                        <JqxRadioButton
                            theme={'material-purple'}
                            onChecked={checkedRightButton}
                        >
                            Right
                        </JqxRadioButton>
                    </div>
                </div>
                <div style={{ marginLeft: '30px', float: 'left' }}>
                    <div style={{ marginTop: '20px', marginBottom: '10px' }}>
                        Symbol
                    </div>
                    <JqxDropDownList
                        theme={'material-purple'}
                        onSelect={symbolTypeSelect}
                        width={60}
                        height={20}
                        source={symbolTypes}
                        selectedIndex={0}
                        autoDropDownHeight={true}
                    />
                    <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                        Decimal Digits
                    </div>
                    <JqxDropDownList
                        theme={'material-purple'}
                        onSelect={decimalDigitsSelect}
                        width={60}
                        height={20}
                        source={decimalDigitsNumbers}
                        selectedIndex={2}
                        autoDropDownHeight={true}
                    />
                    <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                        Digits
                    </div>
                    <JqxDropDownList
                        theme={'material-purple'}
                        onSelect={digitsSelect}
                        width={60}
                        height={20}
                        source={digitsNumbers}
                        selectedIndex={7}
                        autoDropDownHeight={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;