import * as React from 'react';
import { useEffect, useRef } from 'react';
import JqxTextArea from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea';

const App = () => {
    const myTextArea = useRef<JqxTextArea>(null);
    const text = 'jQWidgets is a comprehensive and innovative widget library built on top of the jQuery JavaScript Library. It empowers developers to deliver professional, cross-browser compatible web applications, while significantly minimizing their development time. jQWidgets contains more than 60 UI widgets and is one of the fastest growing JavaScript UI frameworks on the Web.';

    useEffect(() => {
        myTextArea.current?.val(text);
    }, []);

    return (
        <JqxTextArea
            theme="material-purple"
            ref={myTextArea}
            width={300}
            height={100}
            rtl={true}
        />
    );
};

export default App;