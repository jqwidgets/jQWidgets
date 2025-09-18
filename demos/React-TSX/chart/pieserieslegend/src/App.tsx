import * as React from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const sourceObj: any = React.useMemo(() => ({
        datafields: [
            { name: 'Browser' },
            { name: 'Share' }
        ],
        datatype: 'csv',
        url: 'mobile_browsers_share_dec2011.txt'
    }), []);

    const dataAdapter = React.useMemo(() =>
        new jqx.dataAdapter(sourceObj, {
            async: false,
            autoBind: true,
            loadError: (xhr: any, status: any, error: any) => {
                alert('Error loading "' + sourceObj.url + '" : ' + error);
            }
        })
    , [sourceObj]);

    const chartProps: IChartProps = React.useMemo(() => ({
        title: 'Mobile browsers share',
        description: '(source: wikipedia.org)',
        legendLayout: { left: 700, top: 160, width: 300, height: 200, flow: 'vertical' },
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        source: dataAdapter,
        seriesGroups: [
            {
                type: 'pie',
                showLabels: true,
                series: [
                    {
                        centerOffset: 0,
                        dataField: 'Share',
                        displayText: 'Browser',
                        formatFunction: (value: any) => {
                            if (isNaN(value)) {
                                return value;
                            }
                            return parseFloat(value) + '%';
                        },
                        initialAngle: 15,
                        labelRadius: 170,
                        radius: 145
                    }
                ]
            }
        ]
    }), [dataAdapter]);

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
            showBorderLine={true}
            seriesGroups={chartProps.seriesGroups}
            colorScheme={'scheme03'}
            legendLayout={chartProps.legendLayout}
        />
    );
};

export default App;