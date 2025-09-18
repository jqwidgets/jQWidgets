import * as React from 'react';
import { useMemo } from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const chartProps: IChartProps = useMemo(() => {
        const source: any = {
            datafields: [
                { name: 'Quarter' },
                { name: 'Change' }
            ],
            datatype: 'csv',
            url: 'us_gdp_2008-2013.csv'
        };

        return {
            description: '(source: Bureau of Economic Analysis)',
            padding: { left: 10, top: 5, right: 10, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        {
                            colorFunction: (value: any, itemIndex: any, serie: any, group: any): any => {
                                return (value < 0) ? '#CC1133' : '#55CC55';
                            },
                            dataField: 'Change',
                            displayText: 'Change',
                            toolTipFormatFunction: (
                                value: any,
                                itemIndex: any,
                                serie: any,
                                group: any,
                                categoryValue: any,
                                categoryAxis: any
                            ) => {
                                return (
                                    '<DIV style="text-align:left";><b>Year-Quarter: </b>' +
                                    categoryValue +
                                    '<br /><b>GDP Change:</b> ' +
                                    value +
                                    ' %</DIV>'
                                );
                            }
                        }
                    ],
                    type: 'column',
                    valueAxis: {
                        formatFunction: (value: any) => {
                            return value + '%';
                        },
                        maxValue: 10,
                        minValue: -10,
                        title: {
                            text: 'Percentage Change'
                        },
                        unitInterval: 2
                    }
                }
            ],
            source: new jqx.dataAdapter(source, {
                async: false,
                autoBind: true,
                loadError: (xhr: any, status: any, error: any) => {
                    alert('Error loading "' + source.url + '" : ' + error);
                }
            }),
            title: 'U.S. GDP Percentage Change',
            titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Quarter',
                formatFunction: (value: any) => {
                    return value;
                },
                textRotationAngle: -75,
                unitInterval: 1,
                valuesOnTicks: false
            }
        };
    }, []);

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            showLegend={false}
            enableAnimations={true}
            padding={chartProps.padding}
            borderLineWidth={1}
            titlePadding={chartProps.titlePadding}
            source={chartProps.source}
            xAxis={chartProps.xAxis}
            showBorderLine={true}
            seriesGroups={chartProps.seriesGroups}
            colorScheme={'scheme05'}
        />
    );
};

export default App;