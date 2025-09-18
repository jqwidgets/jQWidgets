import * as React from 'react';
import { useMemo } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

function generateData(): any[] {
    const data: any[] = [
        { year: 2002, male: 75.4, female: 58.1 },
        { year: 2003, male: 75.4, female: 58.7 },
        { year: 2004, male: 75.5, female: 59.4 },
        { year: 2005, male: 76.0, female: 60.0 },
        { year: 2006, male: 76.8, female: 61.1 },
        { year: 2007, male: 77.7, female: 62.1 },
        { year: 2008, male: 77.8, female: 62.8 },
        { year: 2009, male: 75.7, female: 62.3 },
        { year: 2010, male: 75.0, female: 62.0 },
        { year: 2011, male: 74.9, female: 62.2 },
        { year: 2012, male: 74.5, female: 62.4 },
        { year: 2013, male: 74.3, female: 62.6 },
        { year: 'Summary', male: 74.3, female: 62.6, summary: true }
    ];

    for (let i = data.length - 2; i > 0; i--) {
        data[i].male -= data[i - 1].male;
        data[i].female -= data[i - 1].female;
    }

    return data;
}

const App = () => {
    const data = useMemo(() => generateData(), []);

    const chartProps: IChartProps = useMemo(() => ({
        description: 'data source: Eurostat',
        padding: { left: 10, top: 5, right: 10, bottom: 5 },
        seriesGroups: [
            {
                series: [
                    {
                        colorFunction: (value: any, itemIndex: any, serie: any, group: any): string => {
                            if (itemIndex === data.length - 1) {
                                return '#3F3A3B';
                            }
                            return (value < 0) ? '#C30E1F' : '#117406';
                        },
                        dataField: 'male',
                        displayText: 'Male employment',
                        summary: 'summary'
                    },
                    {
                        colorFunction: (value: any, itemIndex: any, serie: any, group: any): string => {
                            if (itemIndex === data.length - 1) {
                                return '#4F4A4B';
                            }
                            return (value < 0) ? '#D30E2F' : '#24A037';
                        },
                        dataField: 'female',
                        displayText: 'Female employment',
                        summary: 'summary'
                    }
                ],
                toolTipFormatFunction: (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any): string => {
                    const dataItem = data[itemIndex];
                    const val = Math.round(value * 100) / 100;
                    return '<DIV style="text-align:left"><b>' +
                        ((itemIndex === data.length - 1) ? 'Summary:' : 'Year: ' + dataItem.year) + '</b>' +
                        '<br />' + serie.displayText + ' ' + ((itemIndex !== 0 && itemIndex !== data.length - 1) ? 'change: ' : 'rate: ') + val + ' %' +
                        '</DIV>';
                },
                type: 'waterfall'
            }
        ],
        source: data,
        title: 'EU Employment rate trends by gender',
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            labels: {
                formatSettings: {
                    decimalPlaces: 1,
                    sufix: '%'
                }
            },
            title: { text: 'Employment rate<br>' }
        },
        xAxis: {
            dataField: 'year',
            displayText: 'Year',
            labels: { angle: 0 },
            type: 'basic',
        }
    }), [data]);

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            showLegend={true}
            enableAnimations={true}
            padding={chartProps.padding}
            titlePadding={chartProps.titlePadding}
            source={chartProps.source}
            xAxis={chartProps.xAxis}
            valueAxis={chartProps.valueAxis}
            seriesGroups={chartProps.seriesGroups}
            colorScheme={'scheme06'}
        />
    );
};

export default App;