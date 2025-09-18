import * as React from 'react';
import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

const App = () => {
    const marks: IKnobProps['marks'] = {
        colorProgress: { border: '#373636', color: '#373636' },
        colorRemaining: { border: '#373636', color: '#373636' },
        drawAboveProgressBar: true,
        majorInterval: 10, majorSize: '9%', minorInterval: 2,
        offset: '71%', size: '6%', thickness: 1, type: 'line'
    };
    const labels: IKnobProps['labels'] = {
        formatFunction: (label: string): string | number => {
            if (label !== '0' && label !== '100') {
                return label;
            }
            return label === '0' ? 'Min' : 'Max';
        },
        offset: '88%', step: 10
    };
    const progressBar: IKnobProps['progressBar'] = {
        background: {
            fill: {
                color: '#ff6126',
                gradientStops: [[0, 1], [50, 0.5], [100, 1]],
                gradientType: 'linear'
            },
            stroke: '#ff6126', strokeWidth: 1
        },
        innerRadius: '50%',
        offset: '50%',
        outerRadius: '70%',
        size: '20%',
        style: [
            {
                fill: {
                    color: '#285a83',
                    gradientStops: [[0, 1], [50, 0.5], [100, 1]],
                    gradientType: 'linear'
                },
                stroke: '#285a83', strokeWidth: 1,
            },
            {
                fill: {
                    color: '#285a83',
                    gradientStops: [[0, 1], [50, 0.5], [100, 1]],
                    gradientType: 'linear'
                },
                stroke: '#285a83', strokeWidth: 1
            }
        ],
    };
    const pointer: IKnobProps['pointer'] = [
        {
            offset: '30%', size: '50%',
            style: { fill: '#ff6126', stroke: '#ff6126' },
            thickness: 30, type: 'arrow',
        },
        {
            offset: '30%', size: '50%',
            style: { fill: '#ff6126', stroke: '#ff6126' },
            thickness: 30, type: 'arrow',
        }
    ];
    const spinner: IKnobProps['spinner'] = {
        endAngle: 360,
        innerRadius: '0%',
        offset: '30%',
        outerRadius: '30%',
        size: '20%',
        startAngle: 0,
        style: {
            fill: {
                color: '#285a83',
                gradientStops: [[0, 1], [50, 0.5], [100, 1]],
                gradientType: 'linear'
            },
            stroke: '#285a83', strokeWidth: 1
        }
    };

    return (
        <JqxKnob
            value={[40, 80]} min={0} max={100}
            startAngle={120} endAngle={480}
            dragStartAngle={120} dragEndAngle={420}
            snapToStep={true} rotation={'clockwise'}
            marks={marks} labels={labels}
            progressBar={progressBar} pointer={pointer}
            spinner={spinner}
        />
    );
};

export default App;