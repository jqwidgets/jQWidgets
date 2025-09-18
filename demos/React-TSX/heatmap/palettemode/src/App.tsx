import * as React from 'react';
import { useRef, useState } from 'react';
import JqxHeatMap, { IHeatMapProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxheatmap';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

function App() {
    const myHeatMap = useRef<JqxHeatMap>(null);
    const [paletteType, setPaletteType] = useState<'Gradient' | 'Fixed'>('Gradient');

    const xAxis = {
        labels: ['John', 'Marry', 'Alba', 'Steven', 'Josh', 'Alica', 'Robert', 'Kim', 'Ann', 'Paul', 'Regina', 'Dorothy'],
        opposedPosition: true
    };

    const yAxis = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        opposedPosition: true
    };

    const source = [
        [89, 39, 94, 55, 3],
        [53, 38, 26, 68, 33],
        [22, 0, 66, 90, 78],
        [97, 68, 68, 3, 99],
        [47, 47, 88, 6, 1],
        [73, 23, 3, 79, 100],
        [21, 86, 13, 33, 0],
        [53, 81, 95, 79, 66],
        [74, 68, 88, 51, 43],
        [10, 12, 78, 14, 21],
        [55, 58, 12, 82, 99],
        [88, 23, 86, 59, 53]
    ];

    const legendSettings = {
        position: 'Bottom'
    };

    const paletteSettings = {
        palette: [
            { value: 10, color: '#6bbd49' },
            { value: 30, color: '#22aaaa' },
            { value: 60, color: '#53b9e6' },
        ],
        paletteType
    };

    const setGradientPaletteType = () => {
        setPaletteType('Gradient');
        myHeatMap.current?.setPaletteType('Gradient');
    };

    const setFixedPaletteType = () => {
        setPaletteType('Fixed');
        myHeatMap.current?.setPaletteType('Fixed');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ width: '100%', maxWidth: '1000px' }}>
                <JqxHeatMap
                    ref={myHeatMap}
                    xAxis={xAxis}
                    yAxis={yAxis}
                    source={source}
                    legendSettings={legendSettings}
                    paletteSettings={paletteSettings}
                    title={'Car sales revenue per employee(in 1000€)'}
                />
            </div>
            <div style={{ margin: '50px 100px', display: 'flex', alignItems: 'center' }}>
                <label>Palette Type:</label>
                <div style={{ marginLeft: '50px' }}>
                    <JqxRadioButton
                        style={{ marginBottom: '10px' }}
                        onChange={setGradientPaletteType}
                        checked={paletteType === 'Gradient'}
                    >
                        Gradient
                    </JqxRadioButton>
                    <JqxRadioButton
                        onChange={setFixedPaletteType}
                        checked={paletteType === 'Fixed'}
                    >
                        Fixed
                    </JqxRadioButton>
                </div>
            </div>
        </div>
    );
}

export default App;