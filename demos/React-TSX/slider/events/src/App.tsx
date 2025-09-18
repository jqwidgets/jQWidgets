import * as React from 'react';
import { useRef } from 'react';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

function App() {
    const mySlider = useRef<JqxSlider>(null);
    const events = useRef<JqxPanel>(null);

    const displayEvent = (event: any) => {
        let eventData = event.type + ': ' + event.args.value;
        events.current?.clearcontent();
        events.current?.prepend('<div class="item" style="margin-top: 5px;">' + eventData + '</div>');
    };

    const change = (event: any) => {
        displayEvent(event);
    };

    return (
        <div style={{ float: "left" }}>
            <JqxSlider
                theme="material-purple"
                ref={mySlider}
                onChange={change}
                mode="fixed"
            />
            <br />
            <div>
                Events:
            </div>
            <JqxPanel
                theme="material-purple"
                ref={events}
                style={{ border: "none" }}
                height={50}
                width={450}
            />
        </div>
    );
}

export default App;