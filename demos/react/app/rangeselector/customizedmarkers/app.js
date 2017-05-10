import React from 'react';
import ReactDOM from 'react-dom';

import JqxRangeSelector from '../../../jqwidgets-react/react_jqxrangeselector.js';

class App extends React.Component {
    render() {
        return (
            <JqxRangeSelector ref='myRangeSelector'
                width={700}
                height={100}
                min={0}
                max={200}
                majorTicksInterval={20}
                range={{ from: 10, to: 50 }}
                markersFormatFunction={
                    (value, position) => {
                        let side;
                        if (position == 'left') {
                            side = 'From';
                        } else if (position == 'right') {
                            side = 'To';
                        };
                        return side + ': <span>' + value.toFixed(0) + '</span>';
                    }
                }
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
