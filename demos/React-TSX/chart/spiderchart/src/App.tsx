import * as React from 'react';

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

const App = () => {
    const myChart = React.useRef<JqxChart>(null);

    const [colorScheme, setColorScheme] = React.useState<IChartProps['colorScheme']>('scheme05');
    const [colorsSchemesList] = React.useState<IDropDownListProps['source']>(['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08']);
    const [schemeSelectedIndex, setSchemeSelectedIndex] = React.useState<IDropDownListProps['selectedIndex']>(4);

    const [seriesList] = React.useState<IDropDownListProps['source']>(['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline']);
    const [seriesSelectedIndex, setSeriesSelectedIndex] = React.useState<IDropDownListProps['selectedIndex']>(1);

    const [seriesGroups, setSeriesGroups] = React.useState<any[]>([
        {
            endAngle: 360,
            radius: 120,
            series: [
                { dataField: 'month1', displayText: 'January 2014', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
                { dataField: 'month2', displayText: 'February 2014', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'square' }
            ],
            spider: true,
            startAngle: 0,
            type: 'spline'
        }
    ]);

    const [xAxis, setXAxis] = React.useState<IChartProps['xAxis']>({
        dataField: 'type',
        displayText: 'Traffic source',
        labels: { autoRotate: false },
        valuesOnTicks: true
    });

    const [valueAxis, setValueAxis] = React.useState<IChartProps['valueAxis']>({
        labels: {
            formatFunction: (value: any) => {
                return Math.round(value / 1000) + ' K';
            },
            formatSettings: { decimalPlaces: 0 }
        },
        unitInterval: 1000000
    });

    const [source] = React.useState<any[]>([
        { type: 'Organic Search', month1: 1725090, month2: 3136190 },
        { type: 'Paid Search', month1: 925090, month2: 2136190 },
        { type: 'Direct', month1: 425090, month2: 936190 },
        { type: 'Referral', month1: 1250900, month2: 2536190 },
        { type: 'Twitter', month1: 350900, month2: 681900 },
        { type: 'Facebook', month1: 381900, month2: 831500 }
    ]);

    const [title] = React.useState<IChartProps['title']>('Website audience acquision by source');
    const [description] = React.useState<IChartProps['description']>('Month over month comparison');
    const [padding] = React.useState<IChartProps['padding']>({ left: 5, top: 5, right: 5, bottom: 5 });
    const [titlePadding] = React.useState<IChartProps['titlePadding']>({ left: 0, top: 0, right: 0, bottom: 5 });

    const sliderStartAngle = (event: any) => {
        const value = event.args.value;
        setSeriesGroups(prev => {
            const next = [...prev];
            next[0] = { ...next[0], startAngle: value, endAngle: value + 360 };
            return next;
        });
        setTimeout(() => {
            myChart.current?.update();
        }, 0);
    };

    const sliderRadius = (event: any) => {
        const value = event.args.value;
        setSeriesGroups(prev => {
            const next = [...prev];
            next[0] = { ...next[0], radius: value };
            return next;
        });
        setTimeout(() => {
            myChart.current?.update();
        }, 0);
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
        setSeriesGroups(prev => {
            const next = [...prev];
            next[0] = { ...next[0], type: value };
            return next;
        });
        setSeriesSelectedIndex(index);
        setTimeout(() => {
            myChart.current?.update();
        }, 0);
    };

    const checkBoxTicksBetween = (event: any) => {
        setXAxis(prev => ({
            ...prev,
            valuesOnTicks: !event.args.checked
        }));
        setTimeout(() => {
            myChart.current?.update();
        }, 0);
    };

    const checkBoxAutoRotate = (event: any) => {
        const checked = event.args.checked;
        setXAxis(prev => ({
            ...prev,
            labels: { ...prev.labels, autoRotate: checked }
        }));
        setValueAxis(prev => ({
            ...prev,
            labels: { ...prev.labels, autoRotate: checked }
        }));
        setTimeout(() => {
            myChart.current?.update();
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
                enableAnimations={false}
                padding={padding}
                titlePadding={titlePadding}
                source={source}
                xAxis={xAxis}
                valueAxis={valueAxis}
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
                    <tr style={{ height: '15px' }} />
                    <tr>
                        <td style={{ paddingLeft: '50px' }}>
                            <JqxCheckBox
                                theme={'material-purple'}
                                onChange={checkBoxAutoRotate}
                                width={220}
                                height={25}
                            >
                                Auto-rotate labels
                            </JqxCheckBox>
                        </td>
                        <td>
                            <JqxCheckBox
                                theme={'material-purple'}
                                onChange={checkBoxTicksBetween}
                                width={220}
                                height={25}
                            >
                                Ticks between values
                            </JqxCheckBox>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default App;