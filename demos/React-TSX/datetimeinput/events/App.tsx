import * as React from 'react';
 


import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}> {

    private myPanel = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);
        this.onValueChanged = this.onValueChanged.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxDateTimeInput theme={'material-purple'} style={{ float: 'left', marginTop: '3px' }}
                    onValueChanged={this.onValueChanged} onOpen={this.onOpen} onClose={this.onClose}
                    width={270} height={25} />

                <div style={{ marginLeft: '20px', float: 'left' }}>
                    <div>
                        <span>Events:</span>
                        <JqxPanel theme={'material-purple'} style={{ border: 'none' }} ref={this.myPanel} width={300} height={250} />
                    </div>
                </div >
            </div>
        );
    }

    private onValueChanged(event: any): void {
        this.myPanel.current!.clearcontent();
        const date = event.args.date;
        this.myPanel.current!.prepend('<div style="margin-top: 5px;">New Value: ' + date + '</div>');
    }

    private onOpen(): void {
        this.myPanel.current!.prepend('<div style="margin-top: 5px;">Popup Opened</div>');
    }

    private onClose(): void {
        this.myPanel.current!.prepend('<div style="margin-top: 5px;">Popup Closed</div>');
    }
}

export default App;