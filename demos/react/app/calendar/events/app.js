import React from 'react';
import ReactDOM from 'react-dom';

import JqxCalendar from '../../../jqwidgets-react/react_jqxcalendar.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        let panelID = this.refs.myPanel.componentSelector;
        document.getElementById(panelID).style.border = 'none';

        this.refs.myCalendar.on('change viewChange', (event) => {
            let date = event.args.date;
            let view = event.args.view;
            let viewFrom = view.from;
            let viewTo = view.to;
            this.refs.myPanel.clearcontent();
            if (event.type === 'viewChange') {
                this.refs.myPanel.prepend('<div style="margin-top: 5px;">Event Type: viewChange<br/>Date: ' + date + '<br/>View: ' + viewFrom + ' - ' + viewTo + '</div>');
            }
            else {
                this.refs.myPanel.prepend('<div style="margin-top: 5px;">Event Type: change<br/>Date: ' + date + '</div>');
            }
        });
    }
    render() {
        return (
            <div style={{ float: 'left' }}>
                <JqxCalendar ref='myCalendar' style={{ marginTop: 3 }}
                    width={220} height={220}
                />
                <div style={{ marginLeft: 0, marginTop: 20, float: 'left' }}>
                    <div>
                        <span>Events:</span>
                        <JqxPanel ref='myPanel' width={600} height={250} />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
