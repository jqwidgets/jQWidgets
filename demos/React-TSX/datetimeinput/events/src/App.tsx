import * as React from 'react';
import { useRef, useCallback } from 'react';
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

function App() {
    const myPanel = useRef<JqxPanel>(null);

    const onValueChanged = useCallback((event: any) => {
        myPanel.current?.clearcontent();
        const date = event.args.date;
        myPanel.current?.prepend('<div style="margin-top: 5px;">New Value: ' + date + '</div>');
    }, []);

    const onOpen = useCallback(() => {
        myPanel.current?.prepend('<div style="margin-top: 5px;">Popup Opened</div>');
    }, []);

    const onClose = useCallback(() => {
        myPanel.current?.prepend('<div style="margin-top: 5px;">Popup Closed</div>');
    }, []);

    return (
        <div>
            <JqxDateTimeInput
                theme={'material-purple'}
                style={{ float: 'left', marginTop: '3px' }}
                onValueChanged={onValueChanged}
                onOpen={onOpen}
                onClose={onClose}
                width={270}
                height={25}
            />
            <div style={{ marginLeft: '20px', float: 'left' }}>
                <div>
                    <span>Events:</span>
                    <JqxPanel
                        theme={'material-purple'}
                        style={{ border: 'none' }}
                        ref={myPanel}
                        width={300}
                        height={250}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;