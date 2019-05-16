import * as React from 'react';
 


import './App.css';

import JqxSwitchButton, { ISwitchButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxswitchbutton';

class App extends React.PureComponent<{}, ISwitchButtonProps> {
    private events = React.createRef<HTMLDivElement>();

    private label: any =
        {
            '1': 'New Mail',
            '2': 'Sent Mail',
            '3': 'Calendar Alerts',
            '4': 'Lock Sounds',
            '5': 'Keyboard clicks'
        }

    constructor(props: {}) {
        super(props);

        this.checkedEvent = this.checkedEvent.bind(this);
        this.uncheckedEvent = this.uncheckedEvent.bind(this);
    }

    public render() {
        return (
            <div>
                <div id={"settings-panel"}>
                    <div className={"sections-top-shadow"} />
                    <div className={"settings-section-top settings-section"}>
                        <div className={"settings-label"}>Ringtone</div>
                        <div className={"settings-setter"}>
                            <div className={"settings-melody"}>Marimba</div>
                        </div>
                    </div>
                    <div className={"settings-section"}>
                        <div className={"settings-label"}>New Mail</div>
                        <div data-key={1} className={"settings-setter"}>
                            <JqxSwitchButton onChecked={this.checkedEvent} onUnchecked={this.uncheckedEvent}
                                width={81} height={27} checked={true} />
                        </div>
                    </div>
                    <div className={"settings-section"}>
                        <div className={"settings-label"}>Sent Mail</div>
                        <div data-key={2} className={"settings-setter"}>
                            <JqxSwitchButton onChecked={this.checkedEvent} onUnchecked={this.uncheckedEvent}
                                width={81} height={27} checked={true} />
                        </div>
                    </div>
                    <div className={"settings-section"}>
                        <div className={"settings-label"}>Calendar Alerts</div>
                        <div data-key={3} className={"settings-setter"}>
                            <JqxSwitchButton onChecked={this.checkedEvent} onUnchecked={this.uncheckedEvent}
                                width={81} height={27} checked={true} />
                        </div>
                    </div>
                    <div className={"settings-section"}>
                        <div className={"settings-label"}>Lock Sounds</div>
                        <div data-key={4} className={"settings-setter"}>
                            <JqxSwitchButton onChecked={this.checkedEvent} onUnchecked={this.uncheckedEvent}
                                width={81} height={27} checked={true} />
                        </div>
                    </div>
                    <div className={"sections-section-bottom settings-section"}>
                        <div className={"settings-label"}>Keyboard Clicks</div>
                        <div data-key={5} className={"settings-setter"}>
                            <JqxSwitchButton onChecked={this.checkedEvent} onUnchecked={this.uncheckedEvent}
                                width={81} height={27} checked={false} />
                        </div>
                    </div>
                </div>
                <div className={"events-container"}>
                    <div>Events:</div>
                    <div ref={this.events} />
                </div>
            </div>
        );
    }

    // Event handling
    private checkedEvent(event: any): void {
        const parent = event.target.parentNode;
        const key = parent.dataset.key;
        this.events.current!.innerHTML = this.label[key] + ': Checked';
    }

    private uncheckedEvent(event: any): void {
        const parent = event.target.parentNode;
        const key = parent.dataset.key;
        this.events.current!.innerHTML = this.label[key] + ': Unchecked';
    }
}

export default App;
