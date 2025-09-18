import * as React from 'react';
import './App.css';
import JqxButton, { IButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';

const App = () => {
    const [imgPosition, setImgPosition] = React.useState<IButtonProps['imgPosition']>('center');
    const [textImageRelation, setTextImageRelation] = React.useState<IButtonProps['textImageRelation']>('imageBeforeText');
    const [textPosition, setTextPosition] = React.useState<IButtonProps['textPosition']>('left');
    const [value, setValue] = React.useState("<span style={{ fontWeight: 'bold' }}>HTML Button</span>");

    const textImageButton = React.useRef<JqxButton>(null);
    const htmlButton = React.useRef<JqxButton>(null);
    const events = React.useRef<HTMLDivElement>(null);

    const buttonClicked = React.useCallback(() => {
        if (events.current) events.current.innerHTML = '<span>Button Clicked</span>';
    }, []);

    const submitButtonClicked = React.useCallback(() => {
        if (events.current) events.current.innerHTML = '<span>Submit Button Clicked</span>';
    }, []);

    const imageButtonClicked = React.useCallback(() => {
        if (events.current) events.current.innerHTML = '<span>Image Button Clicked</span>';
    }, []);

    const textImageButtonClicked = React.useCallback(() => {
        if (events.current) events.current.innerHTML = '<span>Text/Image Button Clicked</span>';
        setImgPosition('left');
        setTextImageRelation('textBeforeImage');
        setTextPosition('center');
    }, []);

    const hTMLButtonClicked = React.useCallback(() => {
        if (events.current) events.current.innerHTML = '<span>HTML Button Clicked</span>';
        setValue("<span style='font-style: italic; position: relative; right: 8px'>Thanks for clicking me!</span>");
    }, []);

    return (
        <div>
            <div style={{ marginTop: '20px' }}>
                <JqxButton theme={'material-purple'} width={120} height={30} onClick={buttonClicked}>Button</JqxButton>
            </div>
            <div style={{ marginTop: '20px' }}>
                <JqxButton theme={'material-purple'} width={120} height={30} onClick={submitButtonClicked}>Submit</JqxButton>
            </div>
            <div style={{ marginTop: '20px' }}>
                <JqxButton theme={'material-purple'} width={120} height={40} imgSrc={'https://www.jqwidgets.com/react/images/facebook.png'} onClick={imageButtonClicked} />
            </div>
            <div style={{ marginTop: '20px' }}>
                <JqxButton
                    theme={'material-purple'}
                    ref={textImageButton}
                    onClick={textImageButtonClicked}
                    width={120}
                    height={40}
                    textImageRelation={textImageRelation}
                    imgPosition={imgPosition}
                    textPosition={textPosition}
                    imgSrc={'https://www.jqwidgets.com/react/images/twitter.png'}
                >
                    Button
                </JqxButton>
            </div>
            <div style={{ marginTop: '20px' }}>
                <JqxButton
                    theme={'material-purple'}
                    ref={htmlButton}
                    onClick={hTMLButtonClicked}
                    width={120}
                    height={40}
                    value={value}
                />
            </div>
            <div style={{ marginTop: '20px' }}>
                <JqxButton theme={'material-purple'} width={120} height={30} disabled={true}>Disabled</JqxButton>
            </div>
            <div style={{ marginTop: '1em' }}>Events:</div>
            <div ref={events} />
        </div>
    );
};

export default App;