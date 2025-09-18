import * as React from 'react';
import { useRef, useCallback, useMemo } from 'react';
import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';

function App() {
    const myBarGauge = useRef<JqxBarGauge>(null);

    const barGaugePalette = ['#307DD7', '#AA4643', '#89A54E', '#71588F', '#4198AF'];

    const tooltip = useMemo(() => ({
        formatFunction: (value: number, index: number, color: string): string => {
            if (value < 20) return barGaugePalette[0];
            if (value < 40) return barGaugePalette[1];
            if (value < 60) return barGaugePalette[2];
            if (value < 80) return barGaugePalette[3];
            if (value <= 100) return barGaugePalette[4];
            return '';
        },
        visible: true
    }), []);

    const getRandomInt = useCallback((min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min)) + min;
    }, []);

    const onDrawEnd = useCallback(() => {
        const values = [getRandomInt(1, 99)];
        setTimeout(() => {
            myBarGauge.current!.val(values);
        }, 1000);
    }, [getRandomInt]);

    return (
        <JqxBarGauge
            ref={myBarGauge}
            onDrawEnd={onDrawEnd}
            // @ts-ignore
            width="100%"
            relativeInnerRadius={0.6}
            values={[25]}
            tooltip={tooltip}
        />
    );
}

export default App;