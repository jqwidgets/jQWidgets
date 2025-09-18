import React, { useRef, useCallback } from 'react';
import JqxMaskedInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmaskedinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

const App = () => {
    const events = useRef<JqxPanel>(null);

    const change = useCallback((event: any) => {
        const eventType = event.type;
        const eventValue = event.args.value;
        events.current!.prepend('<div style="margin-top: 5px;">type: ' + eventType + '; value: ' + eventValue + '</div>');
    }, []);

    return (
        <div>
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', marginTop: '10px' }}>
                Phone Number
            </div>
            <JqxMaskedInput
                theme={'material-purple'}
                style={{ marginTop: '3px' }}
                onChange={change}
                width={250}
                height={25}
                mask={'(###)###-####'}
            />
            <div style={{ marginLeft: '0px', marginTop: '20px' }}>
                <div>
                    <span>Events:</span>
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
};

export default App;