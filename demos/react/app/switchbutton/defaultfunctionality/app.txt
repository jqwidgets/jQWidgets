import React from 'react';
import ReactDOM from 'react-dom';

import JqxSwitchButton from '../../../jqwidgets-react/react_jqxswitchbutton.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          label:
          {
              'button1': 'New Mail',
              'button2': 'Sent Mail',
              'button3': 'Calendar Alerts',
              'button4': 'Lock Sounds',
              'button5': 'Keyboard clicks'
          }
        };
    }
    componentDidMount() {
      for(let i = 1; i < 6; i++){
        this.refs['button' + i].on('checked', (event) => {
          document.getElementById('events').innerHTML = this.state.label[event.target.classList[0]] + ': Unchecked';
        });
        this.refs['button' + i].on('unchecked', (event) => {
          document.getElementById('events').innerHTML = this.state.label[event.target.classList[0]] + ': Checked';
        });
      }
    }
    render () {
        return (
          <div>
            <div id="settings-panel">
                <div className="sections-top-shadow"/>
                <div className="settings-section-top settings-section">
                    <div className="settings-label">Ringtone</div>
                    <div className="settings-setter">
                        <div className="settings-melody">Marimba</div>
                    </div>
                </div>
                <div className="settings-section">
                    <div className="settings-label">New Mail</div>
                    <div className="settings-setter">
                        <JqxSwitchButton className='button1' ref='button1'
                            width={81} height={27} checked={true}
                        />
                    </div>
                </div>
                <div className="settings-section">
                    <div className="settings-label">Sent Mail</div>
                    <div className="settings-setter">
                        <JqxSwitchButton className='button2' ref='button2'
                            width={81} height={27} checked={true}
                        />
                    </div>
                </div>
                <div className="settings-section">
                    <div className="settings-label">Calendar Alerts</div>
                    <div className="settings-setter">
                        <JqxSwitchButton className='button3' ref='button3'
                            width={81} height={27} checked={true}
                        />
                    </div>
                </div>
                <div className="settings-section">
                    <div className="settings-label">Lock Sounds</div>
                    <div className="settings-setter">
                        <JqxSwitchButton className='button4' ref='button4'
                            width={81} height={27} checked={true}
                        />
                    </div>
                </div>
                <div className="sections-section-bottom settings-section">
                    <div className="settings-label">Keyboard Clicks</div>
                    <div className="settings-setter">
                        <JqxSwitchButton className='button5' ref='button5'
                            width={81} height={27} checked={false}
                        />
                    </div>
                </div>
            </div>
            <div className="events-container">
                <div>Events:</div>
                <div id="events"/>
            </div>
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
