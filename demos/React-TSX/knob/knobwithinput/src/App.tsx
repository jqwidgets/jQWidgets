import * as React from 'react';

import './App.css';

import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxKnob, { IKnobProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

const App = () => {
    const myKnob = React.useRef<JqxKnob>(null);
    const myInput = React.useRef<JqxInput>(null);

    const styles = React.useMemo(() => ({
        fill: '#fff'
    }), []);

    const progressBar = React.useMemo(() => ({
        background: { fill: '#eeeeee' },
        offset: '70%',
        size: '30%',
        style: { fill: '#00a644' }
    }), []);

    const pointer = React.useMemo(() => ({
        offset: '70%', size: '30%',
        style: { fill: '#00a644' },
        thickness: 20, type: 'line'
    }), []);

    const dial = React.useMemo(() => ({
        endAngle: 360,
        innerRadius: '68%',
        outerRadius: '92%',
        startAngle: 0,
        style: { fill: '#fff' }
    }), []);

    const [knobValue, setKnobValue] = React.useState<number>(30);

    const myKnobOnChange = React.useCallback((event: any) => {
        const value = event.args.value;
        setKnobValue(value);
        myInput.current?.val(value);
    }, []);

    const myInputOnChange = React.useCallback((event: any) => {
        const value = parseInt(event.target.value, 10);
        setKnobValue(isNaN(value) ? 0 : value);
        myKnob.current?.val(isNaN(value) ? 0 : value);
    }, []);

    return (
        <div>
            <JqxKnob
                ref={myKnob}
                onChange={myKnobOnChange}
                value={knobValue}
                min={0}
                max={100}
                startAngle={270}
                endAngle={630}
                snapToStep={true}
                rotation={'clockwise'}
                styles={styles}
                progressBar={progressBar}
                pointer={pointer}
                dial={dial}
            />
            <JqxInput
                theme={'material-purple'}
                ref={myInput}
                onChange={myInputOnChange}
                value={knobValue}
            />
        </div>
    );
};

export default App;