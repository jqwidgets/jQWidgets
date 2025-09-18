import * as React from 'react';
import { useRef } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxLoader from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxloader';

const App = () => {
    const myLoader = useRef<any>(null);
    const style = { display: 'inline-block' };
    const openLoaderClick = () => {
        myLoader.current && myLoader.current.open();
    };
    const closeLoaderClick = () => {
        myLoader.current && myLoader.current.close();
    };
    return (
        <div>
            <JqxLoader theme={'material-purple'} ref={myLoader} width={100} height={60} imagePosition={'top'} rtl={true} />
            <JqxButton theme={'material-purple'} style={style} onClick={openLoaderClick} width={150}>
                Open Loader
            </JqxButton>
            <JqxButton theme={'material-purple'} style={style} onClick={closeLoaderClick} width={100}>
                Close
            </JqxButton>
        </div>
    );
};

export default App;