import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const sampleData = [
        { Country: 'Switzerland', Inflation2012: -0.95, Inflation2011: -0.72 },
        { Country: 'USA', Inflation2012: 2.35, Inflation2011: 2.96 },
        { Country: 'Germany', Inflation2012: 2.03, Inflation2011: 2.10 },
        { Country: 'India', Inflation2012: 8.38, Inflation2011: 6.49 },
        { Country: 'China', Inflation2012: 3.34, Inflation2011: 4.06 },
        { Country: 'Canada', Inflation2012: 2.05, Inflation2011: 2.30 }
    ];

    const chartProps: IChartProps = {
        description: 'Years: 2018 vs 2019',
        padding: { left: 20, top: 5, right: 20, bottom: 5 },
        seriesGroups: [
            {
                columnsGapPercent: 50,
                orientation: 'horizontal',
                series: [
                    { dataField: 'Inflation2012', displayText: 'Inflation 2012', toolTipFormatSettings: { sufix: '%' } },
                    { dataField: 'Inflation2011', displayText: 'Inflation 2011', toolTipFormatSettings: { sufix: '%' } }
                ],
                type: 'column'
            }
        ],
        source: sampleData,
        title: 'CPI inflation comparison by country',
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        valueAxis: {
            labels: { formatSettings: { sufix: '%' } },
            maxValue: 10,
            minValue: -5,
            title: { visible: false },
            unitInterval: 1
        },
        xAxis: {
            dataField: 'Country'
        }
    };

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
            colorScheme={'scheme02'}
        />
    );
};

export default App;