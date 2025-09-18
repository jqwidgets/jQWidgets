import * as React from 'react';
import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

function App() {
    return (
        <JqxRangeSelector
            theme="material-purple"
            width="100%"
            height={100}
            min={-1000}
            max={-100}
            range={{ from: -500, to: -300 }}
            majorTicksInterval={100}
            minorTicksInterval={10}
        />
    );
}

export default App;