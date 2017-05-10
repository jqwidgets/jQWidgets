import React from 'react';
import ReactDOM from 'react-dom';

import JqxRangeSelector from '../../../jqwidgets-react/react_jqxrangeselector.js';

class App extends React.Component {
    render() {
        return (
            <JqxRangeSelector ref='myRangeSelector'
                width={750}
                height={100}
                min={new Date(2014, 5, 1, 0, 0, 0)}
                max={new Date(2014, 5, 1, 24, 0, 0)}
                labelsOnTicks={false}
                range={{ from: new Date(2014, 5, 1, 4, 0, 0), to: new Date(2014, 5, 1, 12, 0, 0) }}
                majorTicksInterval={{ hours: 4 }}
                minorTicksInterval={{ minutes: 30 }}
                labelsFormat={'hh:mm tt'}
                markersFormat={'hh:mm tt'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
