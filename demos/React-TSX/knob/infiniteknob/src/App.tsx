import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

function App() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [value, setValue] = useState(60);

    const oldValue = useRef(0);
    const newValue = useRef(60);

    const styles = {
        fill: {
            color: '#fefefe',
            gradientStops: [[0, 1], [50, 0.9], [100, 1]],
            gradientType: 'linear',
        },
        stroke: '#dfe3e9',
        strokeWidth: 3,
    };

    const marks = {
        colorProgress: '#333',
        colorRemaining: '#333',
        majorInterval: 10,
        majorSize: '9%',
        minorInterval: 2,
        offset: '71%',
        size: '6%',
        thickness: 1,
        type: 'line',
    };

    const labels = {
        offset: '88%',
        step: 10,
    };

    const progressBar = {
        background: {
            fill: {
                color: '#ff8b1e',
                gradientStops: [[0, 1], [50, 0.9], [100, 1]],
                gradientType: 'linear',
            },
            stroke: '#ff8b1e',
        },
        offset: '60%',
        size: '9%',
        style: {
            fill: {
                color: '#00a644',
                gradientStops: [[0, 1], [50, 0.9], [100, 1]],
                gradientType: 'linear',
            },
            stroke: '#00a644',
        },
    };

    const pointer = {
        offset: '38%',
        size: '5%',
        style: { fill: '#ef6100', stroke: '#ef6100' },
        thickness: 20,
        type: 'circle',
    };

    const spinner = {
        innerRadius: '45%',
        marks: {
            colorProgress: '#fff',
            colorRemaining: '#fff',
            majorInterval: 10,
            majorSize: '14%',
            minorInterval: 10,
            offset: '46%',
            size: '14%',
            thickness: 2,
            type: 'line',
        },
        outerRadius: '60%',
        style: {
            fill: {
                color: '#00a4e1',
                gradientStops: [[0, 1], [50, 0.9], [100, 1]],
                gradientType: 'linear',
            },
            stroke: '#00a4e1',
        },
    };

    const dial = {
        innerRadius: '0%',
        outerRadius: '45%',
        style: {
            fill: {
                color: '#dfe3e9',
                gradientStops: [[0, 0.9], [50, 1], [100, 1]],
                gradientType: 'linearHorizontal',
            },
            stroke: '#dfe3e9',
        },
    };

    const handleKnobChange = useCallback((event: any) => {
        oldValue.current = newValue.current;
        newValue.current = event.args.value;
        if (
            newValue.current >= min &&
            newValue.current <= min + 10 &&
            oldValue.current <= max &&
            oldValue.current >= max - 10
        ) {
            setMin(max);
            setMax(max + 100);
            setValue(max + 100);
            newValue.current = max + 100;
            oldValue.current = max;
        } else if (
            newValue.current >= max - 10 &&
            newValue.current <= max &&
            oldValue.current >= min &&
            oldValue.current <= min + 10
        ) {
            setMax(min);
            setMin(min - 100);
            setValue(min - 100);
            newValue.current = min - 100;
            oldValue.current = min;
        } else {
            setValue(newValue.current);
        }
    }, [min, max]);

    return (
        <JqxKnob
            onChange={handleKnobChange}
            value={value}
            min={min}
            max={max}
            startAngle={150}
            endAngle={510}
            styles={styles}
            snapToStep={true}
            rotation={'clockwise'}
            marks={marks}
            labels={labels}
            progressBar={progressBar}
            pointer={pointer}
            spinner={spinner}
            dial={dial}
        />
    );
}

export default App;