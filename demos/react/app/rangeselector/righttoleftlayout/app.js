import React from 'react';
import ReactDOM from 'react-dom';

import JqxRangeSelector from '../../../jqwidgets-react/react_jqxrangeselector.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myRangeSelector.setRange(30, 60);
    }
    render() {
        return (
            <JqxRangeSelector ref='myRangeSelector'
                width={750}
                height={100}
                min={0}
                max={100}
                minorTicksInterval={1}
                majorTicksInterval={10}
                range={{ from: 40, to: 60 }}
                rtl={true}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
