import * as React from 'react';
import { useRef } from 'react';
import JqxScrollBar, { IScrollBarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscrollbar';

const App = () => {
    const longSize = 280;
    const shortSize = 18;
    const max = 1000;
    const min = 0;
    const verticalRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);

    const onValueChangedVertical = (event: any) => {
        if (verticalRef.current) {
            verticalRef.current.innerHTML = 'Vertical (' + parseInt(event.currentValue, 10) + ')';
        }
    };

    const onValueChangedHorizontal = (event: any) => {
        if (horizontalRef.current) {
            horizontalRef.current.innerHTML = 'Horizontal (' + parseInt(event.currentValue, 10) + ')';
        }
    };

    return (
        <div>
            <div id="vertical" ref={verticalRef} style={{ marginBottom: 10 }}>Vertical</div>
            <JqxScrollBar
                theme="material-purple"
                onValueChanged={onValueChangedVertical}
                width={shortSize}
                height={longSize}
                max={max}
                min={min}
                vertical={true}
            />
            <div id="horizontal" ref={horizontalRef} style={{ marginTop: 10 }}>Horizontal</div>
            <JqxScrollBar
                theme="material-purple"
                onValueChanged={onValueChangedHorizontal}
                width={longSize}
                height={shortSize}
                max={max}
                min={min}
            />
        </div>
    );
};

export default App;