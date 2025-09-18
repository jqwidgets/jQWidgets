import * as React from 'react';
import './App.css';
import JqxSwitchButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxswitchbutton';

const label = {
    '1': 'New Mail',
    '2': 'Sent Mail',
    '3': 'Calendar Alerts',
    '4': 'Lock Sounds',
    '5': 'Keyboard clicks'
};

const App = () => {
    const events = React.useRef<HTMLDivElement>(null);

    const checkedEvent = React.useCallback((event: any) => {
        const parent = event.target.parentNode;
        const key = parent.dataset.key;
        if (events.current) {
            events.current.innerHTML = label[key] + ': Checked';
        }
    }, []);

    const uncheckedEvent = React.useCallback((event: any) => {
        const parent = event.target.parentNode;
        const key = parent.dataset.key;
        if (events.current) {
            events.current.innerHTML = label[key] + ': Unchecked';
        }
    }, []);

    return (
        <div>
            <div id="settings-panel">
                <div className="sections-top-shadow" />
                <div className="settings-section-top settings-section">
                    <div className="settings-label">Ringtone</div>
                    <div className="settings-setter">
                        <div className="settings-melody">Marimba</div>
                    </div>
                </div>
                <div className="settings-section">
                    <div className="settings-label">New Mail</div>
                    <div data-key={1} className="settings-setter">
                        <JqxSwitchButton onChecked={checkedEvent} onUnchecked={uncheckedEvent} width={81} height={27} checked={true} />
                    </div>
                </div>
                <div className="settings-section">
                    <div className="settings-label">Sent Mail</div>
                    <div data-key={2} className="settings-setter">
                        <JqxSwitchButton onChecked={checkedEvent} onUnchecked={uncheckedEvent} width={81} height={27} checked={true} />
                    </div>
                </div>
                <div className="settings-section">
                    <div className="settings-label">Calendar Alerts</div>
                    <div data-key={3} className="settings-setter">
                        <JqxSwitchButton onChecked={checkedEvent} onUnchecked={uncheckedEvent} width={81} height={27} checked={true} />
                    </div>
                </div>
                <div className="settings-section">
                    <div className="settings-label">Lock Sounds</div>
                    <div data-key={4} className="settings-setter">
                        <JqxSwitchButton onChecked={checkedEvent} onUnchecked={uncheckedEvent} width={81} height={27} checked={true} />
                    </div>
                </div>
                <div className="sections-section-bottom settings-section">
                    <div className="settings-label">Keyboard Clicks</div>
                    <div data-key={5} className="settings-setter">
                        <JqxSwitchButton onChecked={checkedEvent} onUnchecked={uncheckedEvent} width={81} height={27} checked={false} />
                    </div>
                </div>
            </div>
            <div className="events-container">
                <div>Events:</div>
                <div ref={events} />
            </div>
        </div>
    );
};

export default App;