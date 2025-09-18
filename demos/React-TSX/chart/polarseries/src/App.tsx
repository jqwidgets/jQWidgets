import * as React from 'react';
import { useRef, useState } from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

const App = () => {
    const myChart = useRef<JqxChart>(null);

    const initialSource: any = {
        datafields: [
            { name: 'Year' },
            { name: 'HPI' },
            { name: 'BuildCost' },
            { name: 'Population' },
            { name: 'Rate' }
        ],
        datatype: 'tab',
        url: 'homeprices.txt'
    };

    const [colorScheme, setColorScheme] = useState<string>('scheme01');
    const [colorsSchemesList] = useState<IDropDownListProps['source']>(['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08']);
    const [schemeSelectedIndex, setSchemeSelectedIndex] = useState<IDropDownListProps['selectedIndex']>(0);
    const [description] = useState<string>('Source: http://www.econ.yale.edu/~shiller/data.htm');
    const [padding] = useState<IChartProps['padding']>({ left: 5, top: 5, right: 5, bottom: 5 });
    const [seriesGroups, setSeriesGroups] = useState<any[]>([
        {
            polar: true,
            radius: 120,
            series: [
                { dataField: 'HPI', displayText: 'Real Home Price Index', opacity: 0.7, lineWidth: 1, radius: 2 },
                { dataField: 'BuildCost', displayText: 'Building Cost Index', opacity: 0.7, lineWidth: 1, radius: 2 }
            ],
            type: 'splinearea',
            valueAxis: {
                labels: {
                    autoRotate: true,
                    formatSettings: { decimalPlaces: 0 }
                }
            }
        }
    ]);
    const [seriesList] = useState<IDropDownListProps['source']>(['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline']);
    const [seriesSelectedIndex, setSeriesSelectedIndex] = useState<IDropDownListProps['selectedIndex']>(0);
    const [source] = useState<any>(
        new jqx.dataAdapter(initialSource, {
            async: false,
            autoBind: true,
            loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + initialSource.url + '" : ' + error); }
        })
    );
    const [title] = useState<string>('U.S. Real Home Price vs Building Cost Indeces (1950-2019)');
    const [titlePadding] = useState<IChartProps['titlePadding']>({ left: 0, top: 0, right: 0, bottom: 5 });
    const [xAxis] = useState<IChartProps['xAxis']>({
        dataField: 'Year',
        labels: { autoRotate: true },
        maxValue: 2010,
        unitInterval: 10,
        valuesOnTicks: true
    });

    const sliderStartAngle = (event: any): void => {
        const value = event.args.value;
        const updatedSeriesGroups = seriesGroups.map((group, idx) => {
            if (idx === 0) {
                return {
                    ...group,
                    startAngle: value,
                    endAngle: value + 360
                };
            }
            return group;
        });
        setSeriesGroups(updatedSeriesGroups);
        setTimeout(() => {
            myChart.current && myChart.current.update();
        }, 0);
    };

    const sliderRadius = (event: any): void => {
        const value = event.args.value;
        const updatedSeriesGroups = seriesGroups.map((group, idx) => {
            if (idx === 0) {
                return {
                    ...group,
                    radius: value
                };
            }
            return group;
        });
        setSeriesGroups(updatedSeriesGroups);
        setTimeout(() => {
            myChart.current && myChart.current.update();
        }, 0);
    };

    const dropDownListColor = (event: any): void => {
        const value = event.args.item.value;
        const index = event.args.index;
        setColorScheme(value);
        setSchemeSelectedIndex(index);
    };

    const dropDownListSeries = (event: any): void => {
        const value = event.args.item.value;
        const index = event.args.index;
        const updatedSeriesGroups = seriesGroups.map((group, idx) => {
            if (idx === 0) {
                return {
                    ...group,
                    type: value
                };
            }
            return group;
        });
        setSeriesGroups(updatedSeriesGroups);
        setSeriesSelectedIndex(index);
        setTimeout(() => {
            myChart.current && myChart.current.update();
        }, 0);
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
                                theme={'material-purple'}
                                onChange={sliderStartAngle}
                                width={240}
                                min={0}
                                max={360}
                                step={1}
                                ticksFrequency={20}
                                mode={'fixed'}
                            />
                        </td>
                        <td>
                            <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Select the series type:</p>
                            <JqxDropDownList
                                theme={'material-purple'}
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
                                theme={'material-purple'}
                                onChange={sliderRadius}
                                width={240}
                                min={80}
                                max={140}
                                step={1}
                                ticksFrequency={20}
                                mode={'fixed'}
                                value={120}
                            />
                        </td>
                        <td>
                            <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Select color scheme:</p>
                            <JqxDropDownList
                                theme={'material-purple'}
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