import * as React from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';
import JqxDropDownList, { IDropDownListProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
    const myDropDownList = useRef<JqxDropDownList>(null);

    const [dropDownHorizontalAlignment, setDropDownHorizontalAlignment] = useState<IDropDownListProps['dropDownHorizontalAlignment']>('right');
    const [leftBtnChecked, setLeftBtnChecked] = useState(false);
    const [rightBtnChecked, setRightBtnChecked] = useState(true);

    const [source] = useState(() => {
        const s: any = {
            async: false,
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'customers.txt'
        };
        return new jqx.dataAdapter(s);
    });

    useEffect(() => {
        if (myDropDownList.current) {
            myDropDownList.current.setOptions({ selectedIndex: 0 });
        }
    }, []);

    const leftBtnOnChecked = useCallback(() => {
        setDropDownHorizontalAlignment('left');
        setLeftBtnChecked(true);
        setRightBtnChecked(false);
    }, []);

    const rightBtnOnChecked = useCallback(() => {
        setDropDownHorizontalAlignment('right');
        setLeftBtnChecked(false);
        setRightBtnChecked(true);
    }, []);

    return (
        <div>
            <div style={{ float: 'left', fontSize: '13px', fontFamily: 'Verdana' }}>
                <h3>Alignment</h3>
                <JqxRadioButton theme={'material-purple'} onChecked={leftBtnOnChecked} checked={leftBtnChecked}>
                    Left
                </JqxRadioButton>
                <JqxRadioButton theme={'material-purple'} onChecked={rightBtnOnChecked} checked={rightBtnChecked}>
                    Right
                </JqxRadioButton>
            </div>
            <JqxDropDownList
                theme={'material-purple'}
                ref={myDropDownList}
                style={{ float: 'left', marginTop: '20px', marginLeft: '100px' }}
                width={150}
                height={30}
                source={source}
                displayMember={'ContactName'}
                valueMember={'notes'}
                dropDownHorizontalAlignment={dropDownHorizontalAlignment}
                dropDownWidth={200}
            />
        </div>
    );
};

export default App;