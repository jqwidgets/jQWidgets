import * as React from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxLoader, { ILoaderProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxloader';

const App = () => {
    const myLoader = React.useRef<JqxLoader>(null);

    const openLoaderClick = () => {
        myLoader.current?.open();
    };

    return (
        <div>
            <JqxLoader
                theme="material-purple"
                ref={myLoader}
                width={100}
                height={60}
                imagePosition="top"
                isModal={true}
            />
            <JqxButton
                theme="material-purple"
                onClick={openLoaderClick}
                width={150}
            >
                Open Loader
            </JqxButton>
        </div>
    );
};

export default App;