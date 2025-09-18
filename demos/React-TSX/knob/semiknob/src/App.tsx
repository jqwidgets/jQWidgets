import * as React from 'react';
import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

const App = () => {
    const marks = React.useMemo(() => ({
        colorProgress: '#17a25d',
        colorRemaining: '#333',
        drawAboveProgressBar: true,
        majorInterval: 10,
        majorSize: '1%',
        minorInterval: 5,
        offset: '75%',
        size: '1%',
        thickness: 2
    }), []);
    const labels = React.useMemo(() => ({
        formatFunction: (label: string): string | number => {
            if (label !== '0' && label !== '100' && label !== '-100') {
                return label;
            }
            return label === '0' ? 'Off' : label === '-100' ? 'Min' : 'Max';
        },
        offset: '88%',
        step: 20
    }), []);
    const progressBar = React.useMemo(() => ({
        offset: '0%',
        size: '80%'
    }), []);
    const pointer = React.useMemo(() => ({
        offset: '0%',
        size: '70%',
        style: { fill: "#ff6126", stroke: "#333" },
        thickness: 4,
        type: 'arrow'
    }), []);
    const spinner = React.useMemo(() => ({
        innerRadius: '35%',
        outerRadius: '70%',
        style: { fill: '#17a25d', stroke: '#17a25d' }
    }), []);

    return (
        <JqxKnob
            value={-100}
            min={-100}
            max={100}
            step={0.5}
            startAngle={200}
            endAngle={340}
            dragStartAngle={200}
            dragEndAngle={340}
            snapToStep={true}
            rotation={'clockwise'}
            marks={marks}
            labels={labels}
            progressBar={progressBar}
            pointer={pointer}
            spinner={spinner}
        />
    );
};

export default App;