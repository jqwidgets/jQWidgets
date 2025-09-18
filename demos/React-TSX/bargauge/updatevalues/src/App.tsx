import React, { useRef, useState } from 'react';
import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

const App = () => {
    const myBarGauge = useRef<JqxBarGauge>(null);
    const redSlider = useRef<JqxSlider>(null);
    const greenSlider = useRef<JqxSlider>(null);
    const blueSlider = useRef<JqxSlider>(null);

    const [values, setValues] = useState<number[]>([187, 255, 170]);
    const customColorScheme = {
        colors: ['#307DD7', '#89A54E', '#AA4643'],
        name: 'rbg'
    };
    const labels = {
        indent: 10,
        precision: 0
    };
    const title = {
        font: {
            size: 40
        },
        margin: { top: 0, left: 0, right: 0, bottom: 0 },
        subtitle: {
            font: {
                size: 20
            },
            text: '( visualization of "RGB" color proportions )'
        },
        text: 'JqxBarGauge',
        verticalAlignment: 'top'
    };

    const updateValues = () => {
        const red = redSlider.current?.getValue();
        const green = greenSlider.current?.getValue();
        const blue = blueSlider.current?.getValue();
        if (typeof red === 'number' && typeof green === 'number' && typeof blue === 'number') {
            setValues([blue, green, red]);
        }
    };

    return (
        <div>
            <JqxBarGauge
                ref={myBarGauge}
                style={{ float: 'left' }}
                width={'100%'}
                relativeInnerRadius={0.5}
                max={255}
                values={values}
                startAngle={0}
                endAngle={90}
                colorScheme={'rgb'}
                customColorScheme={customColorScheme}
                title={title}
                labels={labels}
            />
            <div style={{ float: 'left' }}>
                <span style={{ fontStyle: 'italic' }}>Red</span>
                <JqxSlider
                    theme={'arctic'}
                    ref={redSlider}
                    onChange={updateValues}
                    mode={'fixed'}
                    min={0}
                    max={255}
                    ticksFrequency={25.5}
                    value={170}
                    step={25.5}
                />
                <span style={{ fontStyle: 'italic' }}>Green</span>
                <JqxSlider
                    theme={'arctic'}
                    ref={greenSlider}
                    onChange={updateValues}
                    mode={'fixed'}
                    min={0}
                    max={255}
                    ticksFrequency={25.5}
                    value={255}
                    step={25.5}
                />
                <span style={{ fontStyle: 'italic' }}>Blue</span>
                <JqxSlider
                    theme={'arctic'}
                    ref={blueSlider}
                    onChange={updateValues}
                    mode={'fixed'}
                    min={0}
                    max={255}
                    ticksFrequency={25.5}
                    value={187}
                    step={25.5}
                />
            </div>
        </div>
    );
};

export default App;