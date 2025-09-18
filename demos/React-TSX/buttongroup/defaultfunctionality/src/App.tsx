import * as React from 'react';
import { useRef, useState } from 'react';

import JqxButtonGroup, { IButtonGroupProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttongroup';
import JqxRadioButton, { IRadioButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

function App() {
    const myButtonGroup = useRef<JqxButtonGroup>(null);
    const myLog = useRef<HTMLDivElement>(null);

    const [mode, setMode] = useState<IButtonGroupProps['mode']>('default');
    const [defaultChecked, setDefaultChecked] = useState<IRadioButtonProps['checked']>(true);
    const [radioChecked, setRadioChecked] = useState<IRadioButtonProps['checked']>(false);
    const [checkBoxChecked, setCheckBoxChecked] = useState<IRadioButtonProps['checked']>(false);

    const defaultModeButtonChecked = () => {
        setMode('default');
        setDefaultChecked(true);
        setRadioChecked(false);
        setCheckBoxChecked(false);
    };

    const radioModeButtonChecked = () => {
        setMode('radio');
        setDefaultChecked(false);
        setRadioChecked(true);
        setCheckBoxChecked(false);
    };

    const checkBoxModeButtonChecked = () => {
        setMode('checkbox');
        setDefaultChecked(false);
        setRadioChecked(true);
        setCheckBoxChecked(true);
    };

    const groupOnBtnClick = (event: any) => {
        const clickedButton = event.args.button;
        if (myLog.current) {
            myLog.current.innerHTML = `Clicked: ${clickedButton[0].id}`;
        }
    };

    return (
        <div>
            <JqxButtonGroup
                theme="material-purple"
                ref={myButtonGroup}
                onButtonclick={groupOnBtnClick}
                mode={mode}
            >
                <button style={{ padding: '4px 16px' }} id="Left" value="Left" />
                <button style={{ padding: '4px 16px' }} id="Center" value="Center" />
                <button style={{ padding: '4px 16px' }} id="Right" value="Right" />
            </JqxButtonGroup>
            <div style={{ marginTop: '10px' }}>
                <h4>Modes</h4>
                <JqxRadioButton
                    theme="material-purple"
                    onChecked={defaultModeButtonChecked}
                    checked={defaultChecked}
                >
                    Default
                </JqxRadioButton>
                <JqxRadioButton
                    theme="material-purple"
                    onChecked={radioModeButtonChecked}
                    checked={radioChecked}
                >
                    RadioButtons
                </JqxRadioButton>
                <JqxRadioButton
                    theme="material-purple"
                    onChecked={checkBoxModeButtonChecked}
                    checked={checkBoxChecked}
                >
                    CheckBoxes
                </JqxRadioButton>
            </div>
            <div ref={myLog} style={{ marginTop: '10px' }} />
        </div>
    );
}

export default App;