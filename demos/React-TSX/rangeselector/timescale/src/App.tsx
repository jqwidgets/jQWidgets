import * as React from 'react';
import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

const App = () => {
    const labelsFormat = 'hh:mm tt';
    const majorTicksInterval = { hours: 4 };
    const markersFormat = 'hh:mm tt';
    const max = new Date(2014, 5, 1, 24, 0, 0);
    const min = new Date(2014, 5, 1, 0, 0, 0);
    const minorTicksInterval = { minutes: 30 };
    const range = { from: new Date(2014, 5, 1, 4, 0, 0), to: new Date(2014, 5, 1, 12, 0, 0) };

    return (
        <JqxRangeSelector
            theme="material-purple"
            // @ts-ignore
            width="100%"
            height={100}
            min={min}
            max={max}
            range={range}
            labelsFormat={labelsFormat}
            markersFormat={markersFormat}
            majorTicksInterval={majorTicksInterval}
            minorTicksInterval={minorTicksInterval}
        />
    );
};

export default App;