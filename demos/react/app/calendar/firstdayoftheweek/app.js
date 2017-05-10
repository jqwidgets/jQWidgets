import React from 'react';
import ReactDOM from 'react-dom';

import JqxCalendar from '../../../jqwidgets-react/react_jqxcalendar.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myDropDownList.on('select', (event) => {
            let index = event.args.index;
            if (index === 6) {
                index = -1;
            }
            this.refs.myCalendar.firstDayOfWeek(index + 1);
        });
    }
    render() {
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return (
            <div>
                <JqxCalendar ref='myCalendar'
                    width={220} height={220} enableTooltips={false}
                />

                <br /><br />
                <div>Choose the first day of the week</div>
                <br /><br />

                <JqxDropDownList ref='myDropDownList'
                    width={220} height={25} source={days}
                    selectedIndex={6} autoDropDownHeight={true}
                />
            </div >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
