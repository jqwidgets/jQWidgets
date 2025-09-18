import * as React from 'react';
import { useRef, useState, useEffect, useCallback } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const initialData: any[] = [
    { a: 100, b: 200, c: 1 },
    { a: 120, b: 140, c: 2 },
    { a: 100, b: 110, c: 3 },
    { a: 90, b: 135, c: 4 },
    { a: 70, b: 210, c: 5 },
    { a: 170, b: 210, c: 5 },
    { a: 270, b: 350, c: 5 },
    { a: 710, b: 410, c: 5 },
    { a: 230, b: 305, c: 5 }
];

const colorsSchemesList: IDropDownListProps['source'] = [
    'scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'
];

const seriesList: IDropDownListProps['source'] = [
    'splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline'
];

const initialSeriesGroups = [
    {
        alignEndPointsWithIntervals: true,
        columnsGapPercent: 50,
        series: [
            { dataField: 'a', displayText: 'a', opacity: 1, lineWidth: 1, symbolType: 'circle', fillColorSymbolSelected: 'white', radius: 15 },
            { dataField: 'b', displayText: 'b', opacity: 1, lineWidth: 1, symbolType: 'circle', fillColorSymbolSelected: 'white', radius: 15 }
        ],
        type: 'column'
    }
];

const App = () => {
    const myChart = useRef<JqxChart>(null);

    const [colorScheme, setColorScheme] = useState<IChartProps['colorScheme']>('scheme03');
    const [schemeSelectedIndex, setSchemeSelectedIndex] = useState<IDropDownListProps['selectedIndex']>(2);
    const [seriesGroups, setSeriesGroups] = useState<IChartProps['seriesGroups']>(JSON.parse(JSON.stringify(initialSeriesGroups)));
    const [seriesTypeSelectedIndex, setSeriesTypeSelectedIndex] = useState<IDropDownListProps['selectedIndex']>(2);
    const [source, setSource] = useState<IChartProps['source']>(JSON.parse(JSON.stringify(initialData)));

    const [chartSettings] = useState({
        title: 'Live updates demo',
        description: '',
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            labels: { horizontalAlignment: 'right' },
            maxValue: 1000,
            minValue: 0,
            title: { text: 'Index Value' }
        },
        xAxis: {
            gridLines: { interval: 2 },
            unitInterval: 1,
            valuesOnTicks: false
        }
    });

    useEffect(() => {
        const max = 800;
        const interval = setInterval(() => {
            setSource(prevSource => {
                const updatedSource = prevSource.map(item => ({
                    ...item,
                    a: Math.max(100, (Math.random() * 1000) % max),
                    b: Math.max(100, (Math.random() * 1000) % max)
                }));
                // update chart after state
                setTimeout(() => {
                    myChart.current && myChart.current.update();
                }, 0);
                return updatedSource;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const colorsOnChange = useCallback((event: any) => {
        const value = event.args.item.value;
        const index = event.args.index;
        setColorScheme(value);
        setSchemeSelectedIndex(index);
        setTimeout(() => {
            myChart.current && myChart.current.update();
        }, 0);
    }, []);

    const seriesOnChange = useCallback((event: any) => {
        const args = event.args;
        if (!args) return;
        const index = args.index;
        const value = args.item.value;
        const isLine = value.indexOf('line') !== -1;
        const isArea = value.indexOf('area') !== -1;
        setSeriesGroups(prevGroups => {
            const newGroups = JSON.parse(JSON.stringify(prevGroups));
            const group = newGroups[0];
            group.series[0].opacity = group.series[1].opacity = isArea ? 0.7 : 1;
            group.series[0].lineWidth = group.series[1].lineWidth = isLine ? 2 : 1;
            group.type = value;
            setTimeout(() => {
                myChart.current && myChart.current.update();
            }, 0);
            return newGroups;
        });
        setSeriesTypeSelectedIndex(index);
    }, []);

    return (
        <div>
            <JqxChart
                ref={myChart}
                style={{ width: '850px', height: '500px' }}
                title={chartSettings.title}
                description={chartSettings.description}
                enableAxisTextAnimation={true}
                showLegend={true}
                enableAnimations={true}
                animationDuration={1000}
                padding={chartSettings.padding}
                titlePadding={chartSettings.titlePadding}
                source={source}
                xAxis={chartSettings.xAxis}
                valueAxis={chartSettings.valueAxis}
                seriesGroups={seriesGroups}
                colorScheme={colorScheme}
            />
            <table style={{ width: '680px' }}>
                <tbody>
                    <tr>
                        <td style={{ paddingLeft: '50px' }}>
                            <p>Select the series type:</p>
                            <JqxDropDownList
                                theme={'material-purple'}
                                onChange={seriesOnChange}
                                width={200}
                                height={25}
                                selectedIndex={seriesTypeSelectedIndex}
                                dropDownHeight={100}
                                source={seriesList}
                            />
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
};

export default App;