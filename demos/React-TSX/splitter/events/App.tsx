import * as React from 'react';
 


import './App.css';

import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

class App extends React.PureComponent<{}, {}> {
    private events = React.createRef<JqxPanel>();
    constructor(props: {}) {
        super(props);

        this.resize = this.resize.bind(this);
        this.expanded = this.expanded.bind(this);
        this.collapsed = this.collapsed.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxSplitter theme={'material-purple'}
                    onResize={this.resize}
                    onExpanded={this.expanded}
                    onCollapsed={this.collapsed}
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
                <JqxPanel theme={'material-purple'} ref={this.events}
                    height={250}
                    width={450}
                />
            </div>
        );
    }

    private capitaliseFirstLetter = (word: string): string => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    private displayEvent = (event: any): void => {
        let eventData = "Event:" + this.capitaliseFirstLetter(event.type);
        eventData += ", Panel 1: " + event.args.panels[0].size;
        eventData += ", Panel 2: " + event.args.panels[1].size;
        this.events.current!.prepend('<div class="item" style="margin-top: 5px;">' + eventData + '</div>');
    };

    // Event handling
    private resize(event: any): void {
        this.displayEvent(event);
    };

    private expanded(event: any): void {
        this.displayEvent(event);
    };

    private collapsed(event: any): void {
        this.displayEvent(event);
    };
}

export default App;
