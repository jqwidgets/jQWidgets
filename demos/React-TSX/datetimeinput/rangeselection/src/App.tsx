import * as React from 'react';
import { useEffect, useRef } from 'react';
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';

function App() {
    const myDateTimeInput = useRef<JqxDateTimeInput>(null);
    const log = useRef<HTMLDivElement>(null);

    const dateOnChange = () => {
        const selection = myDateTimeInput.current!.getRange();
        if (selection.from != null) {
            log.current!.innerHTML = '<div>From: ' + selection.from.toLocaleDateString() + ' <br/>To: ' + selection.to.toLocaleDateString() + '</div>';
        }
    };

    useEffect(() => {
        const date1 = new Date();
        date1.setFullYear(2013, 7, 7);
        const date2 = new Date();
        date2.setFullYear(2013, 7, 15);
        myDateTimeInput.current!.setRange(date1, date2);
        dateOnChange();
    }, []);

    return (
        <div>
            <JqxDateTimeInput
                theme="material-purple"
                ref={myDateTimeInput}
                onChange={dateOnChange}
                width={250}
                height={30}
                selectionMode="range"
            />
            <div ref={log} style={{ marginTop: '10px', fontSize: '13px', fontFamily: 'Verdana' }} />
        </div>
    );
}

export default App;