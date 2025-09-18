import * as React from 'react';
import { useRef, useCallback, useMemo } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

function App() {
    const eventText = useRef<HTMLDivElement>(null);

    const chartProps = useMemo<IChartProps>(() => {
        const sampleData = [
            { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
            { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
            { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
            { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
            { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
            { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
            { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
        ];

        return {
            description: 'Time spent in vigorous exercise',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'Keith', displayText: 'Keith' },
                        { dataField: 'Erica', displayText: 'Erica' },
                        { dataField: 'George', displayText: 'George' }
                    ],
                    type: 'column',
                    valueAxis: {
                        maxValue: 100,
                        minValue: 0,
                        title: { text: 'Time in minutes' },
                        unitInterval: 10
                    }
                }
            ],
            source: sampleData,
            title: 'Fitness & exercise weekly scorecard',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Day',
                type: 'basic'
            }
        };
    }, []);

    const chartEvent = useCallback((event: any) => {
        let eventData;
        if (event) {
            if (event.args) {
                if (event.type === 'toggle') {
                    eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + event.args.serie.dataField + '<b>, visible: </b>' + event.args.state + '</div>';
                    if (eventText.current) eventText.current.innerHTML = eventData;
                    return;
                }
                eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + event.args.serie.dataField + '<b>, Value: </b>' + event.args.elementValue + '</div>';
            } else {
                eventData = '<div><b>Last Event: </b>' + event.type + '';
            }
            if (eventText.current) eventText.current.innerHTML = eventData;
        }
    }, []);

    return (
        <div>
            <div onMouseLeave={chartEvent} onMouseEnter={chartEvent}>
                <JqxChart
                    onClick={chartEvent}
                    onToggle={chartEvent}
                    style={{ width: '850px', height: '500px' }}
                    {...chartProps}
                    showToolTips={false}
                    enableAnimations={true}
                    colorScheme="scheme04"
                />
            </div>
            <div ref={eventText} style={{ width: '400px', height: '30px' }} />
        </div>
    );
}

export default App;