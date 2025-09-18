import * as React from 'react';
import { useState, useMemo } from 'react';
import JqxDropDownList, { IDropDownListProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
    const source = useMemo(
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

    const [animationType, setAnimationType] = useState<IDropDownListProps['animationType']>('fade');
    const [fadeChecked, setFadeChecked] = useState(true);
    const [noneChecked, setNoneChecked] = useState(false);
    const [slideChecked, setSlideChecked] = useState(false);

    const noneAnimationBtnOnChecked = React.useCallback(() => {
        setAnimationType('none');
        setFadeChecked(false);
        setNoneChecked(true);
        setSlideChecked(false);
    }, []);

    const slideAnimationBtnOnChecked = React.useCallback(() => {
        setAnimationType('slide');
        setFadeChecked(false);
        setNoneChecked(false);
        setSlideChecked(true);
    }, []);

    const fadeAnimationBtnOnChecked = React.useCallback(() => {
        setAnimationType('fade');
        setFadeChecked(true);
        setNoneChecked(false);
        setSlideChecked(false);
    }, []);

    return (
        <div>
            <div style={{ float: 'left', fontSize: '13px', fontFamily: 'Verdana' }}>
                <h3>Animation Type</h3>
                <JqxRadioButton
                    theme="material-purple"
                    onChecked={noneAnimationBtnOnChecked}
                    checked={noneChecked}
                >
                    None
                </JqxRadioButton>
                <JqxRadioButton
                    theme="material-purple"
                    style={{ marginTop: '10px' }}
                    onChecked={slideAnimationBtnOnChecked}
                    checked={slideChecked}
                >
                    Slide
                </JqxRadioButton>
                <JqxRadioButton
                    theme="material-purple"
                    style={{ marginTop: '10px' }}
                    onChecked={fadeAnimationBtnOnChecked}
                    checked={fadeChecked}
                >
                    Fade
                </JqxRadioButton>
            </div>
            <JqxDropDownList
                theme="material-purple"
                style={{ float: 'left', marginTop: '20px', marginLeft: '100px' }}
                width={150}
                height={30}
                source={source}
                selectedIndex={0}
                animationType={animationType}
                dropDownHorizontalAlignment="right"
                dropDownWidth={200}
                displayMember="ContactName"
                valueMember="CompanyName"
            />
        </div>
    );
};

export default App;