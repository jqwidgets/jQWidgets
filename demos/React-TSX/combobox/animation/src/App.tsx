import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import JqxComboBox, { IComboBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
    const myComboBox = useRef<JqxComboBox>(null);

    const source: any = React.useMemo(() => {
        return new jqx.dataAdapter({
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'customers.txt'
        });
    }, []);

    const [animationType, setAnimationType] = useState<IComboBoxProps['animationType']>('fade');
    const [noneChecked, setNoneChecked] = useState(false);
    const [slideChecked, setSlideChecked] = useState(false);
    const [fadeChecked, setFadeChecked] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            myComboBox.current?.setOptions({ selectedIndex: 0 });
        });
    }, []);

    const noneAnimationOnChecked = () => {
        setAnimationType('none');
        setFadeChecked(false);
        setNoneChecked(true);
        setSlideChecked(false);
    };

    const slideAnimationOnChecked = () => {
        setAnimationType('slide');
        setFadeChecked(false);
        setNoneChecked(false);
        setSlideChecked(true);
    };

    const fadeAnimationOnChecked = () => {
        setAnimationType('fade');
        setFadeChecked(true);
        setNoneChecked(false);
        setSlideChecked(false);
    };

    return (
        <div>
            <div id='selectionlog'>
                <h3>Animation Type</h3>
                <JqxRadioButton theme={'material-purple'} onChecked={noneAnimationOnChecked} checked={noneChecked}>
                    None
                </JqxRadioButton>
                <JqxRadioButton theme={'material-purple'} onChecked={slideAnimationOnChecked} checked={slideChecked}>
                    Slide
                </JqxRadioButton>
                <JqxRadioButton theme={'material-purple'} onChecked={fadeAnimationOnChecked} checked={fadeChecked}>
                    Fade
                </JqxRadioButton>
            </div>
            <JqxComboBox
                theme={'material-purple'}
                ref={myComboBox}
                width={150}
                height={30}
                source={source}
                animationType={animationType}
                dropDownHorizontalAlignment={'right'}
                displayMember={'ContactName'}
                valueMember={'CompanyName'}
            />
        </div>
    );
};

export default App;