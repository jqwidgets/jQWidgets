import * as React from 'react';
import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';

function App() {
    const labels = React.useMemo(
        () => ({
            formatFunction: (value: number): string => {
                return value + ' m';
            },
            indent: 15,
            precision: 1
        }),
        []
    );

    const values = React.useMemo(
        () => [12, -35, -14.78, 29.5, 23.124, 41],
        []
    );

    return (
        <JqxBarGauge
            width={'100%'}
            max={45}
            min={-45}
            baseValue={0}
            labels={labels}
            values={values}
            startAngle={270}
            endAngle={90}
            animationDuration={0}
            relativeInnerRadius={0.2}
            colorScheme={'scheme02'}
        />
    );
}

export default App;