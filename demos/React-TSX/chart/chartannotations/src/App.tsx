import * as React from 'react';

import './App.css';

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const source: any = React.useMemo(() => ({
        datafields: [
            { name: 'Country' },
            { name: 'GDP' },
            { name: 'DebtPercent' },
            { name: 'Debt' }
        ],
        datatype: 'csv',
        url: 'gdp_dept_2010.txt'
    }), []);

    const fnLabelsClass = React.useCallback((value: any) => {
        return value > 100 ? 'redLabel' : 'greenLabel';
    }, []);

    const fnLabelsBorderColor = React.useCallback((value: any) => {
        return value > 100 ? '#FF0000' : '#89A54E';
    }, []);

    const chartSource = React.useMemo(() => 
        new jqx.dataAdapter(source, { 
            async: false, 
            autoBind: true, 
            loadError: (xhr: any, status: any, error: any) => { 
                alert('Error loading "' + source.url + '" : ' + error); 
            } 
        }), 
    [source]);

    const chartProps: IChartProps = React.useMemo(() => ({
        description: 'Per capita GDP and Debt in 2010',
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        seriesGroups: [
            {
                columnsGapPercent: 50,
                series: [
                    { dataField: 'GDP', displayText: 'GDP per Capita' },
                    { dataField: 'Debt', displayText: 'Debt per Capita' }
                ],
                type: 'column',
                valueAxis: {
                    gridLines: { visible: false },
                    title: {
                        text: 'GDP & Debt per Capita (USD)<br>'
                    }                       
                }
            },
            {
                annotations: [
                    {              
                        fillColor: '#EFEFEF',
                        height: 20,
                        lineColor: 'red',
                        offset: { x: -45, y: -25 },
                        text: {
                            angle: 0,
                            'class': 'redLabel',
                            offset: {
                                x: 2,
                                y: 2
                            },
                            value: 'Debt threshold'                              
                        },
                        type: 'rect', 
                        width: 90,
                        xValue: 6,
                        yValue: 90,
                    }
                ],
                series: [
                    {
                        dataField: 'DebtPercent',
                        displayText: 'Debt (% of GDP)',
                        labels:
                        {
                            backgroundColor: 'white',
                            backgroundOpacity: 0.7,
                            borderColor: fnLabelsBorderColor,
                            borderOpacity: 0.7,
                            'class': fnLabelsClass,
                            padding: { left: 5, right: 5, top: 1, bottom: 1 },
                            visible: true,
                        },
                        linesUnselectMode: 'click'
                    }
                ],
                type: 'line',
                valueAxis: {
                    bands: [
                        {
                            dashStyle: '2,2', fillColor: 'red', lineWidth: 2, maxValue: 90, minValue: 90
                        }
                    ],
                    gridLines: { visible: false },
                    labels: {
                        formatSettings: { sufix: '%' },
                        horizontalAlignment: 'left'                           
                    },                      
                    position: 'right',
                    title: { text: 'Debt (% of GDP)' },
                    unitInterval: 10,
                    visible: true                       
                }                    
            }
        ],
        source: chartSource,
        title: 'Country economic comparison',
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        xAxis: {
            dataField: 'Country',
            flip: false,
            gridLines: { visible: false },
            toolTipFormatSettings: { sufix: ' USD', thousandsSeparator: ',' },
        }
    }), [chartSource, fnLabelsClass, fnLabelsBorderColor]);

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
            seriesGroups={chartProps.seriesGroups}
            colorScheme={'scheme01'}
        />
    );
};

export default App;