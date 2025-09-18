import * as React from 'react';
import { useState, useRef } from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxRangeSelector, { IRangeSelectorProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

const App = () => {
    const recordsArray = useRef<any[]>([]);
    const [source] = useState(() => {
        const dataSource = {
            datafields: [
                { name: 'month' },
                { name: 'min' },
                { name: 'max' }
            ],
            datatype: 'json',
            url: 'weather_geneva.txt'
        };
        return new jqx.dataAdapter(dataSource, {
            async: false,
            autoBind: true,
            loadComplete: (data: any, status: any, xhr: any, records: any[]): void => {
                recordsArray.current = records;
            },
            loadError: (xhr: any, status: any, error: any) => {
                alert('Error loading "' + dataSource.url + '" : ' + error);
            }
        });
    });

    const labelsFormatFunction: IRangeSelectorProps['labelsFormatFunction'] = (data: any): string => {
        if (recordsArray.current[data]) {
            return "1 " + recordsArray.current[data].month;
        } else {
            return "31 " + recordsArray.current[data - 1]?.month;
        }
    };

    const markersFormatFunction: IRangeSelectorProps['markersFormatFunction'] = (data: any): string => {
        if (recordsArray.current[data]) {
            return "1 " + recordsArray.current[data].month;
        } else {
            return "31 " + recordsArray.current[data - 1]?.month;
        }
    };

    const padding: IChartProps['padding'] = { left: 5, top: 0, right: 0, bottom: 0 };
    const titlePadding: IChartProps['titlePadding'] = { left: 0, top: 0, right: 0, bottom: 0 };
    const seriesGroups: IChartProps['seriesGroups'] = [
        {
            series: [
                { dataField: 'max', lineColor: 'green', displayText: 'Max Temperature' },
                { dataField: 'min', lineColor: 'red', displayText: 'Min Temperature' }
            ],
            showLabels: false,
            type: 'line',
            valueAxis: {
                visible: false
            }
        }
    ];
    const xAxis: IChartProps['xAxis'] = {
        visible: false
    };

    return (
        <div>
            <label style={{ marginLeft: '250px', fontSize: '18px', fontWeight: 'bold' }}>Weather in Geneva, Switzerland</label>
            <br />
            <label style={{ marginLeft: '250px', fontSize: '14px', fontWeight: 'bold' }}>Climatological Information about Geneva</label>
            <JqxRangeSelector
                theme={'material-purple'}
                width={'100%'}
                height={200}
                min={0}
                max={12}
                range={{ from: 3, to: 9 }}
                majorTicksInterval={1}
                minorTicksInterval={1}
                labelsOnTicks={false}
                labelsFormatFunction={labelsFormatFunction}
                markersFormatFunction={markersFormatFunction}
            >
                <JqxChart
                    theme={'material-purple'}
                    style={{ width: '750px', height: '200px' }}
                    title={''}
                    description={''}
                    showBorderLine={false}
                    showLegend={false}
                    enableAnimations={true}
                    padding={padding}
                    titlePadding={titlePadding}
                    source={source}
                    xAxis={xAxis}
                    colorScheme={'scheme05'}
                    seriesGroups={seriesGroups}
                />
            </JqxRangeSelector>
        </div>
    );
};

export default App;