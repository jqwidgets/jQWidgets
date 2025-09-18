import * as React from 'react';
import { useEffect, useRef } from 'react';
import JqxProgressBar, { IProgressBarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxprogressbar';

function App() {
    const horizontalColorRanges: IProgressBarProps['colorRanges'] = [
        { stop: 20, color: '#33b5e5' },
        { stop: 50, color: '#98ca00' },
        { stop: 80, color: '#ff4444' },
        { stop: 100, color: '#aa66cc' }
    ];

    const verticalColorRanges: IProgressBarProps['colorRanges'] = [
        { stop: 40, color: '#f0ad4e' },
        { stop: 59, color: '#5bc0de' },
        { stop: 70, color: '#5cb85c' },
        { stop: 100, color: '#d9534f' }
    ];

    const renderText = (text: string, value: number): string => {
        if (value < 60) {
            return '<span class="jqx-rc-all" style="color: #333;">' + text + '</span>';
        }
        return '<span class="jqx-rc-all" style="color: #fff;">' + text + '</span>';
    };

    const myProgressBar = useRef<JqxProgressBar>(null);
    const myVerticalProgressBar = useRef<JqxProgressBar>(null);

    useEffect(() => {
        let value = 0;
        const interval = setInterval(() => {
            value++;
            if (value === 100) {
                clearInterval(interval);
            }
            myProgressBar.current?.val(value);
            myVerticalProgressBar.current?.val(value);
        }, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div style={{ marginTop: '10px' }}>Horizontal</div>
            <JqxProgressBar
                theme="material-purple"
                ref={myProgressBar}
                width={250}
                height={30}
                value={0}
                showText={true}
                orientation="horizontal"
                renderText={renderText}
                colorRanges={horizontalColorRanges}
            />

            <div style={{ marginTop: '10px' }}>Vertical</div>
            <JqxProgressBar
                theme="material-purple"
                ref={myVerticalProgressBar}
                width={30}
                height={250}
                value={0}
                showText={true}
                orientation="vertical"
                renderText={renderText}
                colorRanges={verticalColorRanges}
            />
        </div>
    );
}

export default App;