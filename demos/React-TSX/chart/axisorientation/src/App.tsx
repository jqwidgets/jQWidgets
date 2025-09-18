import React, { useRef, useState } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';

const App = () => {
    const myChart = useRef<JqxChart>(null);

    const sampleData = [
        { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25, Goal: 40 },
        { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Goal: 50 },
        { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25, Goal: 60 },
        { Day: 'Thursday', Running: 20, Swimming: 20, Cycling: 25, Goal: 40 },
        { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25, Goal: 50 },
        { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Goal: 60 },
        { Day: 'Sunday', Running: 20, Swimming: 40, Cycling: 0, Goal: 90 }
    ];

    const [valueAxis, setValueAxis] = useState<IChartProps['valueAxis']>({
        labels: { horizontalAlignment: 'right' },
        maxValue: 100,
        minValue: 0,
        title: { text: 'Time in minutes' },
        unitInterval: 10
    });
    const [xAxis, setXAxis] = useState<IChartProps['xAxis']>({
        dataField: 'Day',
        unitInterval: 1
    });

    const [seriesGroups] = useState<IChartProps['seriesGroups']>([
        {
            columnsGapPercent: 50,
            series: [
                { dataField: 'Running', displayText: 'Running' },
                { dataField: 'Swimming', displayText: 'Swimming' },
                { dataField: 'Cycling', displayText: 'Cycling' }
            ],
            seriesGapPercent: 5,
            type: 'stackedcolumn'
        }
    ]);

    const [title] = useState('Fitness & exercise weekly scorecard');
    const [description] = useState('Time spent in vigorous exercise by activity');
    const [padding] = useState({ left: 5, top: 5, right: 5, bottom: 5 });
    const [titlePadding] = useState({ left: 90, top: 0, right: 0, bottom: 10 });

    const [source] = useState(sampleData);

    const flipValueAxisOnChange = (event: any) => {
        setValueAxis(prev => {
            const updated = { ...prev, flip: event.args.checked };
            setTimeout(() => { myChart.current?.refresh(); }, 0);
            return updated;
        });
    };

    const flipXAxisOnChange = (event: any) => {
        setXAxis(prev => {
            const updated = { ...prev, flip: event.args.checked };
            setTimeout(() => { myChart.current?.refresh(); }, 0);
            return updated;
        });
    };

    return (
        <div>
            <JqxChart
                ref={myChart}
                style={{ width: '850px', height: '500px' }}
                title={title}
                description={description}
                enableAnimations={false}
                enableAxisTextAnimation={true}
                padding={padding}
                titlePadding={titlePadding}
                source={source}
                xAxis={xAxis}
                animationDuration={1000}
                valueAxis={valueAxis}
                seriesGroups={seriesGroups}
                colorScheme="scheme01"
                showLegend={true}
            />
            <div style={{ marginTop: '10px', float: 'left' }}>
                <JqxCheckBox theme="material-purple" onChange={flipValueAxisOnChange}>
                    Invert value axis
                </JqxCheckBox>
                <JqxCheckBox theme="material-purple" style={{ marginTop: '5px' }} onChange={flipXAxisOnChange}>
                    Invert x-axis
                </JqxCheckBox>
            </div>
        </div>
    );
};

export default App;