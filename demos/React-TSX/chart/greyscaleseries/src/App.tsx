import * as React from 'react';
import { useRef, useState } from 'react';

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';

const App = () => {
    const myChart = useRef<JqxChart>(null);

    const sampleData: any[] = [
        { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25, Goal: 40 },
        { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Goal: 50 },
        { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25, Goal: 60 },
        { Day: 'Thursday', Running: 20, Swimming: 20, Cycling: 25, Goal: 40 },
        { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25, Goal: 50 },
        { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Goal: 60 },
        { Day: 'Sunday', Running: 20, Swimming: 40, Cycling: 0, Goal: 90 }
    ];

    const [seriesGroups, setSeriesGroups] = useState<IChartProps['seriesGroups']>([
        {
            series: [
                { greyScale: true, dataField: 'Goal', displayText: 'Personal Goal', opacity: 0.7 }
            ],
            type: 'splinearea'
        },
        {
            columnsGapPercent: 50,
            series: [
                { greyScale: true, dataField: 'Running', displayText: 'Running' },
                { greyScale: true, dataField: 'Swimming', displayText: 'Swimming' },
                { greyScale: false, dataField: 'Cycling', displayText: 'Cycling' }
            ],
            seriesGapPercent: 5,
            type: 'stackedcolumn'
        }
    ]);

    const stateProps = {
        description: 'Time spent in vigorous exercise by activity',
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        title: 'Fitness & exercise weekly scorecard',
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            gridLines: { color: '#CACACA' },
            maxValue: 100,
            minValue: 0,
            tickMarks: { color: '#CACACA' },
            title: { text: 'Time in minutes' },
            unitInterval: 10
        },
        xAxis: {
            dataField: 'Day',
            gridLines: {
                color: '#CACACA',
                interval: 1,
                visible: false,
            },
            tickMarks: {
                color: '#CACACA',
                interval: 1,
                visible: true
            },
            unitInterval: 1
        },
        source: sampleData
    };

    const updateGreyScale = (groupIndex: number, seriesIndex: number, checked: boolean) => {
        setSeriesGroups(prev => {
            const updated = JSON.parse(JSON.stringify(prev));
            updated[groupIndex].series[seriesIndex].greyScale = !checked;
            return updated;
        });
        setTimeout(() => { myChart.current && myChart.current.refresh(); }, 0);
    };

    const runningOnChange = (event: any) => updateGreyScale(1, 0, event.args.checked);
    const swimmingOnChange = (event: any) => updateGreyScale(1, 1, event.args.checked);
    const cyclingOnChange = (event: any) => updateGreyScale(1, 2, event.args.checked);
    const goalOnChange = (event: any) => updateGreyScale(0, 0, event.args.checked);

    return (
        <div>
            <JqxChart
                ref={myChart}
                style={{ width: '850px', height: '500px' }}
                title={stateProps.title}
                description={stateProps.description}
                showLegend={true}
                enableAnimations={false}
                padding={stateProps.padding}
                titlePadding={stateProps.titlePadding}
                source={stateProps.source}
                xAxis={stateProps.xAxis}
                valueAxis={stateProps.valueAxis}
                seriesGroups={seriesGroups}
                colorScheme={'scheme05'}
            />
            <div style={{ marginTop: '10px' }}>
                <div style={{ float: 'left' }}>
                    <JqxCheckBox theme={'material-purple'} width={120} onChange={runningOnChange}>Running</JqxCheckBox>
                    <JqxCheckBox theme={'material-purple'} width={120} onChange={swimmingOnChange}>Swimming</JqxCheckBox>
                </div>
                <div style={{ float: 'left' }}>
                    <JqxCheckBox theme={'material-purple'} width={120} checked={true} onChange={cyclingOnChange}>Cycling</JqxCheckBox>
                    <JqxCheckBox theme={'material-purple'} width={120} onChange={goalOnChange}>Personal Goal</JqxCheckBox>
                </div>
            </div>
        </div>
    );
};

export default App;