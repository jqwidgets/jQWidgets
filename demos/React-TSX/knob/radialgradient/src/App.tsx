import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

function App() {
    const myKnob = useRef<JqxKnob>(null);
    const myInput = useRef<JqxInput>(null);

    const styles = React.useMemo(
        () => ({
            fill: 'transparent'
        }),
        []
    );

    const progressBar = React.useMemo(
        () => ({
            background: {
                fill: {
                    color: '#FFFFFF',
                    gradientStops: [[0, 0.5], [100, 1]],
                    gradientType: 'linear'
                }
            },
            offset: '50%',
            size: '50%',
            style: {
                fill: {
                    color: '#00a4e1',
                    gradientStops: [[0, 0.5], [100, 1]],
                    gradientType: 'radial'
                }
            }
        }),
        []
    );

    const pointer = React.useMemo(
        () => ({
            offset: '50%',
            size: '50%',
            style: { fill: '#00a4e1' },
            thickness: 0,
            type: 'line'
        }),
        []
    );

    const [value, setValue] = useState<number>(10);

    const myKnobOnChange = useCallback((event: any) => {
        setValue(event.args.value);
        myInput.current?.val(event.args.value);
    }, []);

    const myInputOnChange = useCallback((event: any) => {
        const val = Number(event.target.value);
        setValue(val);
        myKnob.current?.val(val);
    }, []);

    return (
        <div>
            <JqxKnob
                ref={myKnob}
                onChange={myKnobOnChange}
                value={value}
                min={0}
                max={100}
                startAngle={90}
                endAngle={450}
                snapToStep={true}
                rotation={'clockwise'}
                styles={styles}
                progressBar={progressBar}
                pointer={pointer}
                pointerGrabAction={'progressBar'}
            />
            <JqxInput
                theme={'material-purple'}
                ref={myInput}
                onChange={myInputOnChange}
                value={value}
            />
        </div>
    );
}

export default App;