import * as React from 'react';
import { useRef, useState } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';

function App() {
    const myChart = useRef<JqxChart>(null);

    const data = [
        { month: 'Jan', min: -1.9, max: 3.7, avg: 0.2 },
        { month: 'Feb', min: -0.9, max: 5.9, avg: 1.1 },
        { month: 'Mar', min: 0.8, max: 9.8, avg: 4.9 },
        { month: 'Apr', min: 4.1, max: 13.9, avg: 8.7 },
        { month: 'May', min: 8.0, max: 18.4, avg: 13.1 },
        { month: 'Jun', min: 11.3, max: 22.2, avg: 16.6 },
        { month: 'Jul', min: 13.3, max: 25.3, avg: 18.4 },
        { month: 'Aug', min: 13.0, max: 24.4, avg: 17.6 },
        { month: 'Sep', min: 10.3, max: 20.8, avg: 14.3 },
        { month: 'Oct', min: 6.6, max: 14.9, avg: 9.2 },
        { month: 'Nov', min: 2.1, max: 8.4, avg: 4.2 },
        { month: 'Dec', min: -0.5, max: 4.5, avg: 1.5 }
    ];

    const toolTipCustomFormatFn = (
        value: any,
        itemIndex: number,
        serie: any,
        group: any,
        categoryValue: any,
        categoryAxis: any
    ) => {
        const dataItem = data[itemIndex];
        return `<DIV style="text-align:left"><b>Month: ${categoryValue}</b><br />Min: ${dataItem.min}&deg;<br />Max: ${dataItem.max}&deg;<br />Average: ${dataItem.avg}&deg;</DIV>`;
    };

    const [chartProps, setChartProps] = useState<IChartProps>({
        description: 'Monthly unique visitors (percentage stacked)',
        padding: { left: 10, top: 5, right: 10, bottom: 5 },
        seriesGroups: [
            {
                columnsGapPercent: 100,
                series: [
                    { dataFieldTo: 'max', displayText: 'Temperature Range', dataFieldFrom: 'min', opacity: 1 }
                ],
                toolTipFormatFunction: toolTipCustomFormatFn,
                type: 'rangecolumn'
            },
            {
                series: [
                    { dataField: 'avg', displayText: 'Average Temperature', opacity: 1, lineWidth: 2 }
                ],
                toolTipFormatFunction: toolTipCustomFormatFn,
                type: 'spline'
            }
        ],
        source: data,
        title: 'Web Site Traffic Analysis',
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            alternatingBackgroundColor: '#E5E5E5',
            alternatingBackgroundColor2: '#F5F5F5',
            alternatingBackgroundOpacity: 0.5,
            maxValue: 30,
            minValue: -5,
            tickMarks: { color: '#888888' },
            title: { text: 'Temperature [C]' },
            unitInterval: 5
        },
        xAxis: {
            dataField: 'month',
            gridLines: {
                color: '#888888',
                step: 1,
                visible: true
            },
            textRotationAngle: 0,
            tickMarks: {
                color: '#888888',
                step: 1,
                visible: true
            },
            unitInterval: 1
        }
    });

    const checkboxSwapAxisOnChange = (event: any) => {
        const swap = event.args.checked;
        const newSeriesGroups = chartProps.seriesGroups
            ? chartProps.seriesGroups.map(group => ({
                  ...group,
                  orientation: swap ? 'horizontal' : 'vertical'
              }))
            : [];
        setChartProps(prev => ({
            ...prev,
            seriesGroups: newSeriesGroups
        }));
        setTimeout(() => {
            if (myChart.current) {
                myChart.current.refresh();
            }
        });
    };

    return (
        <div>
            <JqxChart
                ref={myChart}
                style={{ width: '850px', height: '500px' }}
                title={chartProps.title}
                description={chartProps.description}
                titlePadding={chartProps.titlePadding}
                showLegend={true}
                enableAnimations={true}
                enableCrosshairs={true}
                padding={chartProps.padding}
                source={chartProps.source}
                xAxis={chartProps.xAxis}
                valueAxis={chartProps.valueAxis}
                colorScheme={'scheme05'}
                seriesGroups={chartProps.seriesGroups}
            />
            <br />
            <br />
            <JqxCheckBox
                theme={'material-purple'}
                onChange={checkboxSwapAxisOnChange}
                style={{ marginTop: '5px' }}
            >
                Swap X and Y axes
            </JqxCheckBox>
        </div>
    );
}

export default App;