import * as React from 'react';
import { useRef } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxLoader, { ILoaderProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxloader';

function App() {
    const myLoader = useRef<JqxLoader>(null);
    const style = { display: 'inline-block' };

    const openLoaderClick = (event: any): void => {
        myLoader.current!.open();
    };

    const closeLoaderClick = (event: any): void => {
        myLoader.current!.close();
    };

    return (
        <div>
            <JqxLoader
                theme={'material-purple'}
                ref={myLoader}
                width={100}
                height={35}
                html={"<div class='jqx-loader-text'>Show only text in loader...</div>"}
            />
            <JqxButton
                theme={'material-purple'}
                style={style}
                onClick={openLoaderClick}
                width={150}
            >
                Open Loader
            </JqxButton>
            <JqxButton
                theme={'material-purple'}
                style={style}
                onClick={closeLoaderClick}
                width={100}
            >
                Close
            </JqxButton>
        </div>
    );
}

export default App;