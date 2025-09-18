import * as React from 'react';
import { useRef, useState } from 'react';

import JqxHeatMap, { IHeatMapProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxheatmap';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';

const App = () => {
    const myHeatMap = useRef<JqxHeatMap>(null);
    const [xAxis, setXAxis] = useState({
        labels: ['John', 'Marry', 'Alba', 'Steven', 'Josh', 'Alica', 'Robert', 'Kim', 'Ann', 'Paul', 'Regina', 'Dorothy'],
        opposedPosition: true
    });
    const [yAxis, setYAxis] = useState({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        opposedPosition: true
    });
    const [source] = useState([
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
    ]);

    const changeXAxisPosition = () => {
        const isOpposed = xAxis.opposedPosition;
        myHeatMap.current?.setOpposedXAxisPosition(!isOpposed);
        setXAxis(prev => ({ ...prev, opposedPosition: !isOpposed }));
    };

    const changeYAxisPosition = () => {
        const isOpposed = yAxis.opposedPosition;
        myHeatMap.current?.setOpposedYAxisPosition(!isOpposed);
        setYAxis(prev => ({ ...prev, opposedPosition: !isOpposed }));
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ width: '100%', maxWidth: '1000px' }}>
                <JqxHeatMap
                    ref={myHeatMap}
                    xAxis={xAxis}
                    yAxis={yAxis}
                    source={source}
                    title={'Car sales revenue per employee(in 1000&euro;)'}
                />
            </div>
            <div style={{ margin: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <JqxCheckBox
                    style={{ marginBottom: '20px' }}
                    onChange={changeXAxisPosition}
                    checked={xAxis.opposedPosition}
                >
                    Change X-Axis Position
                </JqxCheckBox>
                <JqxCheckBox
                    onChange={changeYAxisPosition}
                    checked={yAxis.opposedPosition}
                >
                    Change Y-Axis Position
                </JqxCheckBox>
            </div>
        </div>
    );
};

export default App;