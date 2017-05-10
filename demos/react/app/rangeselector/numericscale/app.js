import React from 'react';
import ReactDOM from 'react-dom';

import JqxRangeSelector from '../../../jqwidgets-react/react_jqxrangeselector.js';

class App extends React.Component {
    render() {
        return (
            <JqxRangeSelector ref='myRangeSelector'
                width={750}
                height={100}
                min={1000}
                max={10000}
                minorTicksInterval={100}
                majorTicksInterval={1500}
                labelsFormat={'c0'}
                markersFormat={'c0'}
                range={{ from: 3000, to: 5000 }}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
