import React from 'react';
import ReactDOM from 'react-dom';

import JqxRangeSelector from '../../../jqwidgets-react/react_jqxrangeselector.js';

class App extends React.Component {
    render() {
        return (
            <JqxRangeSelector ref='myRangeSelector'
                width={750}
                height={90}
                min={0}
                max={10}
                minorTicksInterval={0.1}
                majorTicksInterval={2.5}
                range={{ from: 2, to: 5 }}
                labelsFormatFunction={
                    (value) => {
                        return $.jqx.dataFormat.formatNumber(value, 'f1') + ' mm';
                    }
                }
                markersFormatFunction={
                    (value) => {
                        return $.jqx.dataFormat.formatNumber(value, 'f1') + ' mm';
                    }
                }
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
