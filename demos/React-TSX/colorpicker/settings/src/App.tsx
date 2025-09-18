import * as React from 'react';
import { useRef, useState } from 'react';
import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcolorpicker';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
    const [colorMode, setColorMode] = useState<'saturation' | 'hue'>('saturation');
    const [hueChecked, setHueChecked] = useState(false);
    const [saturationChecked, setSaturationChecked] = useState(true);
    const colorLog = useRef<HTMLDivElement>(null);

    const colorChanged = (event: any) => {
        if (colorLog.current) {
            colorLog.current.innerHTML = `<div>Color: #${event.args.color.hex}</div>`;
        }
    };

    const hueModeChanged = (event: any) => {
        if (event.args.checked) {
            setColorMode('hue');
            setHueChecked(true);
            setSaturationChecked(false);
        } else {
            setColorMode('saturation');
            setHueChecked(false);
            setSaturationChecked(true);
        }
    };

    return (
        <div>
            <JqxColorPicker
                onColorchange={colorChanged}
                width={250}
                height={250}
                colorMode={colorMode}
            />

            <div style={{ fontSize: '13px', fontFamily: 'Verdana', marginTop: '10px' }}>
                <div style={{ marginBottom: '5px' }}>Color Modes</div>

                <JqxRadioButton
                    theme={'material-purple'}
                    width={180}
                    height={25}
                    checked={saturationChecked}
                >
                    Saturation Color Mode
                </JqxRadioButton>

                <JqxRadioButton
                    theme={'material-purple'}
                    onChange={hueModeChanged}
                    width={180}
                    height={25}
                    checked={hueChecked}
                >
                    Hue Color Mode
                </JqxRadioButton>
            </div>

            <div ref={colorLog} style={{ fontSize: '13px', fontFamily: 'Verdana' }} />
        </div>
    );
};

export default App;