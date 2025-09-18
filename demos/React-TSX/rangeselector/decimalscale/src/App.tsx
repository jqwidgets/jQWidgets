import * as React from 'react';
import JqxRangeSelector, { IRangeSelectorProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

const App = () => {
    const formatFunction = React.useCallback((value: number): string => {
        return jqx.dataFormat.formatNumber(value, 'f1') + " mm";
    }, []);

    return (
        <JqxRangeSelector
            theme="material-purple"
            width="100%"
            height={100}
            min={0}
            max={10}
            range={{ from: 2, to: 5 }}
            labelsOnTicks={false}
            majorTicksInterval={2.5}
            minorTicksInterval={0.1}
            labelsFormatFunction={formatFunction}
            markersFormatFunction={formatFunction}
        />
    );
};

export default App;