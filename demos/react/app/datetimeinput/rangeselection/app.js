import React from 'react';
import ReactDOM from 'react-dom';

import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';

class App extends React.Component {
    componentDidMount() {
        let date1 = new Date();
        date1.setFullYear(2013, 7, 7);
        let date2 = new Date();
        date2.setFullYear(2013, 7, 15);
        this.refs.myDateTimeInput.setRange(date1, date2);

        let selection = this.refs.myDateTimeInput.getRange();
        let log = document.getElementById('log');

        if (selection.from != null) {
            log.innerHTML = '<div>From: ' + selection.from.toLocaleDateString() + ' <br/>To: ' + selection.to.toLocaleDateString() + '</div>';
        }
    }
    render() {
        return (
            <div>
                <JqxDateTimeInput ref='myDateTimeInput'
                    width={250} height={25} selectionMode={'range'}
                />
                <div style={{ marginTop: 10, fontSize: 13, fontFamily: 'Verdana' }} id='log' />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
