import * as React from 'react';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import JqxDropDownList, { IDropDownListProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
    const myDropDownList = useRef<JqxDropDownList>(null);

    const source = useMemo(() => {
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
    }, []);

    const [dropDownVerticalAlignment, setDropDownVerticalAlignment] = useState<IDropDownListProps['dropDownVerticalAlignment']>('top');
    const [topBtnChecked, setTopBtnChecked] = useState(true);
    const [bottomBtnChecked, setBottomBtnChecked] = useState(false);

    useEffect(() => {
        myDropDownList.current?.setOptions({ selectedIndex: 0 });
    }, []);

    const topBtnOnChecked = useCallback(() => {
        setDropDownVerticalAlignment('top');
        setTopBtnChecked(true);
        setBottomBtnChecked(false);
    }, []);

    const bottomBtnOnChecked = useCallback(() => {
        setDropDownVerticalAlignment('bottom');
        setTopBtnChecked(false);
        setBottomBtnChecked(true);
    }, []);

    return (
        <div>
            <JqxDropDownList
                theme="material-purple"
                ref={myDropDownList}
                style={{ float: 'left', marginTop: '270px' }}
                width={150}
                height={30}
                source={source}
                displayMember="ContactName"
                valueMember="notes"
                dropDownVerticalAlignment={dropDownVerticalAlignment}
                dropDownWidth={200}
            />

            <div style={{ float: 'left', fontSize: '13px', fontFamily: 'Verdana', marginLeft: '100px', marginTop: '270px' }}>
                <h3>Alignment</h3>
                <JqxRadioButton theme="material-purple" onChecked={topBtnOnChecked} checked={topBtnChecked}>
                    Top
                </JqxRadioButton>
                <JqxRadioButton theme="material-purple" onChecked={bottomBtnOnChecked} checked={bottomBtnChecked}>
                    Bottom
                </JqxRadioButton>
            </div>
        </div>
    );
};

export default App;