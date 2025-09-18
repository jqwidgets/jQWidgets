import * as React from 'react';
import { useRef, useState } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const sampleData = [
    { City: 'New York', SalesQ1: 310500, SalesQ2: 210500, YoYGrowthQ1: 1.05, YoYGrowthQ2: 1.25 },
    { City: 'London', SalesQ1: 120000, SalesQ2: 169000, YoYGrowthQ1: 1.15, YoYGrowthQ2: 0.95 },
    { City: 'Paris', SalesQ1: 205000, SalesQ2: 275500, YoYGrowthQ1: 1.45, YoYGrowthQ2: 1.15 },
    { City: 'Tokyo', SalesQ1: 187000, SalesQ2: 130100, YoYGrowthQ1: 0.45, YoYGrowthQ2: 0.55 },
    { City: 'Berlin', SalesQ1: 187000, SalesQ2: 113000, YoYGrowthQ1: 1.65, YoYGrowthQ2: 1.05 },
    { City: 'San Francisco', SalesQ1: 142000, SalesQ2: 102000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.15 },
    { City: 'Chicago', SalesQ1: 171000, SalesQ2: 124000, YoYGrowthQ1: 0.75, YoYGrowthQ2: 0.65 }
];

const symbolsList: IDropDownListProps["source"] = ['circle', 'diamond', 'square', 'triangle_up', 'triangle_down', 'triangle_left', 'triangle_right'];

const initialSeriesGroups: IChartProps['seriesGroups'] = [
    {
        series: [
            { dataField: 'SalesQ1', radiusDataField: 'YoYGrowthQ1', minRadius: 10, maxRadius: 30, displayText: 'Sales in Q1', symbolType: 'circle' },
            { dataField: 'SalesQ2', radiusDataField: 'YoYGrowthQ2', minRadius: 10, maxRadius: 30, displayText: 'Sales in Q2', symbolType: 'circle' }
        ],
        type: 'bubble'
    }
];

const App = () => {
    const myChart = useRef<JqxChart>(null);
    const [seriesGroups, setSeriesGroups] = useState<IChartProps['seriesGroups']>(initialSeriesGroups);
    
    const chartState: IChartProps = {
        description: '(the size of the circles represents relative YoY growth)',
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        seriesGroups: seriesGroups,
        source: sampleData,
        title: 'Sales by City in Q1 and Q2, and YoY sales growth',
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            labels: {
                formatSettings: { prefix: '$', thousandsSeparator: ',' },
                horizontalAlignment: 'right'
            },
            maxValue: 350000,
            minValue: 50000,
            title: { text: 'Sales ($)<br>' },
            unitInterval: 50000
        },
        xAxis: {
            dataField: 'City',
            valuesOnTicks: false
        }
    };

    const dropDown1OnChange = (event: any) => {
        const value = event.args.item.value;
        const newSeriesGroups = seriesGroups ? JSON.parse(JSON.stringify(seriesGroups)) : [];
        if (newSeriesGroups[0]?.series && newSeriesGroups[0].series[0]) {
            newSeriesGroups[0].series[0].symbolType = value;
        }
        setSeriesGroups(newSeriesGroups);
        setTimeout(() => {
            myChart.current && myChart.current.update();
        });
    };

    const dropDown2OnChange = (event: any) => {
        const value = event.args.item.value;
        const newSeriesGroups = seriesGroups ? JSON.parse(JSON.stringify(seriesGroups)) : [];
        if (newSeriesGroups[0]?.series && newSeriesGroups[0].series[1]) {
            newSeriesGroups[0].series[1].symbolType = value;
        }
        setSeriesGroups(newSeriesGroups);
        setTimeout(() => {
            myChart.current && myChart.current.update();
        });
    };

    return (
        <div>
            <JqxChart
                ref={myChart}
                style={{ width: '850px', height: '500px' }}
                title={chartState.title}
                description={chartState.description}
                enableAnimations={true}
                showLegend={true}
                padding={chartState.padding}
                titlePadding={chartState.titlePadding}
                source={chartState.source}
                xAxis={chartState.xAxis}
                valueAxis={chartState.valueAxis}
                seriesGroups={chartState.seriesGroups}
                colorScheme={'scheme04'}
            />
            <table style={{ width: '550px' }}>
                <tbody>
                    <tr>
                        <td>
                            <p>Select Serie 1 Symbol:</p>
                            <JqxDropDownList
                                theme={'material-purple'}
                                onChange={dropDown1OnChange}
                                width={200}
                                height={25}
                                selectedIndex={0}
                                dropDownHeight={100}
                                source={symbolsList}
                            />
                        </td>
                        <td>
                            <p>Select Serie 2 Symbol:</p>
                            <JqxDropDownList
                                theme={'material-purple'}
                                onChange={dropDown2OnChange}
                                width={200}
                                height={25}
                                selectedIndex={0}
                                dropDownHeight={100}
                                source={symbolsList}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default App;