import * as React from 'react';
import { useRef, useState, useEffect } from 'react';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const colorsSchemesList = ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'];

function generateChartData() {
    const data = [];
    for (let i = 0; i < 20; i++) {
        data.push({
            key: i,
            value1: (Math.random() * 200) % 200 + 200,
            value2: (Math.random() * 200) % 200 + 500,
            value3: (Math.random() * 200) % 200
        });
    }
    return data;
}

const seriesGroups = [
    {
        series: [
            { dataField: 'value1', displayText: 'value1', lineWidth: 2, symbolType: 'circle', useGradientColors: false }
        ],
        type: 'line'
    },
    {
        alignEndPointsWithIntervals: true,
        columnsGapPercent: 50,
        series: [
            { dataField: 'value2', displayText: 'value2', useGradientColors: false }
        ],
        type: 'spline'
    },
    {
        alignEndPointsWithIntervals: true,
        columnsGapPercent: 50,
        series: [
            { dataField: 'value3', displayText: 'value3', useGradientColors: false }
        ],
        type: 'column'
    }
];

const valueAxis = {
    maxValue: 750,
    minValue: 0,
    title: { text: 'Index Value' }
};

const xAxis = {
    dataField: 'key',
    gridLines: { visible: false },
    unitInterval: 1,
    valuesOnTicks: true
};

const padding = { left: 10, top: 10, right: 10, bottom: 10 };
const titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

function App() {
    const myBtn = useRef<JqxButton>(null);
    const myChart = useRef<JqxChart>(null);

    const [colorScheme, setColorScheme] = useState<string>('scheme01');
    const [schemeSelectedIndex, setSchemeSelectedIndex] = useState<number>(0);
    const [source, setSource] = useState<any[]>(generateChartData());
    const [paused, setPaused] = useState<boolean>(false);

    useEffect(() => {
        if (!paused) {
            const timer = setInterval(timerFunction, 100);
            return () => clearInterval(timer);
        }
    }, [paused, source, colorScheme]);

    function timerFunction() {
        setSource(prev => {
            const newData = prev.slice(1);
            const lastKey = newData.length ? newData[newData.length - 1].key : 19;
            newData.push({
                key: lastKey + 1,
                value1: (Math.random() * 200) % 200 + 200,
                value2: (Math.random() * 200) % 200 + 500,
                value3: (Math.random() * 200) % 200,
            });
            setTimeout(() => {
                if (myChart.current) {
                    myChart.current.update();
                }
            }, 0);
            return newData;
        });
    }

    function btnOnClick() {
        setPaused(prev => {
            if (!prev) {
                if (myBtn.current) myBtn.current.val('Resume');
            } else {
                if (myBtn.current) myBtn.current.val('Pause');
            }
            return !prev;
        });
    }

    function colorsOnChange(event: any) {
        const value = event.args.item.value;
        const index = event.args.index;
        setColorScheme(value);
        setSchemeSelectedIndex(index);
        setTimeout(() => {
            if (myChart.current) {
                myChart.current.update();
            }
        }, 0);
    }

    return (
        <div>
            <JqxChart
                ref={myChart}
                style={{ width: '850px', height: '500px' }}
                title="Live updates performance"
                description="Data changes every 100 milliseconds"
                showLegend={true}
                enableAnimations={false}
                padding={padding}
                titlePadding={titlePadding}
                source={source}
                xAxis={xAxis}
                valueAxis={valueAxis}
                seriesGroups={seriesGroups}
                colorScheme={colorScheme}
            />
            <table style={{ width: '680px' }}>
                <tbody>
                    <tr>
                        <td style={{ paddingLeft: '50px' }}>
                            <p>Pause / Resume updates:</p>
                            <JqxButton
                                theme={'material-purple'}
                                ref={myBtn}
                                onClick={btnOnClick}
                                width={160}
                            >
                                Pause
                            </JqxButton>
                        </td>
                        <td>
                            <p>Select color scheme:</p>
                            <JqxDropDownList
                                theme={'material-purple'}
                                onChange={colorsOnChange}
                                width={200}
                                height={25}
                                selectedIndex={schemeSelectedIndex}
                                dropDownHeight={100}
                                source={colorsSchemesList}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;