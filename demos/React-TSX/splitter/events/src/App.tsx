import * as React from 'react';
import './App.css';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

function App() {
    const events = React.useRef<JqxPanel>(null);

    const capitaliseFirstLetter = (word: string): string => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const displayEvent = (event: any): void => {
        let eventData = "Event:" + capitaliseFirstLetter(event.type);
        eventData += ", Panel 1: " + event.args.panels[0].size;
        eventData += ", Panel 2: " + event.args.panels[1].size;
        events.current?.prepend('<div class="item" style="margin-top: 5px;">' + eventData + '</div>');
    };

    const resize = (event: any): void => {
        displayEvent(event);
    };

    const expanded = (event: any): void => {
        displayEvent(event);
    };

    const collapsed = (event: any): void => {
        displayEvent(event);
    };

    return (
        <div>
            <JqxSplitter
                theme={'material-purple'}
                onResize={resize}
                onExpanded={expanded}
                onCollapsed={collapsed}
                // @ts-ignore
                width={850}
                height={480}
                panels={[{ size: 200 }]}
            >
                <div style={{ backgroundColor: "#F5FFF2" }}>
                    <span>Panel 1</span>
                </div>
                <div style={{ backgroundColor: "#F5FFF2" }}>
                    <span>Panel 2</span>
                </div>
            </JqxSplitter>
            <br />
            <div style={{ fontFamily: "Verdana", fontSize: "13px" }}>
                Events:
            </div>
            <JqxPanel theme={'material-purple'} ref={events} height={250} width={450} />
        </div>
    );
}

export default App;