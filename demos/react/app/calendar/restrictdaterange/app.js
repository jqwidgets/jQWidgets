import React from 'react';
import ReactDOM from 'react-dom';

import JqxCalendar from '../../../jqwidgets-react/react_jqxcalendar.js';

class App extends React.Component {
    render() {
        return (           
            <div>
                <div>The navigation is restricted from 01/01/2010 to 01/01/2015</div>
                <br />
                <JqxCalendar
                    width={220} height={220}
                    min={new Date(2010, 0, 1)} max={new Date(2014, 11, 31)}

                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
