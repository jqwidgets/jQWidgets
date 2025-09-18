import * as React from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const source: any = React.useMemo(() => ({
        datafields: [
            { name: 'Date' },
            { name: 'Open' },
            { name: 'High' },
            { name: 'Low' },
            { name: 'Close' },
            { name: 'Volume' },
            { name: 'AdjClose' }
        ],
        datatype: 'csv',
        url: 'TSLA_stockprice.csv'
    }), []);

    const toolTipCustomFormatFn = React.useCallback(
        (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any): string => {
            return 'Index: ' + itemIndex + ", Value: " + value;
        },
        []
    );

    const dataAdapter = React.useMemo(() =>
        new jqx.dataAdapter(source, {
            async: false,
            autoBind: true,
            loadError: (xhr: any, status: any, error: any) => {
                alert('Error loading "' + source.url + '" : ' + error);
            }
        })
        , [source]
    );

    const chartProps: IChartProps = React.useMemo(() => ({
        title: 'Range selector with regular x-axis',
        description: 'In this example the range selector works with (non-date) axis',
        padding: { left: 5, top: 5, right: 20, bottom: 5 },
        source: dataAdapter,
        xAxis: {
            flip: false,
            maxValue: 550,
            minValue: 175,
            rangeSelector: {
                backgroundColor: 'white',
                gridLines: { visible: false },
                padding: { top: 20, bottom: 0 },
                serieType: 'area',
                size: 110
            },
            valuesOnTicks: true
        },
        seriesGroups: [
            {
                series: [
                    { dataField: 'Close', lineWidth: 1 }
                ],
                toolTipFormatFunction: toolTipCustomFormatFn,
                type: 'line',
                valueAxis: {
                    flip: false,
                    title: { text: 'Value<br><br>' }
                }
            }
        ]
    }), [dataAdapter, toolTipCustomFormatFn]);

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            showLegend={false}
            enableAnimations={true}
            padding={chartProps.padding}
            source={chartProps.source}
            xAxis={chartProps.xAxis}
            enableCrosshairs={true}
            animationDuration={1500}
            seriesGroups={chartProps.seriesGroups}
            colorScheme={'scheme02'}
        />
    );
};

export default App;