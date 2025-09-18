import React, { useState } from 'react';
import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

const App = () => {
    const [min] = useState(new Date(2014, 0, 1));
    const [max] = useState(new Date(2014, 11, 31));
    const [range] = useState({ from: new Date(2014, 3, 15), to: new Date(2014, 7, 29) });

    return (
        <JqxRangeSelector
            theme="material-purple"
            width="100%"
            height={100}
            min={min}
            max={max}
            range={range}
            labelsOnTicks={false}
            majorTicksInterval="month"
            minorTicksInterval="day"
            labelsFormat="MMM"
            markersFormat="d"
        />
    );
};

export default App;