import * as React from 'react';

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

const App = () => {
    const myChart = React.useRef<JqxChart>(null);
    const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const source: any = React.useMemo(() => ({
        datafields: [
            { name: 'Date' },
            { name: 'SPOpen' },
            { name: 'SPHigh' },
            { name: 'SPLow' },
            { name: 'SPClose' },
            { name: 'SPVolume' },
            { name: 'SPAdjClose' }
        ],
        datatype: 'tsv',
        url: 'nasdaq_vs_sp500_detailed.txt'
    }), []);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    const toolTipCustomFormatFn = React.useCallback((
        value: any,
        itemIndex: any,
        serie: any,
        group: any,
        categoryValue: any,
        categoryAxis: any
    ) => {
        const dataItem = dataAdapter.records[itemIndex];
        const volume = dataItem.SPVolume;
        return '<DIV style="text-align:left"><b>Date: ' +
            categoryValue.getDate() + '-' + months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
            '</b><br />Open price: $' + value.open +
            '</b><br />Close price: $' + value.close +
            '</b><br />Low price: $' + value.low +
            '</b><br />High price: $' + value.high +
            '</b><br />Daily volume: ' + volume +
            '</DIV>';
    }, [dataAdapter, months]);

    const source2: any = React.useMemo(() => ({
        datafields: [
            { name: 'Date' },
            { name: 'S&P 500' },
            { name: 'NASDAQ' }
        ],
        datatype: 'csv',
        url: 'nasdaq_vs_sp500.txt'
    }), []);

    const state = React.useMemo(() => ({
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
        source: dataAdapter,
        source2: new jqx.dataAdapter(source2),
        xAxis: {
            dataField: 'Date',
            formatFunction: (value: any) => {
                return value.getDate() + '-' + months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
            },
            maxValue: new Date(2014, 11, 1),
            minValue: new Date(2014, 0, 1),
            type: 'date',
            valuesOnTicks: true
        },
        xAxis2: {
            baseUnit: 'month',
            dataField: 'Date',
            gridLines: { visible: true, interval: 3 },
            labels: {
                formatFunction: (value: any) => {
                    return months[value.getMonth()];
                }
            },
            tickMarks: { visible: true, interval: 1 },
            toolTipFormatFunction: (value: any) => {
                return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
            },
            type: 'date',
            unitInterval: 1,
            valuesOnTicks: true
        },
        seriesGroups: [
            {
                columnsMinWidth: 4,
                series: [
                    {
                        dataFieldClose: "SPClose",
                        dataFieldHigh: "SPHigh",
                        dataFieldLow: "SPLow",
                        dataFieldOpen: "SPOpen",
                        displayText: "S&P 500",
                        displayTextClose: "S&P Close price",
                        displayTextHigh: "S&P High price",
                        displayTextLow: "S&P Low price",
                        displayTextOpen: "S&P Open price",
                        lineWidth: 1
                    }
                ],
                toolTipFormatFunction: toolTipCustomFormatFn,
                type: 'candlestick',
                valueAxis: {
                    minValue: 1500,
                    title: { text: 'S&P 500<br>' }
                }
            },
            {
                series: [
                    {
                        dataField: 'SPVolume',
                        displayText: 'Volume',
                        lineWidth: 1
                    }
                ],
                type: 'line',
                valueAxis:
                {
                    gridLines: { visible: false },
                    labels: {
                        formatFunction: (value: any) => {
                            return value / 1000000 + 'M';
                        }
                    },
                    position: 'right',
                    tickMarks: { visible: false },
                    title: { text: '<br>Daily Volume' }

                }
            }
        ],
        seriesGroups2: [
            {
                series: [
                    { dataField: 'S&P 500', displayText: 'S&P 500' },
                    { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                ],
                type: 'line',
                valueAxis:
                {
                    title: { text: 'Daily Closing Price' },
                    unitInterval: 500,
                    visible: true
                }
            }
        ]
    }), [dataAdapter, source2, months, toolTipCustomFormatFn]);

    return (
        // @ts-ignore
        <JqxTabs theme={'material-purple'} width={'100%'} height={560}>
            <ul>
                <li style={{ marginLeft: '30px' }}>
                    <div style={{ height: '20px', marginTop: '5px' }}>
                        <div style={{ marginLeft: '4px', verticalAlign: 'middle', textAlign: 'center', float: 'left' }}>
                            Candlestick Chart
                        </div>
                    </div>
                </li>
                <li>
                    <div style={{ height: '20px', marginTop: '5px' }}>
                        <div style={{ marginLeft: '4px', verticalAlign: 'middle', textAlign: 'center', float: 'left' }}>
                            Line Chart
                        </div>
                    </div>
                </li>
            </ul>
            <div style={{ overflow: 'hidden' }}>
                <JqxChart ref={myChart} style={{ width: '100%', height: '100%' }}
                    title={'S&P 500 Candlestick Chart'} description={'January 2014 - November 2014'}
                    enableAnimations={true} animationDuration={1500}
                    enableCrosshairs={true} padding={state.padding}
                    source={state.source} xAxis={state.xAxis}
                    seriesGroups={state.seriesGroups} colorScheme={'scheme17'} />
            </div>
            <div style={{ overflow: 'hidden' }}>
                <JqxChart style={{ width: '100%', height: '100%' }}
                    title={'U.S.Stock Market Index Performance (2014)'} description={'NASDAQ Composite compared to S&P 500'}
                    showLegend={true} enableAnimations={true} padding={state.padding}
                    animationDuration={1500} source={state.source2} xAxis={state.xAxis2}
                    seriesGroups={state.seriesGroups2} colorScheme={'scheme04'} />
            </div>
        </JqxTabs>
    );
};

export default App;