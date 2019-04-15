import * as React from 'react';
 


import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, {}> {
    private mySlider = React.createRef<JqxSlider>();
    private events = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);

        this.change = this.change.bind(this);
    }

    public render() {
        return (
            <div style={{ float: "left" }}>
                <JqxSlider theme={'material-purple'} ref={this.mySlider}
                    onChange={this.change}
                    mode={"fixed"}
                />
                <br />
                <div>
                    Events:
                </div>
                <JqxPanel theme={'material-purple'} ref={this.events} style={{ border: "none" }}
                    height={50}
                    width={450}
                />
            </div>
        );
    }

    private displayEvent(event: any) {
        let eventData = event.type;
        eventData += ': ' + event.args.value;
        this.events.current!.clearcontent();
        this.events.current!.prepend('<div class="item" style="margin-top: 5px;">' + eventData + '</div>');
    };

    // Event handling
    private change(event: any): void {
        this.displayEvent(event);
    }
}

export default App;
