import { useState, useCallback } from 'react';
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
    const [animationType, setAnimationType] = useState<'none' | 'slide' | 'fade'>('fade');
    const [noneChecked, setNoneChecked] = useState(false);
    const [slideChecked, setSlideChecked] = useState(false);
    const [fadeChecked, setFadeChecked] = useState(true);

    const noneAnimationBtn = useCallback(() => {
        setAnimationType('none');
        setNoneChecked(true);
        setSlideChecked(false);
        setFadeChecked(false);
    }, []);

    const slideAnimationBtn = useCallback(() => {
        setAnimationType('slide');
        setNoneChecked(false);
        setSlideChecked(true);
        setFadeChecked(false);
    }, []);

    const fadeAnimationBtn = useCallback(() => {
        setAnimationType('fade');
        setNoneChecked(false);
        setSlideChecked(false);
        setFadeChecked(true);
    }, []);

    return (
        <div>
            <div style={{ float: 'left' }}>
                <h3>Animation Type</h3>
                <JqxRadioButton
                    theme="material-purple"
                    onChecked={noneAnimationBtn}
                    checked={noneChecked}
                >
                    None
                </JqxRadioButton>
                <div style={{ marginTop: '10px' }} />
                <JqxRadioButton
                    theme="material-purple"
                    onChecked={slideAnimationBtn}
                    checked={slideChecked}
                >
                    Slide
                </JqxRadioButton>
                <div style={{ marginTop: '10px' }} />
                <JqxRadioButton
                    theme="material-purple"
                    onChecked={fadeAnimationBtn}
                    checked={fadeChecked}
                >
                    Fade
                </JqxRadioButton>
            </div>
            <JqxDateTimeInput
                theme="material-purple"
                style={{ float: 'left', marginTop: '40px', marginLeft: '100px' }}
                width={150}
                height={30}
                animationType={animationType}
                dropDownHorizontalAlignment="right"
            />
        </div>
    );
};

export default App;