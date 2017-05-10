import React from 'react';
import ReactDOM from 'react-dom';

import JqxRangeSelector from '../../../jqwidgets-react/react_jqxrangeselector.js';

class App extends React.Component {
    render() {
        return (
            <JqxRangeSelector ref='myRangeSelector'
                width={750}
                height={100}
                min={-1000}
                max={-100}
                minorTicksInterval={10}
                majorTicksInterval={100}
                range={{ from: -500, to: -300 }}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
