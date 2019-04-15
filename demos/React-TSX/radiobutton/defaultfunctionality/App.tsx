import * as React from 'react';
 


import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

class App extends React.PureComponent<{}> {

    private events = React.createRef<HTMLDivElement>();
    private count: number = 0;

    constructor(props: {}) {
        super(props);
        this.clearLog = this.clearLog.bind(this);
        this.firstBtnOnChange = this.firstBtnOnChange.bind(this);
        this.secondBtnOnChange = this.secondBtnOnChange.bind(this);
        this.thirdBtnOnChange = this.thirdBtnOnChange.bind(this);
    }

    public render() {
        return (
            <div>
                <h3>House Contract</h3>

                <JqxRadioButton theme={'material-purple'} onChange={this.firstBtnOnChange}
                    width={250} height={25} checked={true}>
                    <span>12 Months Contract</span>
                </JqxRadioButton>

                <JqxRadioButton theme={'material-purple'} onChange={this.secondBtnOnChange}
                    width={250} height={25}>
                    <span>6 Months Contract</span>
                </JqxRadioButton>

                <JqxRadioButton theme={'material-purple'} onChange={this.thirdBtnOnChange}
                    width={250} height={25}>
                    <span>3 Months Contract</span>
                </JqxRadioButton>

                <JqxRadioButton theme={'material-purple'}
                    width={250} height={25} disabled={true}>
                    <span>1 Month Contract</span>
                </JqxRadioButton>

                <div style={{ marginTop: '10px' }}>
                    <div>Events:</div>
                    <div ref={this.events} />
                </div>
            </div>
        );
    }

    private clearLog(): void {
        this.count++;
        const log = this.events.current!;

        if (this.count >= 2) {
            log.innerHTML = '';
            this.count = 0;
        }
    }

    private firstBtnOnChange(event: any): void {
        this.clearLog();
        const log = this.events.current!;
        const checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 12 Months Contract</span></div>';
        }
        else {
            log.innerHTML += '<div><span>Unchecked: 12 Months Contract</span></div>';
        }
    }

    private secondBtnOnChange(event: any): void {
        this.clearLog();
        const log = this.events.current!;
        const checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 6 Months Contract</span></div>';
        } else {
            log.innerHTML += '<div><span>Unchecked: 6 Months Contract</span></div>';
        }
    }

    private thirdBtnOnChange(event: any): void {
        this.clearLog();
        const log = this.events.current!;
        const checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 3 Months Contract</span></div>';
        } else {
            log.innerHTML += '<div><span>Unchecked: 3 Months Contract</span></div>';
        }
    }

}

export default App;
