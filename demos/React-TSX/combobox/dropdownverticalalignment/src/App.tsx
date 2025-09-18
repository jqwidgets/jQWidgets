import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import JqxComboBox, { IComboBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
    const myComboBox = useRef<JqxComboBox>(null);
    const source = React.useMemo(
        () =>
            new jqx.dataAdapter({
                async: false,
                datafields: [
                    { name: 'CompanyName' },
                    { name: 'ContactName' }
                ],
                datatype: 'json',
                id: 'id',
                url: 'customers.txt'
            }),
        []
    );

    const [dropDownVerticalAlignment, setDropDownVerticalAlignment] = useState<IComboBoxProps['dropDownVerticalAlignment']>('top');
    const [topBtnChecked, setTopBtnChecked] = useState(true);
    const [bottomBtnChecked, setBottomBtnChecked] = useState(false);

    useEffect(() => {
        if (myComboBox.current) {
            myComboBox.current.setOptions({ selectedIndex: 0 });
        }
    }, []);

    const topBtnOnChecked = () => {
        setDropDownVerticalAlignment('top');
        setTopBtnChecked(true);
        setBottomBtnChecked(false);
    };

    const bottomBtnOnChecked = () => {
        setDropDownVerticalAlignment('bottom');
        setTopBtnChecked(false);
        setBottomBtnChecked(true);
    };

    return (
        <div>
            <JqxComboBox
                theme="material-purple"
                ref={myComboBox}
                style={{ float: 'left', marginTop: '270px' }}
                width={150}
                height={25}
                source={source}
                dropDownVerticalAlignment={dropDownVerticalAlignment}
                dropDownWidth={200}
                displayMember="ContactName"
                valueMember="CompanyName"
            />
            <div style={{ float: 'left', fontSize: '13px', fontFamily: 'Verdana', marginLeft: '100px', marginTop: '270px' }}>
                <h3>Alignment</h3>
                <JqxRadioButton
                    theme="material-purple"
                    onChecked={topBtnOnChecked}
                    checked={topBtnChecked}
                >
                    Top
                </JqxRadioButton>
                <JqxRadioButton
                    theme="material-purple"
                    style={{ marginTop: '10px' }}
                    onChecked={bottomBtnOnChecked}
                    checked={bottomBtnChecked}
                >
                    Bottom
                </JqxRadioButton>
            </div>
        </div>
    );
};

export default App;