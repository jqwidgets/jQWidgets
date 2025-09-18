import * as React from 'react';
import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

function App() {
    const styles = React.useMemo(() => ({
        fill: {
            color: '#fefefe',
            gradientStops: [[0, 1], [50, 0.9], [100, 1]],
            gradientType: 'linear'
        },
        stroke: '#dfe3e9',
        strokeWidth: 3
    }), []);

    const marks = React.useMemo(() => ({
        colorProgress: '#2db2e4',
        colorRemaining: '#333',
        majorInterval: 10,
        majorSize: '2%',
        minorInterval: 2,
        offset: '75%',
        size: '2%',
        thickness: 2,
        type: 'circle'
    }), []);

    const labels = React.useMemo<IKnobProps['labels']>(() => ({
        formatFunction: (label: string): string | number => {
            if (label !== '0' && label !== '100') {
                return label;
            }
            return label === '0' ? 'Min' : 'Max';
        },
        offset: '88%',
        step: 5,
        visible: true
    }), []);

    const progressBar = React.useMemo(() => ({
        offset: '0%',
        size: '70%'
    }), []);

    const pointer = React.useMemo(() => ({
        offset: '0%',
        size: '70%',
        style: { fill: '#00a4e1', stroke: '#00a4e1' },
        thickness: 4,
        type: 'line'
    }), []);

    return (
        <JqxKnob
            value={60}
            min={0}
            max={100}
            startAngle={120}
            endAngle={420}
            styles={styles}
            snapToStep={true}
            rotation="clockwise"
            marks={marks}
            labels={labels}
            progressBar={progressBar}
            pointer={pointer}
        />
    );
}

export default App;