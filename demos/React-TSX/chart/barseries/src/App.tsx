import * as React from 'react';
import { useRef } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

function App() {
    const myChart = useRef<JqxChart>(null);

    const sampleData = [
        { Country: 'China', Population: 1347350000, Percent: 19.18 },
        { Country: 'India', Population: 1210193422, Percent: 17.22 },
        { Country: 'USA', Population: 313912000, Percent: 4.47 },
        { Country: 'Indonesia', Population: 237641326, Percent: 3.38 },
        { Country: 'Brazil', Population: 192376496, Percent: 2.74 }
    ];

    const chartProps: IChartProps = {
        title: 'Top 5 most populated countries',
        description: 'Statistics for 2018',
        enableAnimations: true,
        showLegend: true,
        padding: { left: 20, top: 5, right: 20, bottom: 5 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        source: sampleData,
        xAxis: {
            dataField: 'Country',
            flip: false,
            gridLines: { visible: true }
        },
        valueAxis: {
            flip: true,
            labels: {
                formatFunction: (value: number) => {
                    return String(value / 1000000);
                },
                visible: true
            }
        },
        seriesGroups: [
            {
                columnsGapPercent: 50,
                orientation: 'horizontal',
                series: [
                    { dataField: 'Population', displayText: 'Population (millions)', toolTipFormatSettings: { thousandsSeparator: ',' } }
                ],
                type: 'column'
            }
        ],
        colorScheme: 'scheme01'
    };

    return (
        <JqxChart
            ref={myChart}
            style={{ width: '850px', height: '500px' }}
            {...chartProps}
        />
    );
}

export default App;