import React from 'react';
import ReactDOM from 'react-dom';

import JqxRangeSelector from '../../../jqwidgets-react/react_jqxrangeselector.js';

class App extends React.Component {
    render () {
        return (
            <JqxRangeSelector ref='myRangeSelector'
                width={750}
                height={100}
                min={new Date(2014, 0, 1)}
                max={new Date(2014, 11, 31)}
                labelsOnTicks={false}
                range={{ from: new Date(2014, 3, 15), to: new Date(2014, 7, 29) }}
                majorTicksInterval={'month'}
                minorTicksInterval={'day'}
                labelsFormat={'MMM'}
                markersFormat={'d'}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
