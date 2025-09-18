import * as React from 'react';
import { useRef, useState } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

export interface IState extends IChartProps {
    symbolsList: IDropDownListProps['source'];
}

const App = () => {
    const myChart = useRef<JqxChart>(null);

    const sampleData: any[] = [
        { City: 'New York', SalesQ1: 330500, SalesQ2: 210500, YoYGrowth: 1.05 },
        { City: 'London', SalesQ1: 120000, SalesQ2: 169000, YoYGrowth: 1.15 },
        { City: 'Paris', SalesQ1: 205000, SalesQ2: 275500, YoYGrowth: 1.45 },
        { City: 'Tokyo', SalesQ1: 187000, SalesQ2: 130100, YoYGrowth: 0.45 },
        { City: 'Berlin', SalesQ1: 187000, SalesQ2: 113000, YoYGrowth: 1.65 },
        { City: 'San Francisco', SalesQ1: 142000, SalesQ2: 102000, YoYGrowth: 1.25 },
        { City: 'Chicago', SalesQ1: 171000, SalesQ2: 124000, YoYGrowth: 0.75 }
    ];

    const symbolsList = ['circle', 'diamond', 'square', 'triangle_up', 'triangle_down', 'triangle_left', 'triangle_right'];

    const [chartProps, setChartProps] = useState<IState>({
        description: '',
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        seriesGroups: [
            {
                series: [
                    { dataField: 'SalesQ1', symbolSize: 20, symbolType: 'circle', displayText: 'Sales in Q1' },
                    { dataField: 'SalesQ2', symbolSize: 20, symbolType: 'diamond', displayText: 'Sales in Q2' }
                ],
                type: 'scatter'
            }
        ],
        source: sampleData,
        symbolsList,
        title: 'Sales by City in Q1 & Q2',
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
    });

    const dropDownSerie1SymbolOnChange = (event: any): void => {
        const value = event.args.item.value;
        const newSeriesGroups = chartProps.seriesGroups ? JSON.parse(JSON.stringify(chartProps.seriesGroups)) : [];
        newSeriesGroups[0].series[0].symbolType = value;
        setChartProps({
            ...chartProps,
            seriesGroups: newSeriesGroups
        });
        setTimeout(() => {
            myChart.current?.update();
        }, 0);
    };

    const dropDownSerie2SymbolOnChange = (event: any): void => {
        const value = event.args.item.value;
        const newSeriesGroups = chartProps.seriesGroups ? JSON.parse(JSON.stringify(chartProps.seriesGroups)) : [];
        newSeriesGroups[0].series[1].symbolType = value;
        setChartProps({
            ...chartProps,
            seriesGroups: newSeriesGroups
        });
        setTimeout(() => {
            myChart.current?.update();
        }, 0);
    };

    return (
        <div>
            <JqxChart ref={myChart} style={{ width: '850px', height: '500px' }}
                title={chartProps.title} description={chartProps.description} rtl={true}
                showLegend={true} enableAnimations={true} padding={chartProps.padding}
                titlePadding={chartProps.titlePadding} source={chartProps.source} xAxis={chartProps.xAxis}
                seriesGroups={chartProps.seriesGroups} colorScheme={'scheme01'} />
            <table style={{ width: '550px' }}>
                <tbody>
                    <tr>
                        <td>
                            <p>Select Serie 1 Symbol:</p>
                            <JqxDropDownList theme={'material-purple'} onChange={dropDownSerie1SymbolOnChange}
                                width={200} height={25} selectedIndex={2}
                                dropDownHeight={100} source={symbolsList} />
                        </td>
                        <td>
                            <p>Select Serie 2 Symbol:</p>
                            <JqxDropDownList theme={'material-purple'} onChange={dropDownSerie2SymbolOnChange}
                                width={200} height={25} selectedIndex={1}
                                dropDownHeight={100} source={symbolsList} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default App;