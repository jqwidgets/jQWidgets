import React, { useMemo } from 'react';
import JqxGauge from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgauge';

const App = () => {
    const ranges = useMemo(() => [
        { startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
        { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
        { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
        { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }
    ], []);

    const ticksMajor = useMemo(() => ({ interval: 20, size: '9%' }), []);
    const ticksMinor = useMemo(() => ({ interval: 10, size: '5%' }), []);

    return (
        <JqxGauge
            width={'40%'}
            ranges={ranges}
            ticksMinor={ticksMinor}
            ticksMajor={ticksMajor}
            value={0}
            colorScheme={'scheme05'}
            animationDuration={1200}
        />
    );
};

export default App;