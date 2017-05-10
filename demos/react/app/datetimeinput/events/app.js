import React from 'react';
import ReactDOM from 'react-dom';

import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        document.getElementsByClassName('myPanel')[0].style.border = 'none';

        this.refs.myDateTimeInput.on('valueChanged', (event) => {
            this.refs.myPanel.clearcontent();
            let date = event.args.date;
            this.refs.myPanel.prepend('<div style="margin-top: 5px;">New Value: ' + date + '</div>');
        });
        this.refs.myDateTimeInput.on('open', (event) => {
            let date = event.args.date;
            this.refs.myPanel.prepend('<div style="margin-top: 5px;">Popup Opened</div>');
        });
        this.refs.myDateTimeInput.on('close', (event) => {
            let date = event.args.date;
            this.refs.myPanel.prepend('<div style="margin-top: 5px;">Popup Closed</div>');
        });
    }
    render() {
        return (
            <div style={{ float: 'left' }}>
                <JqxDateTimeInput ref='myDateTimeInput' style={{ float: 'left', marginTop: 3 }}
                    width={270} height={25}
                />
                <div style={{ marginLeft: 20, float: 'left' }}>
                    <div>
                        <span>Events:</span>
                        <JqxPanel ref='myPanel' className='myPanel' width={300} height={250} />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
