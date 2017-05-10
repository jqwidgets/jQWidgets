import React from 'react';
import ReactDOM from 'react-dom';

import JqxCalendar from '../../../jqwidgets-react/react_jqxcalendar.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myCalendar.on('change', (event) => {
            let selection = event.args.range;
            let log = document.getElementById('log');
            log.innerHTML = '<div>From: ' + selection.from.toLocaleDateString() + ' <br/>To: ' + selection.to.toLocaleDateString() + '</div>';
        });

        let date1 = new Date();
        date1.setFullYear(2016, 7, 7);
        let date2 = new Date();
        date2.setFullYear(2016, 7, 15);
        this.refs.myCalendar.setRange(date1, date2);
    }
    render() {
        return (
            <div>
                <JqxCalendar ref='myCalendar'
                    width={220} height={220}
                    selectionMode={'range'} value={new Date(2016, 7, 7)}
                />
                <div id='log'></div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
