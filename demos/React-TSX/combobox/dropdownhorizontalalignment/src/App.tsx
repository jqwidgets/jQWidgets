import * as React from 'react';
import { useEffect, useRef, useState, useMemo } from 'react';
import JqxComboBox, { IComboBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
    const myComboBox = useRef<JqxComboBox>(null);

    const [dropDownHorizontalAlignment, setDropDownHorizontalAlignment] = useState<IComboBoxProps['dropDownHorizontalAlignment']>('right');
    const [leftBtnChecked, setLeftBtnChecked] = useState(false);
    const [rightBtnChecked, setRightBtnChecked] = useState(true);

    const source = useMemo(() => {
        const src = {
            async: false,
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'customers.txt'
        };
        return new jqx.dataAdapter(src);
    }, []);

    useEffect(() => {
        myComboBox.current?.setOptions({ selectedIndex: 0 });
    }, []);

    const leftBtnOnChecked = () => {
        setDropDownHorizontalAlignment('left');
        setLeftBtnChecked(true);
        setRightBtnChecked(false);
    };

    const rightBtnOnChecked = () => {
        setDropDownHorizontalAlignment('right');
        setLeftBtnChecked(false);
        setRightBtnChecked(true);
    };

    return (
        <div>
            <div style={{ float: 'left', fontSize: '13px', fontFamily: 'Verdana' }}>
                <h3>Alignment</h3>
                <JqxRadioButton
                    theme="material-purple"
                    onChecked={leftBtnOnChecked}
                    checked={leftBtnChecked}
                >
                    Left
                </JqxRadioButton>
                <JqxRadioButton
                    theme="material-purple"
                    style={{ marginTop: '10px' }}
                    onChecked={rightBtnOnChecked}
                    checked={rightBtnChecked}
                >
                    Right
                </JqxRadioButton>
            </div>
            <JqxComboBox
                theme="material-purple"
                ref={myComboBox}
                style={{ float: 'left', marginTop: '20px', marginLeft: '100px' }}
                width={150}
                height={25}
                source={source}
                dropDownHorizontalAlignment={dropDownHorizontalAlignment}
                dropDownWidth={200}
                displayMember="ContactName"
                valueMember="CompanyName"
            />
        </div>
    );
};

export default App;