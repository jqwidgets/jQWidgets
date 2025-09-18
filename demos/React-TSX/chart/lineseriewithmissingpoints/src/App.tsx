import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const App = () => {
    const myChart = useRef<JqxChart>(null);

    const sampleData: any[] = [29, undefined, 10, 15, 10, undefined, NaN, 30, 25, undefined, 33, 19, 11];

    const [seriesGroups, setSeriesGroups] = useState<IChartProps['seriesGroups']>([
        {
            series: [
                { emptyPointsDisplay: 'skip', displayText: 'Value', lineWidth: 2, symbolSize: 8, symbolType: 'circle' }
            ],
            source: sampleData,
            toolTipFormatFunction: (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any) => {
                return '<DIV style="text-align:left"><b>Index:</b> ' +
                    itemIndex + '<br /><b>Value:</b> ' +
                    value + '<br /></DIV>';
            },
            type: 'line',
            valueAxis: {
                title: { text: 'Value<br>' }
            }
        }
    ]);

    const [chartProps] = useState<Omit<IChartProps, 'seriesGroups'>>({
        description: 'Sample line serie with missing and invalid values',
        padding: { left: 5, top: 5, right: 15, bottom: 5 },
        source: sampleData,
        title: 'Line serie with missing points',
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        xAxis: {
            valuesOnTicks: false
        }
    });

    const dropDownOnSelect = useCallback((event: any) => {
        const args = event.args;
        if (args) {
            const value = args.item.value;
            const newSeriesGroups = [...seriesGroups];
            if (newSeriesGroups[0] && newSeriesGroups[0].series && newSeriesGroups[0].series[0]) {
                newSeriesGroups[0] = {
                    ...newSeriesGroups[0],
                    series: [
                        {
                            ...newSeriesGroups[0].series[0],
                            emptyPointsDisplay: value
                        }
                    ]
                };
            }
            setSeriesGroups(newSeriesGroups);
            setTimeout(() => {
                myChart.current?.update();
            });
        }
    }, [seriesGroups]);

    return (
        <div>
            <JqxChart ref={myChart} style={{ width: '850px', height: '500px' }}
                title={chartProps.title} description={chartProps.description}
                showLegend={true} padding={chartProps.padding}
                titlePadding={chartProps.titlePadding} source={chartProps.source} xAxis={chartProps.xAxis}
                seriesGroups={seriesGroups} colorScheme={'scheme05'} />

            <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Select missing points display mode:</p>

            <JqxDropDownList theme={'material-purple'} onSelect={dropDownOnSelect}
                width={220} height={25} selectedIndex={0}
                dropDownHeight={85} source={['skip', 'zero', 'connect']} />
        </div>
    );
};

export default App;