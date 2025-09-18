import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';

const App = () => {
    const myBarGauge = useRef<JqxBarGauge>(null);
    const loop = useRef(0);

    const [values, setValues] = useState([20, 0, 0, 0]);
    const labels: IBarGaugeProps['labels'] = {
        connectorWidth: 1,
        indent: 15,
        precision: 1
    };

    const onDrawEnd = useCallback(() => {
        switch (loop.current) {
            case 0:
                setValues([20, 60, 0, 0]);
                break;
            case 1:
                setValues([20, 60, 80, 0]);
                break;
            case 2:
                setValues([20, 60, 80, 100]);
                break;
            default:
                // tslint:disable-next-line:no-console
                console.log('Render time is finished.');
                break;
        }
        loop.current += 1;
    }, []);

    return (
        <JqxBarGauge
            ref={myBarGauge}
            onDrawEnd={onDrawEnd}
            width={'100%'}
            barSpacing={14}
            labels={labels}
            animationDuration={300}
            startAngle={180}
            endAngle={-180}
            colorScheme={'scheme02'}
            relativeInnerRadius={0.2}
            values={values}
        />
    );
};

export default App;