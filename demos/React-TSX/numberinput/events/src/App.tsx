import * as React from 'react';
import { useRef, useCallback } from 'react';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

function App() {
    const events = useRef<JqxPanel>(null);

    const onChange = useCallback((event: any) => {
        const value = event.args.value;
        events.current!.clearcontent();
        events.current!.prepend('<div style="margin-top: 5px;">Value: ' + value + '</div>');
    }, []);

    const onTextChanged = useCallback((event: any) => {
        const text = event.args.text;
        events.current!.prepend('<div style="margin-top: 5px;">Text: ' + text + '</div>');
    }, []);

    return (
        <div style={{ float: 'left' }}>
            <div style={{ marginTop: '10px' }}>
                Number
            </div>
            <div style={{ marginTop: '3px' }}>
                <JqxNumberInput
                    theme={'material-purple'}
                    onChange={onChange}
                    onTextchanged={onTextChanged}
                    width={250}
                    height={25}
                    spinButtons={true}
                />
            </div>
            <div style={{ marginLeft: '0px', marginTop: '20px', float: 'left' }}>
                <div>
                    <span>
                        Events:
                    </span>
                    <JqxPanel
                        theme={'material-purple'}
                        ref={events}
                        style={{ border: 'none' }}
                        width={300}
                        height={250}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;