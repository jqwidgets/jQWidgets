import React from 'react';
import ReactDOM from 'react-dom';

import JqxRangeSelector from '../../../jqwidgets-react/react_jqxrangeselector.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.submit.on('click', () => {
            let months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
            let range = this.refs.myRangeSelector.getRange();
            let fromDate = range.from.getDate();
            let fromMonth = range.from.getMonth();
            let toDate = range.to.getDate();
            let toMonth = range.to.getMonth();
            document.getElementById('result').innerText = 'Vacation period selected: from ' + months[fromMonth] + ' ' + fromDate + ' to ' + months[toMonth] + ' ' + toDate;
        });
    }
    render() {
        return (
            <div>
                <JqxRangeSelector ref='myRangeSelector'
                    width={500}
                    height={100}
                    min={new Date(2014, 5, 1)}
                    max={new Date(2014, 9, 1)}
                    range={{ from: new Date(2014, 5, 1), to: new Date(2014, 6, 29), min: { days: 7 } }}
                    majorTicksInterval={'week'}
                    minorTicksInterval={'day'}
                    labelsFormat={'dd'}
                    markersFormat={'d'}
                    showGroupLabels={true}
                >
                    <img id='backgroundImage' src='../../images/transparent.png' />
                </JqxRangeSelector>

                <JqxButton ref='submit' value='Submit vacation' style={{ marginLeft: 80, marginTop: 20 }} />
                <div style={{ marginLeft: 80, marginTop: 10, }} id='result'></div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
