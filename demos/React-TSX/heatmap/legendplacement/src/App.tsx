import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxHeatMap, { IHeatMapProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxheatmap';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

function App() {
    const myHeatMap = useRef<JqxHeatMap>(null);

    const [heatMapProps] = useState<IHeatMapProps>({
        xAxis: {
            labels: ['John', 'Marry', 'Alba', 'Steven', 'Josh', 'Alica', 'Robert', 'Kim', 'Ann', 'Paul', 'Regina', 'Dorothy']
        },
        yAxis: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        },
        source: [
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
        ]
    });

    const setLegendPosition = useCallback((event: Event) => {
        const position = event['args'].item.value;
        myHeatMap.current!.setLegendPosition(position);
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ width: '100%', maxWidth: '1000px' }}>
                <JqxHeatMap
                    ref={myHeatMap}
                    xAxis={heatMapProps.xAxis}
                    yAxis={heatMapProps.yAxis}
                    source={heatMapProps.source}
                    title={'Car sales revenue per employee(in 1000&euro;)'}
                />
            </div>
            <div style={{ margin: '50px 100px', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '20px' }}>Legend Position:</label>
                <JqxDropDownList
                    width={100}
                    onChange={setLegendPosition}
                    source={["Right", "Left", "Top", "Bottom"]}
                    selectedIndex={0}
                    autoDropDownHeight={true}
                />
            </div>
        </div>
    );
}

export default App;