import * as React from 'react';
import { useRef, useState, useMemo } from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

const App = () => {
    const myChart = useRef<JqxChart>(null);

    const colorsSchemesList = useMemo(() => (
        ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08']
    ), []);

    const seriesList = useMemo(() => (
        ['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline']
    ), []);

    const sourceData: any = useMemo(() => ({
        datafields: [
            { name: 'Year' },
            { name: 'HPI' },
            { name: 'BuildCost' },
            { name: 'Population' },
            { name: 'Rate' }
        ],
        datatype: 'tab',
        url: 'homeprices.txt'
    }), []);

    const bands = useMemo(() => {
        const recessions = [
            { from: 1969.91, to: 1970.83 },
            { from: 1973.83, to: 1975.25 },
            { from: 1980, to: 1980.58 },
            { from: 1981.58, to: 1982.83 },
            { from: 1990.58, to: 1991.25 },
            { from: 2001.25, to: 2001.83 },
            { from: 2007.91, to: 2009.5 }
        ];
        return recessions.map(recession => ({
            minValue: recession.from,
            maxValue: recession.to,
            fillColor: 'red',
            opacity: 0.2
        }));
    }, []);

    const [colorScheme, setColorScheme] = useState<string>('scheme01');
    const [schemeSelectedIndex, setSchemeSelectedIndex] = useState<IDropDownListProps['selectedIndex']>(0);
    const [seriesSelectedIndex, setSeriesSelectedIndex] = useState<IDropDownListProps['selectedIndex']>(1);
    const [seriesGroups, setSeriesGroups] = useState<IChartProps['seriesGroups']>([
        {
            polar: true,
            radius: 160,
            series: [
                { dataField: 'HPI', displayText: 'Real Home Price Index', opacity: 0.9, lineWidth: 3, enableSeriesToggle: false },
                { dataField: 'BuildCost', displayText: 'Building Cost Index', opacity: 0.9, lineWidth: 3, enableSeriesToggle: false }
            ],
            type: 'spline',
            valueAxis: {
                bands: [
                    { minValue: 50, maxValue: 130, fillColor: '#00FF00', opacity: 0.2, dashStyle: '2,2', lineWidth: 1 },
                    { minValue: 131, maxValue: 160, fillColor: '#FCD537', opacity: 0.2, dashStyle: '2,2', lineWidth: 1 },
                    { minValue: 161, maxValue: 200, fillColor: '#FF0000', opacity: 0.2, dashStyle: '2,2', lineWidth: 1 }
                ],
                labels: {
                    autoRotate: true,
                    formatSettings: { decimalPlaces: 0 }
                }
            }
        }
    ]);

    const [source] = useState<any>(new jqx.dataAdapter(sourceData, {
        async: false,
        autoBind: true,
        loadError: (xhr: any, status: any, error: any) => {
            alert('Error loading "' + sourceData.url + '" : ' + error);
        }
    }));

    const title = 'U.S. Real Home Price vs Building Cost Indeces (1950-2019)';
    const description = 'Source: http://www.econ.yale.edu/~shiller/data.htm';
    const padding = { left: 5, top: 5, right: 5, bottom: 5 };
    const titlePadding = { left: 0, top: 0, right: 0, bottom: 5 };
    const xAxis = useMemo(() => ({
        bands,
        dataField: 'Year',
        labels: { autoRotate: true },
        maxValue: 2010,
        unitInterval: 10,
        valuesOnTicks: true
    }), [bands]);

    const sliderStartAngle = (event: any) => {
        const value = event.args.value;
        const newSeriesGroups = seriesGroups ? [...seriesGroups] : [];
        if (newSeriesGroups[0]) {
            newSeriesGroups[0] = { ...newSeriesGroups[0], startAngle: value, endAngle: value + 360 };
            setSeriesGroups(newSeriesGroups);
            setTimeout(() => {
                myChart.current && myChart.current.update();
            }, 0);
        }
    };

    const sliderRadius = (event: any) => {
        const value = event.args.value;
        const newSeriesGroups = seriesGroups ? [...seriesGroups] : [];
        if (newSeriesGroups[0]) {
            newSeriesGroups[0] = { ...newSeriesGroups[0], radius: value };
            setSeriesGroups(newSeriesGroups);
            setTimeout(() => {
                myChart.current && myChart.current.update();
            }, 0);
        }
    };

    const dropDownListColor = (event: any) => {
        const value = event.args.item.value;
        const index = event.args.index;
        setColorScheme(value);
        setSchemeSelectedIndex(index);
    };

    const dropDownListSeries = (event: any) => {
        const value = event.args.item.value;
        const index = event.args.index;
        const newSeriesGroups = seriesGroups ? [...seriesGroups] : [];
        if (newSeriesGroups[0]) {
            newSeriesGroups[0] = { ...newSeriesGroups[0], type: value };
            setSeriesGroups(newSeriesGroups);
            setSeriesSelectedIndex(index);
            setTimeout(() => {
                myChart.current && myChart.current.update();
            }, 0);
        }
    };

    return (
        <div>
            <JqxChart
                ref={myChart}
                style={{ width: '850px', height: '500px' }}
                title={title}
                description={description}
                showLegend={true}
                enableAnimations={true}
                padding={padding}
                titlePadding={titlePadding}
                source={source}
                xAxis={xAxis}
                seriesGroups={seriesGroups}
                colorScheme={colorScheme}
            />
            <table style={{ width: '850px' }}>
                <tbody>
                    <tr>
                        <td style={{ paddingLeft: '50px' }}>
                            <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Move the slider to rotate:</p>
                            <JqxSlider
                                theme="material-purple"
                                onChange={sliderStartAngle}
                                width={240}
                                min={0}
                                max={360}
                                step={1}
                                ticksFrequency={20}
                                mode="fixed"
                            />
                        </td>
                        <td>
                            <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Select the series type:</p>
                            <JqxDropDownList
                                theme="material-purple"
                                onChange={dropDownListSeries}
                                width={200}
                                height={25}
                                source={seriesList}
                                selectedIndex={seriesSelectedIndex}
                                dropDownHeight={100}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: '50px' }}>
                            <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Move the slider to change the radius:</p>
                            <JqxSlider
                                theme="material-purple"
                                onChange={sliderRadius}
                                width={240}
                                min={80}
                                max={140}
                                step={1}
                                ticksFrequency={20}
                                mode="fixed"
                                value={120}
                            />
                        </td>
                        <td>
                            <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Select color scheme:</p>
                            <JqxDropDownList
                                theme="material-purple"
                                onChange={dropDownListColor}
                                width={200}
                                height={25}
                                source={colorsSchemesList}
                                selectedIndex={schemeSelectedIndex}
                                dropDownHeight={100}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default App;