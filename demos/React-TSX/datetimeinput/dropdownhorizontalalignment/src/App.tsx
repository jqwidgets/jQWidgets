import * as React from 'react';
import JqxDateTimeInput, { IDateTimeInputProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
    const [dropDownHorizontalAlignment, setDropDownHorizontalAlignment] = React.useState<IDateTimeInputProps['dropDownHorizontalAlignment']>('right');
    const [leftChecked, setLeftChecked] = React.useState(false);
    const [rightChecked, setRightChecked] = React.useState(true);

    const leftBtn = React.useCallback(() => {
        setDropDownHorizontalAlignment('left');
        setLeftChecked(true);
        setRightChecked(false);
    }, []);

    const rightBtn = React.useCallback(() => {
        setDropDownHorizontalAlignment('right');
        setLeftChecked(false);
        setRightChecked(true);
    }, []);

    return (
        <div>
            <div style={{ float: 'left', fontSize: '12px', fontFamily: 'Verdana' }}>
                <h3>Alignment</h3>
                <JqxRadioButton theme="material-purple" onChecked={leftBtn} checked={leftChecked}>
                    Left
                </JqxRadioButton>
                <JqxRadioButton theme="material-purple" style={{ marginTop: '10px' }} onChecked={rightBtn} checked={rightChecked}>
                    Right
                </JqxRadioButton>
            </div>
            <JqxDateTimeInput
                theme="material-purple"
                style={{ float: 'left', marginTop: '20px', marginLeft: '100px' }}
                width={150}
                height={30}
                animationType="fade"
                dropDownHorizontalAlignment={dropDownHorizontalAlignment}
            />
        </div>
    );
};

export default App;